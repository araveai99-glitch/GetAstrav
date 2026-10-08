-- FounderOS / ASTRAV Command Center PostgreSQL Database Schema
-- Migration: 20261008000000_schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Organizations
CREATE TABLE IF NOT EXISTS public.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    billing_tier TEXT NOT NULL DEFAULT 'Pilot',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. User Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    age INT,
    gender TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Departments
CREATE TABLE IF NOT EXISTS public.departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Teams
CREATE TABLE IF NOT EXISTS public.teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    department_id UUID REFERENCES public.departments(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Team Members (Join Table)
CREATE TABLE IF NOT EXISTS public.team_members (
    team_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (team_id, user_id)
);

-- 6. Projects
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    department_id UUID NOT NULL REFERENCES public.departments(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. Project Teams (Join Table)
CREATE TABLE IF NOT EXISTS public.project_teams (
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    team_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, team_id)
);

-- 8. Goals
CREATE TABLE IF NOT EXISTS public.goals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    weight NUMERIC(10,2) NOT NULL DEFAULT 1.00,
    progress_computed NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    progress_override NUMERIC(5,2) DEFAULT NULL,
    risk_status TEXT NOT NULL DEFAULT 'none' CHECK (risk_status IN ('none', 'at_risk', 'overdue')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. Milestones
CREATE TABLE IF NOT EXISTS public.milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    goal_id UUID NOT NULL REFERENCES public.goals(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    weight NUMERIC(10,2) NOT NULL DEFAULT 1.00,
    progress_computed NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    progress_override NUMERIC(5,2) DEFAULT NULL,
    progress_override_previous NUMERIC(5,2) DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 10. Tasks
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    goal_id UUID NOT NULL REFERENCES public.goals(id) ON DELETE CASCADE,
    milestone_id UUID REFERENCES public.milestones(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    description TEXT,
    weight NUMERIC(10,2) NOT NULL DEFAULT 1.00,
    deadline TIMESTAMPTZ,
    assignee_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    assigner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reviewer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NULL,
    approval_status TEXT NOT NULL DEFAULT 'not_required' CHECK (approval_status IN ('not_required', 'pending', 'approved')),
    blocked_by UUID REFERENCES public.tasks(id) ON DELETE SET NULL,
    overdue_email_sent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 11. Subtasks
CREATE TABLE IF NOT EXISTS public.subtasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    weight NUMERIC(10,2) NOT NULL DEFAULT 1.00,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. Task Comments
CREATE TABLE IF NOT EXISTS public.task_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. Activity Log
CREATE TABLE IF NOT EXISTS public.activity_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    actor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. Project Documentation
CREATE TABLE IF NOT EXISTS public.project_docs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 15. Project Doc Edits (Version History Audit)
CREATE TABLE IF NOT EXISTS public.project_doc_edits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    doc_id UUID NOT NULL REFERENCES public.project_docs(id) ON DELETE CASCADE,
    editor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    content_snapshot TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 16. Reminders
CREATE TABLE IF NOT EXISTS public.reminders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    remind_at TIMESTAMPTZ NOT NULL,
    sent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 17. Organization Memberships (Global Roles)
CREATE TABLE IF NOT EXISTS public.org_members (
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('owner', 'manager', 'employee', 'guest')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (org_id, user_id)
);

-- 18. Invitations
CREATE TABLE IF NOT EXISTS public.org_invitations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('owner', 'manager', 'employee', 'guest')),
    token TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'joined', 'revoked')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 19. Scoped Permissions (Composable RBAC)
CREATE TABLE IF NOT EXISTS public.scoped_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    scope_type TEXT NOT NULL CHECK (scope_type IN ('department', 'project')),
    scope_id UUID NOT NULL,
    scoped_role TEXT NOT NULL CHECK (scoped_role IN ('manager', 'employee', 'guest')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 20. Guest Project Access
CREATE TABLE IF NOT EXISTS public.guest_project_access (
    project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (project_id, user_id)
);

--------------------------------------------------------------------------------
-- ZERO-OWNER SAFEGUARD TRIGGER
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.fn_prevent_last_owner_demotion_or_deletion()
RETURNS TRIGGER AS $$
DECLARE
    owner_count INT;
BEGIN
    IF (TG_OP = 'DELETE' AND OLD.role = 'owner') OR (TG_OP = 'UPDATE' AND OLD.role = 'owner' AND NEW.role != 'owner') THEN
        SELECT COUNT(*) INTO owner_count
        FROM public.org_members
        WHERE org_id = OLD.org_id AND role = 'owner';

        IF owner_count <= 1 THEN
            RAISE EXCEPTION 'Zero-Owner Protection: Cannot demote or remove the sole owner of an organization.';
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_prevent_last_owner_demotion_or_deletion ON public.org_members;
CREATE TRIGGER trg_prevent_last_owner_demotion_or_deletion
BEFORE DELETE OR UPDATE ON public.org_members
FOR EACH ROW EXECUTE FUNCTION public.fn_prevent_last_owner_demotion_or_deletion();

--------------------------------------------------------------------------------
-- EFFECTIVE ROLE RESOLUTION FUNCTION
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.has_effective_role(
    p_user_id UUID,
    p_org_id UUID,
    p_dept_id UUID DEFAULT NULL,
    p_proj_id UUID DEFAULT NULL
)
RETURNS TEXT AS $$
DECLARE
    v_global_role TEXT;
    v_scoped_role TEXT;
    v_global_rank INT := 0;
    v_scoped_rank INT := 0;
BEGIN
    -- Global role lookup
    SELECT role INTO v_global_role
    FROM public.org_members
    WHERE org_id = p_org_id AND user_id = p_user_id;

    IF v_global_role = 'owner' THEN RETURN 'owner'; END IF;

    IF v_global_role = 'owner' THEN v_global_rank := 4;
    ELSIF v_global_role = 'manager' THEN v_global_rank := 3;
    ELSIF v_global_role = 'employee' THEN v_global_rank := 2;
    ELSIF v_global_role = 'guest' THEN v_global_rank := 1;
    END IF;

    -- Scoped role lookup
    IF p_proj_id IS NOT NULL THEN
        SELECT scoped_role INTO v_scoped_role
        FROM public.scoped_permissions
        WHERE org_id = p_org_id AND user_id = p_user_id AND scope_type = 'project' AND scope_id = p_proj_id
        LIMIT 1;
    END IF;

    IF v_scoped_role IS NULL AND p_dept_id IS NOT NULL THEN
        SELECT scoped_role INTO v_scoped_role
        FROM public.scoped_permissions
        WHERE org_id = p_org_id AND user_id = p_user_id AND scope_type = 'department' AND scope_id = p_dept_id
        LIMIT 1;
    END IF;

    IF v_scoped_role = 'manager' THEN v_scoped_rank := 3;
    ELSIF v_scoped_role = 'employee' THEN v_scoped_rank := 2;
    ELSIF v_scoped_role = 'guest' THEN v_scoped_rank := 1;
    END IF;

    IF v_scoped_rank > v_global_rank THEN
        RETURN v_scoped_role;
    END IF;

    RETURN COALESCE(v_global_role, 'guest');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

--------------------------------------------------------------------------------
-- ACCEPT INVITATION FUNCTION
--------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.accept_org_invite(
    p_token TEXT,
    p_user_id UUID
)
RETURNS JSONB AS $$
DECLARE
    v_invitation RECORD;
    v_user_email TEXT;
BEGIN
    SELECT email INTO v_user_email FROM public.profiles WHERE id = p_user_id;

    SELECT * INTO v_invitation
    FROM public.org_invitations
    WHERE token = p_token AND status = 'pending';

    IF v_invitation IS NULL THEN
        RETURN jsonb_build_object('success', false, 'message', 'Invalid or expired invitation token.');
    END IF;

    IF LOWER(v_invitation.email) != LOWER(v_user_email) THEN
        RETURN jsonb_build_object('success', false, 'message', 'Invitation email does not match authenticated user.');
    END IF;

    INSERT INTO public.org_members (org_id, user_id, role)
    VALUES (v_invitation.org_id, p_user_id, v_invitation.role)
    ON CONFLICT (org_id, user_id) DO UPDATE SET role = EXCLUDED.role;

    UPDATE public.org_invitations
    SET status = 'joined'
    WHERE id = v_invitation.id;

    RETURN jsonb_build_object('success', true, 'org_id', v_invitation.org_id, 'role', v_invitation.role);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
