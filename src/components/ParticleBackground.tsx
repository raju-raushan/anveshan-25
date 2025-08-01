import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 150,
  particleSpread = 8,
  speed = 0.08,
  particleColors = ['#60a5fa', '#a855f7', '#06b6d4'], // Use our theme colors
  moveParticlesOnHover = true,
  particleHoverFactor = 1.5,
  alphaParticles = true,
  particleBaseSize = 80,
  sizeRandomness = 0.8,
  cameraDistance = 15,
  disableRotation = false,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * cameraDistance,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          vz: (Math.random() - 0.5) * speed * 0.5,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          size: particleBaseSize * (Math.random() * sizeRandomness + (1 - sizeRandomness)),
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };
    initParticles();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Rotation
        if (!disableRotation) {
          particle.angle += particle.rotationSpeed;
        }

        // Mouse interaction
        if (moveParticlesOnHover) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            particle.vx += dx * force * 0.001 * particleHoverFactor;
            particle.vy += dy * force * 0.001 * particleHoverFactor;
          }
        }

        // Boundary wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.z < -cameraDistance) particle.z = cameraDistance;
        if (particle.z > cameraDistance) particle.z = -cameraDistance;

        // 3D projection
        const scale = 1 / (1 + particle.z / cameraDistance);
        const projectedX = particle.x;
        const projectedY = particle.y;
        const projectedSize = particle.size * scale;

        // Draw particle
        ctx.save();
        ctx.translate(projectedX, projectedY);
        ctx.rotate(particle.angle);

        if (alphaParticles) {
          const alpha = Math.max(0.1, 1 - Math.abs(particle.z) / cameraDistance);
          ctx.globalAlpha = alpha;
        }

        // Create gradient for particle
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, projectedSize / 2);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, particle.color + '00'); // Transparent
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, projectedSize / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    particleColors,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;