
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplitText from '@/components/SplitText';

const HeroSection: React.FC = () => {
  const stats = [{
    icon: Users,
    label: 'Expected Participants',
    value: '5000+'
  }, {
    icon: Zap,
    label: 'Tech Events',
    value: '50+'
  }, {
    icon: Calendar,
    label: 'Days of Innovation',
    value: '3'
  }, {
    icon: MapPin,
    label: 'Venue',
    value: 'TechNova Campus'
  }];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold my-8 sm:my-16 md:my-[100px]">
                <SplitText 
                  text="Anveshan 2K25" 
                  className="bg-gradient-tech bg-clip-text text-transparent"
                  delay={1}
                  duration={0.08}
                />
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide px-4"
            >
              The Ultimate University Technical Festival
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }} 
              className="text-base sm:text-lg text-primary font-medium"
            >
              March 15-17, 2025 • TechNova University
            </motion.div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Experience the future of technology through cutting-edge competitions, 
            groundbreaking workshops, and innovations that will reshape tomorrow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Register Now
              <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
              Explore Events
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.2 }} 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }} 
                className="relative group"
              >
                <div className="bg-glass/50 backdrop-blur-sm border border-glass-border rounded-xl p-4 sm:p-6 hover:bg-glass/70 transition-all duration-300 hover:shadow-glass">
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="p-2 sm:p-3 bg-gradient-primary rounded-lg group-hover:shadow-tech transition-all duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 2 }} 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="w-1 h-6 sm:h-8 bg-gradient-to-b from-primary to-transparent rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
