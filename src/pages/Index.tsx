
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsPreview from '@/components/EventsPreview';
import ParticleBackground from '@/components/ParticleBackground';
import ClickSpark from '@/components/ClickSpark';
import PixelCard from '@/components/PixelCard';
import ProfileCard from '@/components/ProfileCard';
import MasonryGallery from '@/components/MasonryGallery';
import CircularGallery from '@/components/CircularGallery';
import ScrollStack from '@/components/ScrollStack';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Sample data for components
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      designation: "AI Research Director",
      description: "Leading expert in machine learning and artificial intelligence with 15+ years of experience."
    },
    {
      name: "Prof. Michael Chen",
      designation: "Robotics Engineer",
      description: "Pioneer in autonomous robotics and human-robot interaction technologies."
    },
    {
      name: "Dr. Priya Patel",
      designation: "Blockchain Specialist",
      description: "Cryptocurrency and blockchain technology expert, author of multiple research papers."
    }
  ];

  const organizers = [
    {
      name: "Alex Rivera",
      designation: "Event Coordinator",
      description: "Passionate about bringing together tech enthusiasts and creating memorable experiences."
    },
    {
      name: "Sam Kumar",
      designation: "Technical Lead",
      description: "Full-stack developer with expertise in modern web technologies and event management."
    },
    {
      name: "Emma Watson",
      designation: "Marketing Head",
      description: "Creative marketing professional specializing in tech events and community building."
    }
  ];

  const galleryItems = [
    { id: 1, image: '', title: 'Hackathon 2024', category: 'Competition', height: 'medium' as const },
    { id: 2, image: '', title: 'AI Workshop', category: 'Learning', height: 'tall' as const },
    { id: 3, image: '', title: 'Robot Demo', category: 'Exhibition', height: 'short' as const },
    { id: 4, image: '', title: 'Tech Talk', category: 'Conference', height: 'medium' as const },
    { id: 5, image: '', title: 'Innovation Fair', category: 'Showcase', height: 'tall' as const },
    { id: 6, image: '', title: 'Networking', category: 'Social', height: 'short' as const }
  ];

  const highlights = [
    { id: 1, title: 'Innovation', description: 'Cutting-edge technology showcases' },
    { id: 2, title: 'Competition', description: 'Challenging contests and hackathons' },
    { id: 3, title: 'Learning', description: 'Educational workshops and seminars' },
    { id: 4, title: 'Networking', description: 'Connect with industry professionals' },
    { id: 5, title: 'Awards', description: 'Recognition for outstanding achievements' }
  ];

  const scheduleData = [
    {
      day: 'Day 1',
      date: 'March 15, 2025',
      items: [
        { time: '9:00', title: 'Opening Ceremony', description: 'Welcome to Anveshan 2K25', speaker: 'Dr. Sarah Johnson', location: 'Main Auditorium' },
        { time: '10:30', title: 'AI Innovation Keynote', description: 'The Future of Artificial Intelligence', speaker: 'Prof. Michael Chen', location: 'Tech Hall A' },
        { time: '14:00', title: 'Hackathon Begins', description: '48-hour coding marathon starts', location: 'Innovation Lab' },
        { time: '16:00', title: 'Robotics Workshop', description: 'Build and program autonomous robots', speaker: 'Dr. Priya Patel', location: 'Lab B' }
      ]
    },
    {
      day: 'Day 2',
      date: 'March 16, 2025',
      items: [
        { time: '9:00', title: 'Blockchain Summit', description: 'Exploring decentralized technologies', speaker: 'Industry Experts', location: 'Conference Room' },
        { time: '11:00', title: 'Tech Startup Pitch', description: 'Young entrepreneurs present their ideas', location: 'Pitch Arena' },
        { time: '14:00', title: 'Gaming Competition', description: 'Esports and game development contest', location: 'Gaming Zone' },
        { time: '18:00', title: 'Cultural Night', description: 'Celebrating diversity in tech', location: 'Open Arena' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Particle Background */}
      <ParticleBackground 
        particleCount={200}
        speed={0.02}
        particleColors={['hsl(220, 100%, 60%)', 'hsl(270, 85%, 65%)', 'hsl(180, 100%, 65%)']}
        moveParticlesOnHover={true}
        particleHoverFactor={1.5}
        alphaParticles={true}
        particleBaseSize={40}
        sizeRandomness={0.8}
        className="opacity-30"
      />
      
      {/* Click Spark Effect */}
      <ClickSpark />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <EventsPreview />
            
            {/* Speakers Section */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Featured <span className="bg-gradient-tech bg-clip-text text-transparent">Speakers</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Learn from industry leaders and innovators
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {speakers.map((speaker, index) => (
                    <PixelCard
                      key={index}
                      name={speaker.name}
                      designation={speaker.designation}
                      description={speaker.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Event Gallery */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Gallery</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Glimpses from previous editions
                  </p>
                </div>
                <MasonryGallery items={galleryItems} />
              </div>
            </section>

            {/* Highlights Circular Gallery */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Highlights</span>
                  </h2>
                </div>
                <CircularGallery items={highlights} />
              </div>
            </section>

            {/* Schedule */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Schedule</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Day-by-day program overview
                  </p>
                </div>
                <div className="space-y-16 sm:space-y-20">
                  {scheduleData.map((daySchedule, index) => (
                    <ScrollStack
                      key={index}
                      day={daySchedule.day}
                      date={daySchedule.date}
                      items={daySchedule.items}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Organizing Team */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Organizing <span className="bg-gradient-tech bg-clip-text text-transparent">Team</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Meet the passionate team behind Anveshan 2K25
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {organizers.map((organizer, index) => (
                    <ProfileCard
                      key={index}
                      name={organizer.name}
                      designation={organizer.designation}
                      description={organizer.description}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
