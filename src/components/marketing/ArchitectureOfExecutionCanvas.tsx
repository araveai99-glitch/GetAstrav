import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CheckCircle2, Target, Flag, CheckSquare, Building2 } from 'lucide-react';

export interface HierarchyStage {
  id: number;
  shortLabel: string;
  levelTag: string;
  category: string;
  name: string;
  exampleContext: string;
  explanation: string;
  status: string;
  statusType: 'success' | 'progress' | 'warning';
  progressVal: number;
  assignedTo: string;
  rollsUpTo: string;
  colorHex: number;
  accentColor: string;
  targetY: number;
}

const HIERARCHY_DATA: HierarchyStage[] = [
  {
    id: 1,
    shortLabel: '1. Organization',
    levelTag: 'ORGANIZATION & DEPARTMENT',
    category: 'Strategic Alignment',
    name: 'Acme • Engineering Department',
    exampleContext: 'Executive strategy cascades into division roadmaps',
    explanation: 'Company strategy establishes top-level objectives and division budgets, creating the foundation for all operational work.',
    status: '100% Operational',
    statusType: 'success',
    progressVal: 78,
    assignedTo: 'Executive Leadership',
    rollsUpTo: 'Strategic Apex',
    colorHex: 0xf15e1c,
    accentColor: '#f15e1c',
    targetY: 3.7,
  },
  {
    id: 2,
    shortLabel: '2. Project & Goal',
    levelTag: 'PROJECT & GOAL',
    category: 'Operational Focus',
    name: 'Project: Product Launch → Goal: Launch New Platform',
    exampleContext: 'Strategic initiatives with defined business goals',
    explanation: 'High-level business goals connect to active projects, aligning team resources with quantifiable company milestones.',
    status: '82% Progress Rollup',
    statusType: 'success',
    progressVal: 82,
    assignedTo: 'Product & Engineering Leads',
    rollsUpTo: 'Acme Strategic Priorities',
    colorHex: 0x2e936f,
    accentColor: '#2e936f',
    targetY: 1.2,
  },
  {
    id: 3,
    shortLabel: '3. Milestone Gate',
    levelTag: 'MILESTONE GATE',
    category: 'Execution Deliverable',
    name: 'Milestone: Complete Authentication',
    exampleContext: 'Critical deliverable & release readiness gate',
    explanation: 'Milestones track gated stages of delivery. Progress automatically aggregates as underlying daily tasks are completed.',
    status: '3 of 4 Tasks Completed (75%)',
    statusType: 'progress',
    progressVal: 75,
    assignedTo: 'Platform Security Squad',
    rollsUpTo: 'Product Launch Project',
    colorHex: 0xfab60a,
    accentColor: '#fab60a',
    targetY: -1.1,
  },
  {
    id: 4,
    shortLabel: '4. Task & Subtask',
    levelTag: 'TASK & SUBTASK',
    category: 'Daily Work Output',
    name: 'Task: Implement Login & Session Handling',
    exampleContext: 'Assigned leaf tasks and granular subtask checklists',
    explanation: 'Engineers execute assigned work and subtasks like "Add session validation". Each completed subtask updates the entire hierarchy.',
    status: '4 of 5 Subtasks Done (80%)',
    statusType: 'success',
    progressVal: 80,
    assignedTo: 'Alex M. (Lead Engineer)',
    rollsUpTo: 'Complete Authentication Milestone',
    colorHex: 0xf15e1c,
    accentColor: '#f15e1c',
    targetY: -3.3,
  },
];

export const ArchitectureOfExecutionCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTier, setActiveTier] = useState<number>(1);
  const activeTierRef = useRef<number>(1);
  activeTierRef.current = activeTier;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 640;

    // 1. Scene & Camera Setup (Elevated camera framing to ensure clean buffer above bottom HUD)
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    // Positioned and angled to frame the elevated hierarchy diagram comfortably with generous breathing room
    camera.position.set(23, 16.8, 25);
    camera.lookAt(0, 3.2, 0);

    // 2. Renderer with soft shadows & antialiasing
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Warm Studio Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0xfcf9f4, 1.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff7ed, 2.0);
    mainLight.position.set(25, 35, 20);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const orangeAccentLight = new THREE.PointLight(0xf15e1c, 1.4, 45);
    orangeAccentLight.position.set(-14, 14, 12);
    scene.add(orangeAccentLight);

    const greenFillLight = new THREE.PointLight(0x2e936f, 0.9, 45);
    greenFillLight.position.set(16, -2, -10);
    scene.add(greenFillLight);

    const yellowAccentLight = new THREE.PointLight(0xfab60a, 0.8, 40);
    yellowAccentLight.position.set(0, 6, 15);
    scene.add(yellowAccentLight);

    // 4. Central Hierarchical Visual Group (Elevated to Y = 5.0 to give ample headroom above bottom HUD card)
    const hierarchyGroup = new THREE.Group();
    hierarchyGroup.position.set(0, 5.0, 0);
    scene.add(hierarchyGroup);

    // Collections for animations & raycasting
    const interactiveMeshes: THREE.Object3D[] = [];
    const levelPlatforms: { id: number; group: THREE.Group; baseMesh: THREE.Mesh }[] = [];
    const connectionParticles: { mesh: THREE.Mesh; startY: number; endY: number; speed: number; progress: number; x: number; z: number }[] = [];

    // Helper: Material Presets
    const satinWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.05,
    });

    const satinChampagneMat = new THREE.MeshStandardMaterial({
      color: 0xfdf8f2,
      roughness: 0.25,
      metalness: 0.08,
    });

    // =========================================================================
    // LEVEL 1: ORGANIZATION & DEPARTMENT (Strategic Apex Plinth)
    // =========================================================================
    const level1Group = new THREE.Group();
    level1Group.position.set(0, HIERARCHY_DATA[0].targetY, 0);
    hierarchyGroup.add(level1Group);

    // Outer Orbit Ring (Shows top-level company envelope)
    const ringGeo = new THREE.TorusGeometry(5.6, 0.11, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf15e1c,
      emissive: 0xf15e1c,
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2;
    level1Group.add(orbitRing);

    // Main Executive Plinth (Cylinder base)
    const plinthGeo = new THREE.CylinderGeometry(4.8, 5.2, 0.65, 36);
    const plinthMesh = new THREE.Mesh(plinthGeo, satinWhiteMat.clone());
    plinthMesh.castShadow = true;
    plinthMesh.receiveShadow = true;
    plinthMesh.userData = { levelId: 1 };
    level1Group.add(plinthMesh);
    interactiveMeshes.push(plinthMesh);

    // Decorative Plinth Edge Wire
    const plinthEdges = new THREE.EdgesGeometry(plinthGeo);
    const plinthLineMat = new THREE.LineBasicMaterial({ color: 0xf15e1c, transparent: true, opacity: 0.5 });
    plinthMesh.add(new THREE.LineSegments(plinthEdges, plinthLineMat));

    // Department Hub Inner Plate
    const deptPlateGeo = new THREE.CylinderGeometry(3.3, 3.5, 0.32, 32);
    const deptPlateMat = new THREE.MeshStandardMaterial({ color: 0xfdf8f2, roughness: 0.3 });
    const deptPlate = new THREE.Mesh(deptPlateGeo, deptPlateMat);
    deptPlate.position.set(0, 0.42, 0);
    level1Group.add(deptPlate);

    // Central Executive Monolith (Pillar representing strategic origin)
    const monolithGeo = new THREE.BoxGeometry(1.5, 1.1, 1.5);
    const monolithMat = new THREE.MeshPhysicalMaterial({
      color: 0xf15e1c,
      emissive: 0xf15e1c,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.9,
      roughness: 0.1,
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    monolith.position.set(0, 1.05, 0);
    level1Group.add(monolith);

    levelPlatforms.push({ id: 1, group: level1Group, baseMesh: plinthMesh });

    // =========================================================================
    // LEVEL 2: PROJECT & GOAL (Dual-Pod Execution Platform)
    // =========================================================================
    const level2Group = new THREE.Group();
    level2Group.position.set(0, HIERARCHY_DATA[1].targetY, 0);
    hierarchyGroup.add(level2Group);

    // Base Deck for Project & Goal
    const deck2Geo = new THREE.BoxGeometry(12.8, 0.55, 6.8);
    const deck2Mesh = new THREE.Mesh(deck2Geo, satinChampagneMat.clone());
    deck2Mesh.castShadow = true;
    deck2Mesh.receiveShadow = true;
    deck2Mesh.userData = { levelId: 2 };
    level2Group.add(deck2Mesh);
    interactiveMeshes.push(deck2Mesh);

    const deck2Edges = new THREE.EdgesGeometry(deck2Geo);
    const deck2LineMat = new THREE.LineBasicMaterial({ color: 0x2e936f, transparent: true, opacity: 0.5 });
    deck2Mesh.add(new THREE.LineSegments(deck2Edges, deck2LineMat));

    // Left Pod: Project Container ("Product Launch")
    const projectPodGeo = new THREE.BoxGeometry(5.0, 0.52, 4.8);
    const projectPod = new THREE.Mesh(projectPodGeo, satinWhiteMat.clone());
    projectPod.position.set(-3.2, 0.52, 0);
    projectPod.castShadow = true;
    level2Group.add(projectPod);

    // Right Pod: Goal Target ("Launch New Platform")
    const goalPodGeo = new THREE.BoxGeometry(5.0, 0.52, 4.8);
    const goalPod = new THREE.Mesh(goalPodGeo, satinWhiteMat.clone());
    goalPod.position.set(3.2, 0.52, 0);
    goalPod.castShadow = true;
    level2Group.add(goalPod);

    // Horizontal Bridge linking Project to Goal
    const bridgeGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.8, 16);
    const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x2e936f, emissive: 0x2e936f, emissiveIntensity: 0.5 });
    const bridge = new THREE.Mesh(bridgeGeo, bridgeMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.56, 0);
    level2Group.add(bridge);

    // Front Progress Bar extruded on Level 2 deck (Representing 82% progress rollup)
    const progressTrackGeo = new THREE.BoxGeometry(9.2, 0.18, 0.18);
    const progressTrackMat = new THREE.MeshBasicMaterial({ color: 0xf7d7b0 });
    const progressTrack = new THREE.Mesh(progressTrackGeo, progressTrackMat);
    progressTrack.position.set(0, 0.32, 3.45);
    level2Group.add(progressTrack);

    const progressFillGeo = new THREE.BoxGeometry(7.5, 0.22, 0.22);
    const progressFillMat = new THREE.MeshBasicMaterial({ color: 0x2e936f });
    const progressFill = new THREE.Mesh(progressFillGeo, progressFillMat);
    progressFill.position.set(-0.85, 0.32, 3.45);
    level2Group.add(progressFill);

    levelPlatforms.push({ id: 2, group: level2Group, baseMesh: deck2Mesh });

    // =========================================================================
    // LEVEL 3: MILESTONE (Deliverable Release Gate Platform)
    // =========================================================================
    const level3Group = new THREE.Group();
    level3Group.position.set(0, HIERARCHY_DATA[2].targetY, 0);
    hierarchyGroup.add(level3Group);

    // Milestone Platform Slab
    const deck3Geo = new THREE.BoxGeometry(11.0, 0.55, 6.2);
    const deck3Mesh = new THREE.Mesh(deck3Geo, satinWhiteMat.clone());
    deck3Mesh.castShadow = true;
    deck3Mesh.receiveShadow = true;
    deck3Mesh.userData = { levelId: 3 };
    level3Group.add(deck3Mesh);
    interactiveMeshes.push(deck3Mesh);

    const deck3Edges = new THREE.EdgesGeometry(deck3Geo);
    const deck3LineMat = new THREE.LineBasicMaterial({ color: 0xfab60a, transparent: true, opacity: 0.6 });
    deck3Mesh.add(new THREE.LineSegments(deck3Edges, deck3LineMat));

    // Milestone Gate Pylons (Representing the quality / approval gate)
    const pylonGeo = new THREE.CylinderGeometry(0.28, 0.28, 1.7, 24);
    const pylonMat = new THREE.MeshStandardMaterial({ color: 0xfab60a, roughness: 0.2 });

    const pylonLeft = new THREE.Mesh(pylonGeo, pylonMat);
    pylonLeft.position.set(-4.0, 0.85, 0);
    level3Group.add(pylonLeft);

    const pylonRight = new THREE.Mesh(pylonGeo, pylonMat);
    pylonRight.position.set(4.0, 0.85, 0);
    level3Group.add(pylonRight);

    // Center Milestone Checkpoint Medallion (Octahedron crystal)
    const medallionGeo = new THREE.OctahedronGeometry(0.72, 0);
    const medallionMat = new THREE.MeshStandardMaterial({
      color: 0xfab60a,
      emissive: 0xfab60a,
      emissiveIntensity: 0.45,
      roughness: 0.1,
    });
    const medallion = new THREE.Mesh(medallionGeo, medallionMat);
    medallion.position.set(0, 0.9, 0);
    level3Group.add(medallion);

    // 4 Milestone Verification Checkpoint Pins (3 completed green, 1 yellow in progress)
    const pinOffsets = [-2.3, -0.75, 0.75, 2.3];
    pinOffsets.forEach((xPos, idx) => {
      const isCompleted = idx < 3;
      const pinColor = isCompleted ? 0x2e936f : 0xfab60a;
      const pinGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.5, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: pinColor,
        emissive: pinColor,
        emissiveIntensity: 0.5,
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.set(xPos, 0.5, 1.4);
      level3Group.add(pin);
    });

    levelPlatforms.push({ id: 3, group: level3Group, baseMesh: deck3Mesh });

    // =========================================================================
    // LEVEL 4: TASK & SUBTASK (Actionable Execution Workbench)
    // =========================================================================
    const level4Group = new THREE.Group();
    level4Group.position.set(0, HIERARCHY_DATA[3].targetY, 0);
    hierarchyGroup.add(level4Group);

    // Workbench Platform
    const deck4Geo = new THREE.BoxGeometry(12.6, 0.55, 6.8);
    const deck4Mesh = new THREE.Mesh(deck4Geo, satinChampagneMat.clone());
    deck4Mesh.castShadow = true;
    deck4Mesh.receiveShadow = true;
    deck4Mesh.userData = { levelId: 4 };
    level4Group.add(deck4Mesh);
    interactiveMeshes.push(deck4Mesh);

    const deck4Edges = new THREE.EdgesGeometry(deck4Geo);
    const deck4LineMat = new THREE.LineBasicMaterial({ color: 0xf15e1c, transparent: true, opacity: 0.5 });
    deck4Mesh.add(new THREE.LineSegments(deck4Edges, deck4LineMat));

    // Main Leaf Task Card ("Implement Login & Session Handling")
    const taskCardGeo = new THREE.BoxGeometry(10.6, 0.4, 2.4);
    const taskCard = new THREE.Mesh(taskCardGeo, satinWhiteMat.clone());
    taskCard.position.set(0, 0.46, -1.4);
    level4Group.add(taskCard);

    // 4 Subtask Checklist Tiles ("Add session validation", etc.)
    const subtaskOffsets = [-3.8, -1.25, 1.25, 3.8];
    subtaskOffsets.forEach((xPos, idx) => {
      const isPassed = idx < 3;
      const subtaskColor = isPassed ? 0x2e936f : 0xf15e1c;
      const subtaskGeo = new THREE.BoxGeometry(2.1, 0.3, 2.0);
      const subtaskMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      });
      const subtask = new THREE.Mesh(subtaskGeo, subtaskMat);
      subtask.position.set(xPos, 0.42, 1.4);
      level4Group.add(subtask);

      // Status indicator pip on subtask tile
      const pipGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const pipMat = new THREE.MeshStandardMaterial({
        color: subtaskColor,
        emissive: subtaskColor,
        emissiveIntensity: 0.6,
      });
      const pip = new THREE.Mesh(pipGeo, pipMat);
      pip.position.set(0, 0.22, 0);
      subtask.add(pip);
    });

    levelPlatforms.push({ id: 4, group: level4Group, baseMesh: deck4Mesh });

    // =========================================================================
    // HIERARCHY CONDUITS & ENERGY PARTICLES (Strategic Cascade & Progress Rollup)
    // =========================================================================
    const conduitConfigs = [
      { topY: HIERARCHY_DATA[0].targetY, botY: HIERARCHY_DATA[1].targetY, xOffsets: [-3.6, 3.6], z: 0, color: 0xf15e1c },
      { topY: HIERARCHY_DATA[1].targetY, botY: HIERARCHY_DATA[2].targetY, xOffsets: [-3.0, 3.0], z: 0, color: 0x2e936f },
      { topY: HIERARCHY_DATA[2].targetY, botY: HIERARCHY_DATA[3].targetY, xOffsets: [-2.5, 2.5], z: 0, color: 0xfab60a },
    ];

    conduitConfigs.forEach(({ topY, botY, xOffsets, z, color }) => {
      const height = topY - botY - 0.6;
      const centerY = (topY + botY) / 2;

      xOffsets.forEach((x) => {
        // Translucent glass tube
        const tubeGeo = new THREE.CylinderGeometry(0.11, 0.11, height, 16);
        const tubeMat = new THREE.MeshPhysicalMaterial({
          color: color,
          transparent: true,
          opacity: 0.45,
          roughness: 0.1,
          transmission: 0.8,
        });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        tube.position.set(x, centerY, z);
        hierarchyGroup.add(tube);

        // Animated Energy Particle along conduit
        const particleGeo = new THREE.SphereGeometry(0.22, 16, 16);
        const particleMat = new THREE.MeshStandardMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.9,
        });
        const particle = new THREE.Mesh(particleGeo, particleMat);
        hierarchyGroup.add(particle);

        connectionParticles.push({
          mesh: particle,
          startY: topY - 0.3,
          endY: botY + 0.3,
          speed: 0.4 + Math.random() * 0.3,
          progress: Math.random(),
          x,
          z,
        });
      });
    });

    // =========================================================================
    // 5. INTERACTION & RAYCASTING
    // =========================================================================
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;

      targetRotationY = x * 0.25;
      targetRotationX = y * 0.12;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Raycaster for clicking 3D layers directly
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes, true);

      if (intersects.length > 0) {
        let obj: THREE.Object3D | null = intersects[0].object;
        while (obj && (!obj.userData || !obj.userData.levelId)) {
          obj = obj.parent;
        }
        if (obj && obj.userData && obj.userData.levelId) {
          setActiveTier(obj.userData.levelId);
        }
      }
    };

    container.addEventListener('click', handleClick);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 620;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 6. ANIMATION & BALANCED CAMERA FOCUS LOOP
    // =========================================================================
    let animId: number;
    const clock = new THREE.Clock();

    let currentCameraY = 16.5;
    let currentLookAtY = 2.8;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth Rotation Lerp from user mouse
      hierarchyGroup.rotation.y += (targetRotationY - hierarchyGroup.rotation.y) * 0.05;
      hierarchyGroup.rotation.x += (targetRotationX - hierarchyGroup.rotation.x) * 0.05;

      // Base Floating Motion (Elevated base at Y = 3.6 to guarantee clearance above bottom HUD)
      hierarchyGroup.position.y = 3.6 + Math.sin(elapsed * 0.7) * 0.15;

      // Gentle rotation for Level 3 medallion and Level 1 orbit ring
      if (medallion) {
        medallion.rotation.y = elapsed * 0.8;
      }
      if (orbitRing) {
        orbitRing.rotation.z = elapsed * 0.3;
      }

      // Balanced Camera Focus Height (Elevated lookAt target keeps bottom platform completely clear)
      const activeStage = HIERARCHY_DATA.find((s) => s.id === activeTierRef.current) || HIERARCHY_DATA[0];
      const targetLookY = 3.6 + (activeStage.targetY * 0.04);
      const targetCamY = 17.2 + (activeStage.targetY * 0.06);

      currentLookAtY += (targetLookY - currentLookAtY) * 0.05;
      currentCameraY += (targetCamY - currentCameraY) * 0.05;

      camera.position.y = currentCameraY;
      camera.lookAt(0, currentLookAtY, 0);

      // Active Platform Highlight & Pulsing
      levelPlatforms.forEach((p) => {
        const isSelected = p.id === activeTierRef.current;
        const baseMat = p.baseMesh.material as THREE.MeshStandardMaterial;

        if (isSelected) {
          const pulse = Math.sin(elapsed * 3) * 0.015;
          p.group.scale.set(1 + pulse, 1 + pulse, 1 + pulse);
          if (baseMat && baseMat.emissive) {
            baseMat.emissive.setHex(activeStage.colorHex);
            baseMat.emissiveIntensity = 0.22;
          }
        } else {
          p.group.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          if (baseMat && baseMat.emissive) {
            baseMat.emissive.setHex(0x000000);
            baseMat.emissiveIntensity = 0;
          }
        }
      });

      // Flowing Energy Particles animation (Cascades downward)
      connectionParticles.forEach((p) => {
        p.progress += p.speed * 0.015;
        if (p.progress > 1) {
          p.progress = 0;
        }
        p.mesh.position.y = p.startY + (p.endY - p.startY) * p.progress;
        p.mesh.position.x = p.x;
        p.mesh.position.z = p.z;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeStage = HIERARCHY_DATA.find((s) => s.id === activeTier) || HIERARCHY_DATA[0];

  return (
    <div className="relative w-full h-[600px] sm:h-[660px] lg:h-[700px] rounded-3xl bg-gradient-to-b from-white via-ivory to-champagne/40 border border-brand-peach/80 shadow-architectural overflow-hidden select-none">
      {/* 3D Canvas Mount */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-brand-peach shadow-warm-xs z-20">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
        <span className="text-[11px] font-heading font-extrabold tracking-wider text-espresso uppercase">
          FounderOS Execution Hierarchy
        </span>
        <span className="hidden md:inline-block text-[11px] text-terracotta-muted font-normal">
          • Strategy to Daily Work
        </span>
      </div>

      {/* Top Right Hierarchy Stage Selector */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 flex flex-col gap-1.5 z-20">
        {HIERARCHY_DATA.map((stage) => {
          const isSelected = activeTier === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveTier(stage.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-heading font-bold transition-all text-left flex items-center gap-2.5 cursor-pointer shadow-warm-2xs ${
                isSelected
                  ? 'bg-brand-orange text-white shadow-glow-orange scale-105 border border-brand-orange'
                  : 'bg-white/95 text-espresso hover:bg-brand-orange-light hover:text-brand-orange border border-brand-peach'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: isSelected ? '#ffffff' : stage.accentColor }}
              />
              <span className="whitespace-nowrap">{stage.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Floating Information HUD Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-peach/90 shadow-warm-lg z-20 transition-all duration-300 space-y-2">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-brand-peach/50 pb-2">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm shadow-warm-xs shrink-0"
              style={{ backgroundColor: activeStage.accentColor }}
            >
              {activeStage.id === 1 && <Building2 className="w-4.5 h-4.5 text-white" />}
              {activeStage.id === 2 && <Target className="w-4.5 h-4.5 text-white" />}
              {activeStage.id === 3 && <Flag className="w-4.5 h-4.5 text-white" />}
              {activeStage.id === 4 && <CheckSquare className="w-4.5 h-4.5 text-white" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-brand-orange">
                  {activeStage.levelTag}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-terracotta-muted font-medium">
                  {activeStage.category}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-heading font-extrabold text-espresso mt-0.5">
                {activeStage.name}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-center">
            <span className="px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-green text-xs font-heading font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              {activeStage.status}
            </span>
          </div>
        </div>

        {/* Bottom Details Row: Explanation + Context Impact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-xs">
          <p className="md:col-span-8 brand-body text-terracotta leading-relaxed">
            {activeStage.explanation}
          </p>

          <div className="md:col-span-4 flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-1 text-[11px] text-terracotta-muted border-t md:border-t-0 md:border-l border-brand-peach/60 pt-2 md:pt-0 md:pl-4">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-espresso">Owner:</span>
              <span>{activeStage.assignedTo}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-espresso">Connects to:</span>
              <span className="text-brand-orange font-bold truncate max-w-[150px]">{activeStage.rollsUpTo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
