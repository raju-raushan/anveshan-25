
import React from 'react';
import { motion } from 'framer-motion';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
}

interface ScrollStackProps {
  day: string;
  date: string;
  items: ScheduleItem[];
  className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ day, date, items, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Day Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="sticky top-20 z-10 bg-surface/80 backdrop-blur-sm border border-glass-border rounded-xl p-6 mb-8"
      >
        <h3 className="text-2xl font-bold text-foreground mb-2">{day}</h3>
        <p className="text-primary text-lg">{date}</p>
      </motion.div>

      {/* Schedule Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex gap-6">
              {/* Time */}
              <div className="flex-shrink-0 w-20 text-right">
                <div className="sticky top-32 bg-gradient-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-bold">
                  {item.time}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full" />
                {index < items.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-primary to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {item.speaker && (
                      <div className="flex items-center gap-2 text-primary">
                        <span>👤</span>
                        <span>{item.speaker}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2 text-secondary">
                        <span>📍</span>
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
