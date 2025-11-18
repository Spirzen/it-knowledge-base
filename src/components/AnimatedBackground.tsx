import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground({
  className,
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 80;
    const maxRadius = 4;
    const connectionDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const getComputedStyleVar = (name: string): string => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lineColor = getComputedStyleVar('--ifm-color-primary-lightest') || '#D8BFD8';
      const dotColor = getComputedStyleVar('--ifm-color-primary') || '#7B68EE';
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = dotColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, maxRadius * 0.7, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = 1 - dist / connectionDistance;
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = alpha * 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={clsx(styles.animatedBackground, className)}
      aria-hidden="true"
    />
  );
}