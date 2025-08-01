
import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  designation: string;
  description: string;
  image?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  designation,
  description,
  image,
  className = ''
}) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary p-0.5">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              )}
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-surface animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-primary font-medium">
            {designation}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-60" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full opacity-40" />
      </div>
    </motion.div>
  );
};

export default ProfileCard;
