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
          
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.02 * particleHoverFactor;
            particle.vy += (dy / distance) * force * 0.02 * particleHoverFactor;
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

        // Convert HSL to RGB for gradient
        const hslToRgb = (hslString: string) => {
          if (hslString.startsWith('#')) {
            // Handle hex colors
            const hex = hslString.slice(1);
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            return `${r}, ${g}, ${b}`;
          }
          
          // Extract HSL values
          const match = hslString.match(/hsl\(([^)]+)\)/);
          if (!match) return '255, 255, 255'; // fallback to white
          
          const [h, s, l] = match[1].split(',').map(v => parseFloat(v.trim().replace('%', '')));
          
          const hNorm = h / 360;
          const sNorm = s / 100;
          const lNorm = l / 100;
          
          const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
          const x = c * (1 - Math.abs(((hNorm * 6) % 2) - 1));
          const m = lNorm - c / 2;
          
          let r, g, b;
          
          if (hNorm < 1/6) {
            r = c; g = x; b = 0;
          } else if (hNorm < 2/6) {
            r = x; g = c; b = 0;
          } else if (hNorm < 3/6) {
            r = 0; g = c; b = x;
          } else if (hNorm < 4/6) {
            r = 0; g = x; b = c;
          } else if (hNorm < 5/6) {
            r = x; g = 0; b = c;
          } else {
            r = c; g = 0; b = x;
          }
          
          r = Math.round((r + m) * 255);
          g = Math.round((g + m) * 255);
          b = Math.round((b + m) * 255);
          
          return `${r}, ${g}, ${b}`;
        };

        // Create gradient for particle
        const radius = Math.max(1, projectedSize / 2);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        const rgbColor = hslToRgb(particle.color);
        gradient.addColorStop(0, `rgba(${rgbColor}, 0.8)`);
        gradient.addColorStop(1, `rgba(${rgbColor}, 0)`);
        
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