import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
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
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-bg">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={120}
        speed={0.05}
        particleColors={['hsl(220, 100%, 60%)', 'hsl(270, 85%, 65%)', 'hsl(180, 100%, 65%)']}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
        alphaParticles={true}
        particleBaseSize={60}
        sizeRandomness={0.6}
      />
      
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 text-center" style={{ zIndex: 10 }}>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: "easeOut"
      }} className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold my-[100px]">
                <span className="bg-gradient-tech bg-clip-text text-transparent">अ NवEशण</span>
                <span className="text-foreground"></span>
              </h1>
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 -z-10 animate-glow-pulse">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary/20">
                  TECHNOVA
                </h1>
              </div>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              The Ultimate University Technical Festival
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="text-lg text-primary font-medium">
              March 15-17, 2024 • TechNova University
            </motion.div>
          </div>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Experience the future of technology through cutting-edge competitions, 
            groundbreaking workshops, and innovations that will reshape tomorrow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
              Register Now
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
              Explore Events
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.4 + index * 0.1
          }} className="relative group">
                <div className="bg-glass/50 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/70 transition-all duration-300 hover:shadow-glass">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-tech transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 2
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;