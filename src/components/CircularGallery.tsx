
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CircularGalleryItem {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface CircularGalleryProps {
  items: CircularGalleryItem[];
  className?: string;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({ items, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleItemClick = (index: number) => {
    const newRotation = -(360 / items.length) * index;
    setRotation(newRotation);
    setSelectedIndex(index);
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative aspect-square max-w-2xl mx-auto">
        {/* Central display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-4 max-w-sm"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-4xl text-primary-foreground font-bold">
                {items[selectedIndex]?.image ? (
                  <img 
                    src={items[selectedIndex].image} 
                    alt={items[selectedIndex].title}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  items[selectedIndex]?.title?.charAt(0)
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {items[selectedIndex]?.title}
              </h3>
              <p className="text-muted-foreground">
                {items[selectedIndex]?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Circular items */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {items.map((item, index) => {
            const angle = (360 / items.length) * index;
            const radius = 45; // Percentage from center
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

            return (
              <motion.button
                key={item.id}
                className="absolute w-16 h-16 rounded-full bg-glass/50 border border-glass-border hover:bg-glass/70 transition-all duration-300 flex items-center justify-center text-foreground hover:scale-110"
                style={{
                  left: `calc(50% + ${x}% - 2rem)`,
                  top: `calc(50% + ${y}% - 2rem)`,
                }}
                animate={{ rotate: -rotation }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => handleItemClick(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold">
                  {item.title.charAt(0)}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CircularGallery;
