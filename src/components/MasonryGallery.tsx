
import React from 'react';
import { motion } from 'framer-motion';

interface MasonryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  height?: 'short' | 'medium' | 'tall';
}

interface MasonryGalleryProps {
  items: MasonryItem[];
  className?: string;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items, className = '' }) => {
  const getHeightClass = (height?: string) => {
    switch (height) {
      case 'short': return 'h-48';
      case 'medium': return 'h-64';
      case 'tall': return 'h-80';
      default: return 'h-56';
    }
  };

  return (
    <div className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="break-inside-avoid mb-6 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg bg-surface border border-glass-border">
            <div className={`relative ${getHeightClass(item.height)} bg-gradient-to-br from-primary/10 to-secondary/10`}>
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-muted-foreground opacity-50">
                📸
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGallery;
