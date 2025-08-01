import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Users, Trophy, Code, Brain } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Hackathons',
      description: '48-hour coding challenges that push the boundaries of innovation'
    },
    {
      icon: Brain,
      title: 'AI Workshops',
      description: 'Hands-on sessions with cutting-edge artificial intelligence technologies'
    },
    {
      icon: Cpu,
      title: 'Robotics Arena',
      description: 'Compete with autonomous bots in challenging technical competitions'
    },
    {
      icon: Rocket,
      title: 'Startup Pitch',
      description: 'Present your revolutionary ideas to industry leaders and investors'
    },
    {
      icon: Users,
      title: 'Tech Talks',
      description: 'Learn from industry experts and visionary thought leaders'
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Win exciting prizes in diverse technical and creative challenges'
    }
  ];

  const timeline = [
    { year: '2019', title: 'Genesis', description: 'TechNova Fest was born with 500 participants' },
    { year: '2020', title: 'Digital Revolution', description: 'First virtual fest reaching 2000+ students globally' },
    { year: '2021', title: 'Innovation Hub', description: 'Introduced AI/ML competitions and startup incubation' },
    { year: '2022', title: 'Global Expansion', description: '50+ international universities participated' },
    { year: '2023', title: 'Tech Excellence', description: 'Recognized as India\'s top university tech fest' },
    { year: '2024', title: 'Future Vision', description: 'Pioneering next-gen tech with AR/VR experiences' }
  ];

  return (
    <section id="about" className="py-20 tech-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-tech bg-clip-text text-transparent">TechNova</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TechNova Fest is more than just a technical festival – it's a convergence of brilliant minds, 
            cutting-edge technology, and boundless innovation that shapes the future of technology.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To create an ecosystem where technology enthusiasts, innovators, and future leaders 
                converge to explore, learn, and build solutions that address real-world challenges. 
                We believe in fostering creativity, collaboration, and technical excellence.
              </p>
            </div>

            <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To be the premier platform that bridges the gap between academic learning and 
                industry innovation, empowering the next generation of technologists to create 
                a sustainable and technologically advanced future.
              </p>
            </div>

            <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-accent">Why TechNova?</h3>
              <p className="text-foreground/80 leading-relaxed">
                Experience hands-on learning with industry mentors, compete in cutting-edge challenges, 
                network with like-minded innovators, and showcase your skills on a national platform. 
                TechNova is where passion meets opportunity.
              </p>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-tech transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="bg-gradient-tech bg-clip-text text-transparent">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

            <div className="space-y-16">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;