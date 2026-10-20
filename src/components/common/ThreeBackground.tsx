import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  intensity?: 'hero' | 'standard' | 'subtle';
  className?: string;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  intensity = 'standard',
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Controlled opacity depending on section intensity
  const opacity = intensity === 'hero' ? 0.20 : intensity === 'standard' ? 0.12 : 0.08;

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let destroyed = false;
    let animationId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let removeListeners: (() => void) | null = null;

    const initScene = () => {
      if (destroyed || !mountRef.current) return;

      // Use window dimensions directly (container is fixed inset-0) to avoid forcing DOM layout reflow
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 40;

      // 2. Renderer with low-power preference and bounded pixel ratio for mobile performance
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      container.appendChild(renderer.domElement);

      // 3. Palette Materials
      const brandColors = [
        0xf15e1c, // brand-orange #f15e1c
        0x2e936f, // brand-green #2e936f
        0xfab60a, // brand-yellow #fab60a
        0xf7d7b0, // brand-peach #f7d7b0
      ];

      const materials = brandColors.map(
        (col) =>
          new THREE.MeshBasicMaterial({
            color: col,
            wireframe: true,
            transparent: true,
            opacity: 0.35,
          })
      );

      // 4. Create 3D Nodes Mesh
      const isMobile = width < 768;
      const nodeCount = isMobile ? 14 : 32;
      const nodesGroup = new THREE.Group();
      scene.add(nodesGroup);

      const geometries = [
        new THREE.IcosahedronGeometry(1.2, 0),
        new THREE.OctahedronGeometry(1.0, 0),
        new THREE.TetrahedronGeometry(1.4, 0),
      ];

      const nodePositions: THREE.Vector3[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const geom = geometries[i % geometries.length];
        const mat = materials[i % materials.length];
        const mesh = new THREE.Mesh(geom, mat);

        const pos = new THREE.Vector3(
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30
        );

        mesh.position.copy(pos);
        nodePositions.push(pos);
        nodesGroup.add(mesh);
      }

      // 5. 3D Dynamic Connecting Line Network
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xf15e1c,
        transparent: true,
        opacity: 0.15,
      });

      const linesGroup = new THREE.Group();
      scene.add(linesGroup);

      const maxDist = isMobile ? 18 : 22;
      const linePositions: number[] = [];

      for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < maxDist) {
            linePositions.push(
              nodePositions[i].x,
              nodePositions[i].y,
              nodePositions[i].z,
              nodePositions[j].x,
              nodePositions[j].y,
              nodePositions[j].z
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      linesGroup.add(lineSegments);

      // 6. Ambient Particle Cloud
      const particleCount = isMobile ? 40 : 120;
      const particleGeo = new THREE.BufferGeometry();
      const particlePos = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        particlePos[i] = (Math.random() - 0.5) * 80;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.8,
        color: 0xf7d7b0,
        transparent: true,
        opacity: 0.4,
      });
      const pointsCloud = new THREE.Points(particleGeo, particleMat);
      scene.add(pointsCloud);

      // 7. Mouse Parallax & Scroll Lerp Damping
      let mouseX = 0;
      let mouseY = 0;
      let scrollYTarget = 0;
      let currentScrollY = 0;
      let cachedScrollHeight = 2500;

      // Measure scroll height in next animation frame to prevent synchronous reflow
      requestAnimationFrame(() => {
        if (!destroyed && typeof document !== 'undefined') {
          cachedScrollHeight = Math.max(document.documentElement.scrollHeight, 1000);
        }
      });

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleScroll = () => {
        scrollYTarget = window.scrollY;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      let resizeRaf: number | null = null;
      const handleResize = () => {
        if (resizeRaf !== null) return;
        resizeRaf = requestAnimationFrame(() => {
          resizeRaf = null;
          if (destroyed || !renderer) return;
          const w = window.innerWidth;
          const h = window.innerHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          if (typeof document !== 'undefined') {
            cachedScrollHeight = Math.max(document.documentElement.scrollHeight, 1000);
          }
        });
      };

      window.addEventListener('resize', handleResize, { passive: true });

      removeListeners = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
      };

      const clock = new THREE.Clock();

      const animate = () => {
        if (destroyed || !renderer) return;
        const elapsedTime = clock.getElapsedTime();

        // Smooth scroll lerp damping (5-15% subtle position offset)
        currentScrollY += (scrollYTarget - currentScrollY) * 0.05;
        const scrollOffset = (currentScrollY / cachedScrollHeight) * 10;

        // Slow orbital 3D movement + smooth scroll offset
        nodesGroup.rotation.y = elapsedTime * 0.04 + mouseX * 0.08;
        nodesGroup.rotation.x = elapsedTime * 0.02 + mouseY * 0.08 + scrollOffset * 0.02;
        linesGroup.rotation.y = nodesGroup.rotation.y;
        linesGroup.rotation.x = nodesGroup.rotation.x;
        pointsCloud.rotation.y = elapsedTime * 0.015;

        camera.position.y = -scrollOffset * 0.5;

        // Animate floating node positions
        for (let i = 0; i < nodesGroup.children.length; i++) {
          const child = nodesGroup.children[i];
          child.rotation.x += 0.004;
          child.rotation.y += 0.006;
          child.position.y += Math.sin(elapsedTime * 0.7 + i) * 0.008;
        }

        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      animate();
    };

    // Defer initialization to idle time so first paint and LCP are not delayed
    const idleId =
      typeof window !== 'undefined' && 'requestIdleCallback' in window
        ? (window as any).requestIdleCallback(initScene, { timeout: 1200 })
        : setTimeout(initScene, 250);

    return () => {
      destroyed = true;
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof idleId === 'number') {
        (window as any).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId as any);
      }
      if (animationId) cancelAnimationFrame(animationId);
      if (removeListeners) removeListeners();
      if (container && renderer && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
    };
  }, []);

  if (reducedMotion) {
    return (
      <div
        className={`fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-surface-ambient to-surface-tier1 opacity-10 ${className}`}
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${className}`}
      style={{ opacity }}
    />
  );
};

export default ThreeBackground;
