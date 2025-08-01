
import React from 'react';
import { motion } from 'framer-motion';

interface PixelCardProps {
  name: string;
  designation: string;
  description: string;
  image?: string;
  className?: string;
}

const PixelCard: React.FC<PixelCardProps> = ({
  name,
  designation,
  description,
  image,
  className = ''
}) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-surface to-surface-elevated border border-glass-border">
        {/* Pixel effect overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-tech opacity-10" />
          <div 
            className="absolute inset-0 bg-repeat opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  hsl(var(--primary) / 0.1) 2px,
                  hsl(var(--primary) / 0.1) 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  hsl(var(--primary) / 0.1) 2px,
                  hsl(var(--primary) / 0.1) 4px
                )
              `
            }}
          />
        </div>

        <div className="relative p-6 space-y-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            {image ? (
              <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.split(' ').map(n => n[0]).join('').slice(0, 2)
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-primary font-medium uppercase tracking-wide">
              {designation}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default PixelCard;
