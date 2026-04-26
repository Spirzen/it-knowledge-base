import React, { useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import styles from './AnimatedBackground.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
}

export default function AnimatedBackground({
  className,
  particleCount = 80,
  connectionDistance = 150,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const colorsRef = useRef<{ lineColor: string; dotColor: string } | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getColors = useCallback((): { lineColor: string; dotColor: string } => {
    if (colorsRef.current) {
      return colorsRef.current;
    }

    const getComputedStyleVar = (name: string): string => {
      if (typeof document === 'undefined') return '';
      return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
    };

    const colors = {
      lineColor: getComputedStyleVar('--ifm-color-primary-lightest') || '#D8BFD8',
      dotColor: getComputedStyleVar('--ifm-color-primary') || '#7B68EE',
    };

    colorsRef.current = colors;
    return colors;
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!canvas.getContext) {
      console.warn('Canvas API не поддерживается в этом браузере');
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) {
      console.warn('Не удалось получить контекст 2D canvas');
      return;
    }

    const particles: Particle[] = [];
    const maxRadius = 4;
    const connectionDistanceSquared = connectionDistance * connectionDistance;

    const resizeCanvas = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const oldWidth = canvas.width || width;
        const oldHeight = canvas.height || height;
        const scaleX = oldWidth > 0 ? width / oldWidth : 1;
        const scaleY = oldHeight > 0 ? height / oldHeight : 1;

        canvas.width = width;
        canvas.height = height;

        if (particles.length > 0) {
          particles.forEach((p) => {
            p.x *= scaleX;
            p.y *= scaleY;
          });
        }

        colorsRef.current = null;
      }, 150);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    resizeCanvas();
    initParticles();

    const colors = getColors();
    ctx.strokeStyle = colors.lineColor;
    ctx.fillStyle = colors.dotColor;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentColors = getColors();
      if (currentColors.lineColor !== ctx.strokeStyle || currentColors.dotColor !== ctx.fillStyle) {
        ctx.strokeStyle = currentColors.lineColor;
        ctx.fillStyle = currentColors.dotColor;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, maxRadius * 0.7, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSquared = dx * dx + dy * dy;

          if (distSquared < connectionDistanceSquared) {
            const dist = Math.sqrt(distSquared);
            const alpha = (1 - dist / connectionDistance) * 0.6;
            ctx.beginPath();
            ctx.globalAlpha = alpha;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener('resize', resizeCanvas);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [particleCount, connectionDistance, getColors]);

  return (
    <canvas
      ref={canvasRef}
      className={clsx(styles.animatedBackground, className)}
      aria-hidden="true"
    />
  );
}