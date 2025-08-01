import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Code, Brain, Cpu, Gamepad2, Lightbulb, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsPreview: React.FC = () => {
  const eventCategories = [
    { name: 'All Events', active: true },
    { name: 'Hackathons', active: false },
    { name: 'Competitions', active: false },
    { name: 'Workshops', active: false },
    { name: 'Fun Events', active: false }
  ];

  const events = [
    {
      id: 1,
      title: 'CodeStorm Hackathon',
      category: 'Hackathon',
      description: '48-hour coding marathon to build innovative solutions for real-world problems',
      icon: Code,
      date: 'March 15-17',
      time: '9:00 AM',
      participants: '500+',
      prize: '₹1,00,000',
      difficulty: 'Advanced',
      image: 'hackathon-bg'
    },
    {
      id: 2,
      title: 'AI Innovation Challenge',
      category: 'Competition',
      description: 'Showcase your machine learning models and AI-powered applications',
      icon: Brain,
      date: 'March 16',
      time: '10:00 AM',
      participants: '200+',
      prize: '₹50,000',
      difficulty: 'Intermediate',
      image: 'ai-bg'
    },
    {
      id: 3,
      title: 'RoboWars Arena',
      category: 'Competition',
      description: 'Build and battle autonomous robots in the ultimate tech showdown',
      icon: Cpu,
      date: 'March 17',
      time: '2:00 PM',
      participants: '150+',
      prize: '₹75,000',
      difficulty: 'Advanced',
      image: 'robo-bg'
    },
    {
      id: 4,
      title: 'Game Development Jam',
      category: 'Competition',
      description: 'Create immersive games using cutting-edge technologies and frameworks',
      icon: Gamepad2,
      date: 'March 15-16',
      time: '11:00 AM',
      participants: '300+',
      prize: '₹40,000',
      difficulty: 'Intermediate',
      image: 'game-bg'
    },
    {
      id: 5,
      title: 'Innovation Pitch Fest',
      category: 'Competition',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 6,
      title: 'Mobile App Challenge',
      category: 'Competition',
      description: 'Develop mobile applications that solve everyday problems',
      icon: Smartphone,
      date: 'March 16-17',
      time: '9:00 AM',
      participants: '250+',
      prize: '₹35,000',
      difficulty: 'Intermediate',
      image: 'mobile-bg'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="events" className="py-20 tech-bg">
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
            Featured <span className="bg-gradient-tech bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Dive into exciting competitions, workshops, and hackathons designed to challenge your skills and expand your horizons
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-primary text-primary-foreground border-primary shadow-tech'
                    : 'bg-glass/30 text-foreground border-glass-border hover:bg-glass/50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300"
            >
              {/* Event Icon */}
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-primary rounded-xl w-fit group-hover:shadow-tech transition-all duration-300">
                  <event.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                  {event.difficulty}
                </div>
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 text-primary ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">{event.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full mt-6 bg-gradient-primary hover:shadow-tech transition-all duration-300 group-hover:scale-105"
                >
                  Register Now
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech px-8 py-4 text-lg"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;