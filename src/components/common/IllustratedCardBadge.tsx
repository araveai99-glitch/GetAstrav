import React from 'react';

export type IllustratedBadgeVariant =
  | 'goal'
  | 'projects'
  | 'progress'
  | 'control'
  | 'tasks'
  | 'teams'
  | 'org'
  | 'milestone'
  | 'analytics'
  | 'governance'
  | 'docs'
  | 'automation'
  | 'objectives';

interface IllustratedCardBadgeProps {
  variant: IllustratedBadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  stepNumber?: string | number;
}

export const IllustratedCardBadge: React.FC<IllustratedCardBadgeProps> = ({
  variant,
  size = 'md',
  className = '',
  stepNumber,
}) => {
  // Dimensions - balanced responsive sizes (48-64px on mobile, 80px on desktop)
  const dim =
    size === 'sm'
      ? 'w-11 h-11 min-[375px]:w-12 min-[375px]:h-12 sm:w-16 sm:h-16'
      : size === 'lg'
      ? 'w-20 h-20 sm:w-24 sm:h-24'
      : 'w-14 h-14 min-[375px]:w-16 min-[375px]:h-16 sm:w-20 sm:h-20';

  return (
    <div className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95 ${dim} ${className}`}>
      {/* Optional Step Pill if not already rendered elsewhere */}
      {stepNumber && (
        <span className="absolute -top-1 -left-1 z-20 w-5 h-5 min-[375px]:w-6 min-[375px]:h-6 rounded-full bg-white border border-brand-peach/80 text-[10px] sm:text-[11px] font-mono font-bold text-brand-orange shadow-warm-2xs flex items-center justify-center">
          {stepNumber}
        </span>
      )}

      {/* Variant Illustrations */}
      {variant === 'goal' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Target outer halo */}
          <circle cx="32" cy="36" r="28" fill="#FFF4ED" />
          <circle cx="32" cy="36" r="24" stroke="#F7D7B0" strokeWidth="2" strokeDasharray="3 3" />
          {/* Outer ring */}
          <circle cx="32" cy="36" r="19" fill="#F15E1C" fillOpacity="0.12" stroke="#F15E1C" strokeWidth="3" />
          {/* Middle ring */}
          <circle cx="32" cy="36" r="12" fill="#FFFFFF" stroke="#FAB60A" strokeWidth="2.5" />
          {/* Bullseye */}
          <circle cx="32" cy="36" r="6" fill="#F15E1C" />
          {/* Arrow */}
          <path d="M46 18L34 32" stroke="#271812" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 18L44 24M46 18L40 16" stroke="#271812" strokeWidth="2.5" strokeLinecap="round" />
          {/* Overlapping Floating Status Pill */}
          <g filter="url(#shadow-goal)">
            <rect x="36" y="42" width="30" height="18" rx="6" fill="#FFFFFF" stroke="#F7D7B0" strokeWidth="1.2" />
            <circle cx="43" cy="51" r="3" fill="#2E936F" />
            <path d="M49 49H60M49 53H56" stroke="#5A4138" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          </g>
          <defs>
            <filter id="shadow-goal" x="33" y="40" width="36" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#271812" floodOpacity="0.08" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'objectives' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient Warm Halo */}
          <circle cx="34" cy="34" r="28" fill="#FEFBF0" />
          <circle cx="34" cy="34" r="24" stroke="#FDEEC0" strokeWidth="1.8" strokeDasharray="3 3" />

          {/* Quarterly / Milestone Target Axis Crosshairs */}
          <line x1="34" y1="12" x2="34" y2="56" stroke="#FAB60A" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.6" />
          <line x1="12" y1="34" x2="56" y2="34" stroke="#FAB60A" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.6" />

          {/* Outer Milestone Target Ring */}
          <circle cx="34" cy="34" r="19" fill="#FAB60A" fillOpacity="0.1" stroke="#FAB60A" strokeWidth="2.5" />

          {/* Inner Goal Concentric Ring */}
          <circle cx="34" cy="34" r="12" fill="#FFFFFF" stroke="#F15E1C" strokeWidth="2" />

          {/* Bullseye Center Dot */}
          <circle cx="34" cy="34" r="5" fill="#FAB60A" />
          <circle cx="34" cy="34" r="2" fill="#F15E1C" />

          {/* 4 Quarterly Milestone Markers on the Rings */}
          {/* Top Marker (Q1) */}
          <circle cx="34" cy="15" r="3.5" fill="#FFFFFF" stroke="#F15E1C" strokeWidth="1.5" />
          <circle cx="34" cy="15" r="1.5" fill="#F15E1C" />

          {/* Right Marker (Q2) */}
          <circle cx="53" cy="34" r="3.5" fill="#FFFFFF" stroke="#FAB60A" strokeWidth="1.5" />
          <circle cx="53" cy="34" r="1.5" fill="#FAB60A" />

          {/* Left Marker (Q4) */}
          <circle cx="15" cy="34" r="3.5" fill="#FFFFFF" stroke="#FAB60A" strokeWidth="1.5" />
          <circle cx="15" cy="34" r="1.5" fill="#FAB60A" />

          {/* Milestone Flag / Marker Pin at Top-Right */}
          <path d="M45 23L49 19V27L45 25Z" fill="#F15E1C" />
          <line x1="45" y1="19" x2="45" y2="29" stroke="#271812" strokeWidth="1.5" strokeLinecap="round" />

          {/* Overlapping Floating Milestone Checklist Pill */}
          <g filter="url(#shadow-obj)">
            <rect x="34" y="42" width="32" height="19" rx="6" fill="#FFFFFF" stroke="#FAB60A" strokeWidth="1.2" />
            {/* Checked Box */}
            <rect x="38" y="46.5" width="8" height="8" rx="2" fill="#2E936F" />
            <path d="M40 50.5L42 52.5L45 48.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Target lines */}
            <path d="M49 48.5H61M49 53H57" stroke="#271812" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          </g>
          <defs>
            <filter id="shadow-obj" x="31" y="40" width="38" height="25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#271812" floodOpacity="0.08" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'projects' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document / Backing Notepad */}
          <rect x="10" y="12" width="36" height="46" rx="8" fill="#FFFDF8" stroke="#F7D7B0" strokeWidth="1.5" />
          {/* Notepad lines */}
          <circle cx="18" cy="22" r="2.5" fill="#FAB60A" />
          <rect x="24" y="20.5" width="16" height="3" rx="1.5" fill="#FAB60A" fillOpacity="0.4" />
          <circle cx="18" cy="30" r="2.5" fill="#FAB60A" />
          <rect x="24" y="28.5" width="14" height="3" rx="1.5" fill="#FAB60A" fillOpacity="0.4" />
          <circle cx="18" cy="38" r="2.5" fill="#FAB60A" />
          <rect x="24" y="36.5" width="11" height="3" rx="1.5" fill="#FAB60A" fillOpacity="0.4" />
          {/* 3D Isometric Project Cube */}
          <g filter="url(#shadow-proj)">
            {/* Top face */}
            <path d="M52 28L64 34L52 40L40 34L52 28Z" fill="#FAB60A" />
            {/* Left face */}
            <path d="M40 34L52 40V55L40 49V34Z" fill="#F15E1C" />
            {/* Right face */}
            <path d="M52 40L64 34V49L52 55V40Z" fill="#D84F12" />
            {/* Inner box seams */}
            <path d="M52 40V55M40 34L52 40L64 34" stroke="#FFF" strokeWidth="1" strokeOpacity="0.4" />
            {/* Center cube logo dot */}
            <circle cx="52" cy="47" r="2" fill="#FFFFFF" />
          </g>
          <defs>
            <filter id="shadow-proj" x="36" y="26" width="32" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#F15E1C" floodOpacity="0.18" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'progress' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background aura */}
          <rect x="8" y="10" width="56" height="52" rx="12" fill="#F6FBF9" stroke="#E2F1EB" strokeWidth="1.5" />
          {/* Rising Bar Chart Columns */}
          <rect x="16" y="40" width="8" height="18" rx="3" fill="#F15E1C" />
          <rect x="27" y="30" width="8" height="28" rx="3" fill="#FAB60A" />
          <rect x="38" y="20" width="8" height="38" rx="3" fill="#2E936F" />
          {/* Rising Dynamic Trend Arrow */}
          <path d="M14 36C22 28 32 18 52 14" stroke="#F15E1C" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 13L52 14L50 21" stroke="#F15E1C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Floating Pill with Checkmark */}
          <g filter="url(#shadow-prog)">
            <rect x="36" y="44" width="30" height="18" rx="6" fill="#FFFFFF" stroke="#2E936F" strokeWidth="1.2" />
            <circle cx="43" cy="53" r="3" fill="#2E936F" />
            <path d="M41.5 53L42.5 54L44.5 52" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M49 51H60M49 55H56" stroke="#271812" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
          </g>
          <defs>
            <filter id="shadow-prog" x="33" y="42" width="36" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#2E936F" floodOpacity="0.12" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'control' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient Glow */}
          <circle cx="34" cy="36" r="26" fill="#FFF9ED" />
          {/* Shield Base */}
          <path
            d="M34 14L48 19V34C48 44 34 52 34 52C34 52 20 44 20 34V19L34 14Z"
            fill="url(#shield-grad)"
            stroke="#FAB60A"
            strokeWidth="2"
          />
          {/* Inner Shield Checkmark */}
          <path d="M28 33L32 37L40 29" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Overlapping Floating Alert / AI Chip */}
          <g filter="url(#shadow-ctrl)">
            <rect x="36" y="42" width="30" height="18" rx="6" fill="#FFFFFF" stroke="#F7D7B0" strokeWidth="1.2" />
            <polygon points="44,48 48,55 40,55" fill="#F15E1C" />
            <line x1="44" y1="50" x2="44" y2="52" stroke="#FFF" strokeWidth="1" strokeLinecap="round" />
            <circle cx="44" cy="54" r="0.5" fill="#FFF" />
            <path d="M51 51H61M51 55H57" stroke="#5A4138" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          </g>
          <defs>
            <linearGradient id="shield-grad" x1="20" y1="14" x2="48" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAB60A" />
              <stop offset="1" stopColor="#F15E1C" />
            </linearGradient>
            <filter id="shadow-ctrl" x="33" y="40" width="36" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#271812" floodOpacity="0.08" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'tasks' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Clipboard / Sheet backing */}
          <rect x="14" y="12" width="44" height="50" rx="8" fill="#FFFFFF" stroke="#E2F1EB" strokeWidth="2" />
          <rect x="24" y="8" width="24" height="7" rx="3" fill="#2E936F" />
          {/* Checklist rows */}
          <rect x="20" y="24" width="8" height="8" rx="2.5" fill="#2E936F" />
          <path d="M22 28L23.5 29.5L26 26" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="32" y="26" width="20" height="3" rx="1.5" fill="#5A4138" fillOpacity="0.4" />

          <rect x="20" y="36" width="8" height="8" rx="2.5" fill="#2E936F" />
          <path d="M22 40L23.5 41.5L26 38" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="32" y="38" width="16" height="3" rx="1.5" fill="#5A4138" fillOpacity="0.4" />

          <rect x="20" y="48" width="8" height="8" rx="2.5" fill="#FFF4ED" stroke="#F15E1C" strokeWidth="1.5" />
          <rect x="32" y="50" width="12" height="3" rx="1.5" fill="#F15E1C" fillOpacity="0.4" />
          {/* Overlapping verified tag */}
          <g filter="url(#shadow-tasks)">
            <rect x="38" y="44" width="28" height="16" rx="5" fill="#2E936F" />
            <text x="52" y="55" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              100%
            </text>
          </g>
          <defs>
            <filter id="shadow-tasks" x="35" y="42" width="34" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#2E936F" floodOpacity="0.25" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'teams' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background field */}
          <rect x="10" y="10" width="52" height="52" rx="12" fill="#FFF7F2" stroke="#F7D7B0" strokeWidth="1.5" />
          {/* Connecting network nodes */}
          <line x1="26" y1="26" x2="46" y2="26" stroke="#FAB60A" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="26" y1="26" x2="36" y2="46" stroke="#FAB60A" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="46" y1="26" x2="36" y2="46" stroke="#FAB60A" strokeWidth="2" strokeDasharray="3 3" />
          {/* Node 1 - Lead */}
          <circle cx="26" cy="26" r="8" fill="#F15E1C" />
          <circle cx="26" cy="24" r="3" fill="#FFFFFF" />
          <path d="M21 31C21 28.5 23 27 26 27C29 27 31 28.5 31 31" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Node 2 - Builder */}
          <circle cx="46" cy="26" r="8" fill="#2E936F" />
          <circle cx="46" cy="24" r="3" fill="#FFFFFF" />
          <path d="M41 31C41 28.5 43 27 46 27C49 27 51 28.5 51 31" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Node 3 - Pod Owner */}
          <circle cx="36" cy="46" r="8" fill="#FAB60A" />
          <circle cx="36" cy="44" r="3" fill="#FFFFFF" />
          <path d="M31 51C31 48.5 33 47 36 47C39 47 41 48.5 41 51" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Live indicator badge */}
          <circle cx="54" cy="18" r="4" fill="#2E936F" />
          <circle cx="54" cy="18" r="7" stroke="#2E936F" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>
      )}

      {variant === 'org' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Enterprise Building Silhouette */}
          <rect x="10" y="10" width="52" height="52" rx="12" fill="#FFF4ED" stroke="#F7D7B0" strokeWidth="1.5" />
          <rect x="22" y="18" width="28" height="42" rx="4" fill="#FFFFFF" stroke="#F15E1C" strokeWidth="2" />
          {/* Windows */}
          <rect x="26" y="24" width="5" height="5" rx="1" fill="#F15E1C" fillOpacity="0.25" />
          <rect x="35" y="24" width="5" height="5" rx="1" fill="#F15E1C" fillOpacity="0.25" />
          <rect x="26" y="32" width="5" height="5" rx="1" fill="#F15E1C" fillOpacity="0.25" />
          <rect x="35" y="32" width="5" height="5" rx="1" fill="#F15E1C" fillOpacity="0.25" />
          <rect x="26" y="40" width="5" height="5" rx="1" fill="#FAB60A" />
          <rect x="35" y="40" width="5" height="5" rx="1" fill="#FAB60A" />
          {/* Front Entrance */}
          <rect x="31" y="50" width="10" height="10" rx="1" fill="#F15E1C" />
          {/* Side Annex */}
          <rect x="14" y="34" width="8" height="26" rx="2" fill="#FFFFFF" stroke="#F7D7B0" strokeWidth="1.5" />
          <rect x="50" y="34" width="8" height="26" rx="2" fill="#FFFFFF" stroke="#F7D7B0" strokeWidth="1.5" />
        </svg>
      )}

      {variant === 'governance' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Vault Key Card */}
          <rect x="10" y="12" width="52" height="48" rx="10" fill="#EDF7F3" stroke="#2E936F" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Key Graphic */}
          <circle cx="28" cy="34" r="10" stroke="#2E936F" strokeWidth="3" fill="#FFFFFF" />
          <path d="M38 34H54M48 34V39M53 34V39" stroke="#2E936F" strokeWidth="3" strokeLinecap="round" />
          {/* Lock Hole */}
          <circle cx="28" cy="34" r="3.5" fill="#2E936F" />
          {/* Floating Certified Chip */}
          <g filter="url(#shadow-gov)">
            <rect x="36" y="42" width="28" height="16" rx="5" fill="#FFFFFF" stroke="#2E936F" strokeWidth="1.2" />
            <path d="M41 50L43 52L48 47" stroke="#2E936F" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="51" y="49" width="9" height="2" rx="1" fill="#271812" fillOpacity="0.4" />
          </g>
          <defs>
            <filter id="shadow-gov" x="33" y="40" width="34" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#2E936F" floodOpacity="0.12" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'docs' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document Sheet */}
          <rect x="14" y="10" width="44" height="52" rx="8" fill="#FFFFFF" stroke="#F7D7B0" strokeWidth="1.8" />
          {/* Corner fold */}
          <path d="M46 10V20H58" fill="#FFF4ED" stroke="#F7D7B0" strokeWidth="1.5" />
          {/* Header Bar */}
          <rect x="22" y="20" width="18" height="4" rx="2" fill="#F15E1C" />
          {/* Content lines */}
          <rect x="22" y="29" width="28" height="2.5" rx="1" fill="#5A4138" fillOpacity="0.4" />
          <rect x="22" y="35" width="24" height="2.5" rx="1" fill="#5A4138" fillOpacity="0.4" />
          <rect x="22" y="41" width="28" height="2.5" rx="1" fill="#5A4138" fillOpacity="0.4" />
          {/* Mini code/status tag */}
          <rect x="22" y="48" width="14" height="6" rx="2" fill="#EDF7F3" />
          <text x="29" y="53" fill="#2E936F" fontSize="5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            PRD
          </text>
        </svg>
      )}

      {variant === 'automation' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lightning / Zap loop */}
          <rect x="10" y="10" width="52" height="52" rx="12" fill="#FEFBF0" stroke="#FAB60A" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Gear / Automation Loop */}
          <circle cx="36" cy="36" r="16" stroke="#F15E1C" strokeWidth="2.5" strokeDasharray="5 3" />
          {/* Lightning bolt */}
          <path d="M38 18L26 36H36L34 54L48 34H38L42 18Z" fill="#FAB60A" stroke="#F15E1C" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )}

      {variant === 'milestone' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient card background */}
          <rect x="10" y="10" width="52" height="52" rx="12" fill="#FFF4ED" stroke="#F7D7B0" strokeWidth="1.5" />
          {/* Flagpole */}
          <line x1="24" y1="14" x2="24" y2="58" stroke="#5A4138" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="14" r="3" fill="#FAB60A" />
          {/* Waving Flag Banner */}
          <path
            d="M24 18C32 15 38 23 48 20V36C38 39 32 31 24 34V18Z"
            fill="url(#flag-grad)"
          />
          {/* Checkpoint Progress Marker */}
          <g filter="url(#shadow-mile)">
            <circle cx="48" cy="46" r="12" fill="#FFFFFF" stroke="#2E936F" strokeWidth="2" />
            <circle cx="48" cy="46" r="7" fill="#2E936F" />
            <path d="M45 46L47 48L51 44" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <linearGradient id="flag-grad" x1="24" y1="18" x2="48" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F15E1C" />
              <stop offset="1" stopColor="#FAB60A" />
            </linearGradient>
            <filter id="shadow-mile" x="34" y="32" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#271812" floodOpacity="0.1" />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'analytics' && (
        <svg viewBox="0 0 72 72" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Backing plate */}
          <rect x="10" y="10" width="52" height="52" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
          {/* Radial telemetry gauge arc */}
          <path
            d="M22 46 A 18 18 0 1 1 50 46"
            stroke="#E2E8F0"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M22 46 A 18 18 0 1 1 44 22"
            stroke="url(#gauge-grad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Center value */}
          <circle cx="36" cy="38" r="6" fill="#F15E1C" />
          <line x1="36" y1="38" x2="42" y2="28" stroke="#271812" strokeWidth="2" strokeLinecap="round" />
          {/* Metric label chip */}
          <g filter="url(#shadow-analy)">
            <rect x="22" y="48" width="28" height="13" rx="4" fill="#FFFFFF" stroke="#F15E1C" strokeWidth="1" />
            <text x="36" y="57" fill="#F15E1C" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              99.8%
            </text>
          </g>
          <defs>
            <linearGradient id="gauge-grad" x1="22" y1="46" x2="44" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAB60A" />
              <stop offset="1" stopColor="#F15E1C" />
            </linearGradient>
            <filter id="shadow-analy" x="20" y="46" width="32" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#271812" floodOpacity="0.1" />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};
