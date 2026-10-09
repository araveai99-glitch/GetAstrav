import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ArchitectureTier {
  id: number;
  label: string;
  sub: string;
  metric: string;
  colorHex: number;
  accentColor: string;
}

const TIERS_DATA: ArchitectureTier[] = [
  {
    id: 1,
    label: 'TIER 1 • EXECUTIVE STRATEGY & OKRs',
    sub: 'Organization Root Target: $24M ARR',
    metric: '88.4% Mathematical Rollup',
    colorHex: 0xf15e1c,
    accentColor: '#f15e1c',
  },
  {
    id: 2,
    label: 'TIER 2 • DEPARTMENTS & PODS',
    sub: 'Engineering & Product Ops Governance',
    metric: '6 Active Squad Containers',
    colorHex: 0x2e936f,
    accentColor: '#2e936f',
  },
  {
    id: 3,
    label: 'TIER 3 • PROJECTS & ARCHITECTURE SPECS',
    sub: 'Project: Payment Gateway & SAML SSO',
    metric: 'Sprint SLA: 96.2% On-Time',
    colorHex: 0xfab60a,
    accentColor: '#fab60a',
  },
  {
    id: 4,
    label: 'TIER 4 • ACTIONABLE LEAF TASKS',
    sub: 'OAuth PKCE Token Key Lock Implementation',
    metric: 'Manager Sign-off Verified',
    colorHex: 0x2e936f,
    accentColor: '#2e936f',
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
    const height = container.clientHeight || 550;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(22, 18, 26);
    camera.lookAt(0, 0, 0);

    // 2. Renderer with soft shadows & antialiasing
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Warm Studio Lighting Architecture
    const ambientLight = new THREE.AmbientLight(0xfcf9f4, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
    mainLight.position.set(25, 35, 20);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const orangeAccentLight = new THREE.PointLight(0xf15e1c, 1.2, 40);
    orangeAccentLight.position.set(-10, 10, 10);
    scene.add(orangeAccentLight);

    const sageFillLight = new THREE.PointLight(0x2e936f, 0.8, 40);
    sageFillLight.position.set(15, -5, -10);
    scene.add(sageFillLight);

    // 4. Architectural Stack Tiers Group
    const stackGroup = new THREE.Group();
    scene.add(stackGroup);

    const tierPlanes: THREE.Mesh[] = [];
    const tierPillars: THREE.Mesh[] = [];
    const nodeSpheres: THREE.Mesh[] = [];

    const tierHeights = [6, 2, -2, -6];
    const tierWidths = [14, 12, 10, 8];
    const tierDepths = [9, 7.5, 6, 4.5];

    // Satin Ivory Material Base
    const satinBaseMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.05,
    });

    const satinChampagneMat = new THREE.MeshStandardMaterial({
      color: 0xf4ebe1,
      roughness: 0.3,
      metalness: 0.1,
    });

    TIERS_DATA.forEach((tier, i) => {
      const yPos = tierHeights[i];
      const w = tierWidths[i];
      const d = tierDepths[i];

      // Tier Sculptural Platform Slab
      const slabGeo = new THREE.BoxGeometry(w, 0.6, d);
      const mat = i % 2 === 0 ? satinBaseMat.clone() : satinChampagneMat.clone();
      
      const slab = new THREE.Mesh(slabGeo, mat);
      slab.position.set(0, yPos, 0);
      slab.castShadow = true;
      slab.receiveShadow = true;
      slab.userData = { tierId: tier.id };
      stackGroup.add(slab);
      tierPlanes.push(slab);

      // Accent Edge Border Wire
      const edges = new THREE.EdgesGeometry(slabGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: tier.colorHex,
        linewidth: 2,
        transparent: true,
        opacity: 0.6,
      });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      slab.add(wireframe);

      // Glowing Node Indicator Spheres on corner connections
      const cornerOffsets = [
        [-w / 2 + 0.6, 0.4, -d / 2 + 0.6],
        [w / 2 - 0.6, 0.4, -d / 2 + 0.6],
        [-w / 2 + 0.6, 0.4, d / 2 - 0.6],
        [w / 2 - 0.6, 0.4, d / 2 - 0.6],
      ];

      cornerOffsets.forEach((posArr) => {
        const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);
        const sphereMat = new THREE.MeshStandardMaterial({
          color: tier.colorHex,
          emissive: tier.colorHex,
          emissiveIntensity: 0.5,
          roughness: 0.1,
        });
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
        sphere.position.set(posArr[0], posArr[1], posArr[2]);
        slab.add(sphere);
        nodeSpheres.push(sphere);
      });

      // Translucent Vertical Connecting Pillars between Tiers
      if (i < TIERS_DATA.length - 1) {
        const nextY = tierHeights[i + 1];
        const pillarHeight = yPos - nextY - 0.6;
        const pillarGeo = new THREE.CylinderGeometry(0.15, 0.15, pillarHeight, 16);
        const pillarMat = new THREE.MeshPhysicalMaterial({
          color: 0xf15e1c,
          transparent: true,
          opacity: 0.35,
          roughness: 0.1,
          transmission: 0.8,
        });

        const pillarLeft = new THREE.Mesh(pillarGeo, pillarMat);
        pillarLeft.position.set(-w / 3, yPos - pillarHeight / 2 - 0.3, 0);
        stackGroup.add(pillarLeft);
        tierPillars.push(pillarLeft);

        const pillarRight = new THREE.Mesh(pillarGeo, pillarMat);
        pillarRight.position.set(w / 3, yPos - pillarHeight / 2 - 0.3, 0);
        stackGroup.add(pillarRight);
        tierPillars.push(pillarRight);
      }
    });

    // 5. Interactive Raycaster & Mouse Orbit Control
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;

      mouseX = x;
      mouseY = y;

      targetRotationY = x * 0.35;
      targetRotationX = y * 0.2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth Rotation Lerp
      stackGroup.rotation.y += (targetRotationY - stackGroup.rotation.y) * 0.05;
      stackGroup.rotation.x += (targetRotationX - stackGroup.rotation.x) * 0.05;

      // Base Floating Motion
      stackGroup.position.y = Math.sin(elapsed * 0.8) * 0.3;

      // Active Tier Highlight Pulsing
      tierPlanes.forEach((plane, idx) => {
        const tierId = idx + 1;
        const isSelected = tierId === activeTierRef.current;

        if (isSelected) {
          plane.scale.set(
            1 + Math.sin(elapsed * 3) * 0.02,
            1,
            1 + Math.sin(elapsed * 3) * 0.02
          );
          (plane.material as THREE.MeshStandardMaterial).emissive.setHex(0xf15e1c);
          (plane.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15;
        } else {
          plane.scale.set(1, 1, 1);
          (plane.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
          (plane.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
        }
      });

      // Animate node spheres floating pulse
      nodeSpheres.forEach((sph, index) => {
        sph.position.y = 0.4 + Math.sin(elapsed * 2 + index) * 0.08;
      });

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeData = TIERS_DATA.find((t) => t.id === activeTier) || TIERS_DATA[0];

  return (
    <div className="relative w-full h-[520px] sm:h-[580px] rounded-3xl bg-gradient-to-b from-white via-ivory to-champagne/40 border border-brand-peach/80 shadow-architectural overflow-hidden">
      {/* 3D Canvas Mount */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-peach/80 shadow-warm-2xs">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
        <span className="text-[11px] font-mono font-extrabold tracking-wider text-espresso uppercase">
          3D INTERACTIVE ARCHITECTURE • ORBIT & INSPECT
        </span>
      </div>

      {/* Right Side Tier Selector Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-1.5 z-20">
        {TIERS_DATA.map((tier) => {
          const isSelected = activeTier === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all text-left flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-brand-orange text-white shadow-glow-orange scale-105 border border-brand-orange'
                  : 'bg-white/90 text-espresso hover:bg-surface-tier1 border border-brand-peach/80 shadow-warm-2xs'
              }`}
            >
              <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: isSelected ? '#ffffff' : tier.accentColor }} />
              <span>TIER {tier.id}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Floating Live HUD Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-peach/90 shadow-warm-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 z-20 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-bold text-sm shadow-warm-sm shrink-0"
            style={{ backgroundColor: activeData.accentColor }}
          >
            T{activeData.id}
          </div>
          <div>
            <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider">
              {activeData.label}
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-espresso">{activeData.sub}</h4>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/30 text-xs font-bold font-mono">
            {activeData.metric}
          </div>
          <span className="text-xs font-mono font-extrabold text-espresso bg-surface-tier1 px-3 py-1 rounded-full border border-brand-peach/80">
            Real-Time Synced
          </span>
        </div>
      </div>
    </div>
  );
};
