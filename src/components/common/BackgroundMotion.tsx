import React, { useEffect, useRef, useState } from 'react';

interface BackgroundMotionProps {
  intensity?: 'hero' | 'standard' | 'subtle';
  className?: string;
}

export const BackgroundMotion: React.FC<BackgroundMotionProps> = ({
  intensity = 'standard',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Determine opacity based on intensity tier
  const opacity = intensity === 'hero' ? 0.18 : intensity === 'standard' ? 0.12 : 0.08;

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Procedural Enterprise Node Particles
    const particleCount = Math.min(35, Math.floor(width / 35));
    const colors = [
      'rgba(241, 94, 28, 0.45)',  // brand-orange #f15e1c
      'rgba(46, 147, 111, 0.40)',  // brand-green #2e936f
      'rgba(250, 182, 10, 0.35)',  // brand-yellow #fab60a
      'rgba(247, 215, 176, 0.30)', // brand-peach #f7d7b0
    ];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25, // Extremely slow, calm movement
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let waveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle warm atmospheric ambient flare
      const gradient = ctx.createRadialGradient(
        width * 0.5 + Math.sin(waveTime * 0.0005) * 100,
        height * 0.3 + Math.cos(waveTime * 0.0005) * 80,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7
      );
      gradient.addColorStop(0, 'rgba(247, 215, 176, 0.15)');
      gradient.addColorStop(0.5, 'rgba(254, 245, 238, 0.05)');
      gradient.addColorStop(1, 'rgba(255, 250, 245, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render interconnected nodes & data streams
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 180) * 0.15;
            ctx.strokeStyle = `rgba(241, 94, 28, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      waveTime += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
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
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
