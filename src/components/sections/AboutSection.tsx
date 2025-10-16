"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Grid3X3, Infinity, Send, Palette, Code, Music, CheckCircle, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const processSteps = [
    { icon: Search, label: 'Research' },
    { icon: Grid3X3, label: 'Wireframe' },
    { icon: Infinity, label: 'Design' },
    { icon: Code, label: 'Development' }
  ];

  const designStack = [
    { icon: Palette, label: 'Figma' },
    { icon: Code, label: 'VS Code' },
    { icon: Music, label: 'Spotify' },
    { icon: Infinity, label: 'Design' },
    { icon: Grid3X3, label: 'Grid' },
    { icon: Send, label: 'Deploy' }
  ];

  const [goals, setGoals] = useState([
    { text: 'Get a new long-term client', completed: true },
    { text: 'Travel to Miami this summer', completed: false },
    { text: 'Build and sell my first template', completed: false }
  ]);

  const toggleGoal = (index: number) => {
    setGoals(prev => prev.map((goal, i) => 
      i === index ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const cityImages = [
    { id: 1, url: '/sadique-10 images/042fb4be03d9247ce8d754199324c7a0.jpg', title: 'Urban Architecture' },
    { id: 2, url: '/sadique-10 images/0d2a8d89faaab54c6c234b3ce9f601a1.jpg', title: 'Modern Skyline' },
    { id: 3, url: '/sadique-10 images/0ff36b90cc113e6ec1fcf52655e29e22.jpg', title: 'City Lights' },
    { id: 4, url: '/sadique-10 images/13487a801b7427afa177602ce0ba3828.jpg', title: 'Street Art' },
    { id: 5, url: '/sadique-10 images/1f4b6850c71b77ee692367f388c0d34c-2.jpg', title: 'Urban Planning' },
    { id: 6, url: '/sadique-10 images/1f4b6850c71b77ee692367f388c0d34c.jpg', title: 'City Life' },
    { id: 7, url: '/sadique-10 images/34e87667f7a3a4a20c35b54b204cb471.jpg', title: 'Architectural Details' },
    { id: 8, url: '/sadique-10 images/3f4cb44b0ca8c09ec12591c77302611e.jpg', title: 'Urban Landscapes' },
    { id: 9, url: '/sadique-10 images/e7d7c974b03775b61a04ba2e73d471ff.jpg', title: 'City Vibes' },
    { id: 10, url: '/sadique-10 images/f1edb6f6037da99ee83938e3e2fce716.jpg', title: 'Metropolitan Design' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cityImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cityImages.length]);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4">
            Meet the designer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From wireframes to real things people use.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Profile Card */}
          <Card className="bg-card shadow-lg rounded-2xl p-8 border border-border/20">
            <CardContent className="p-0">
              <div className="text-left">
                <div className="w-28 h-28 mb-6 rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/Profile-Sadique.jpeg"
                    alt="Sadique Profile"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-wrap justify-start gap-2 mb-6">
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    Web designer
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    5+ years experience
                  </span>
                </div>
                <p className="text-card-foreground text-left leading-relaxed">
                  An aspiring web designer with a passion for creativity and innovation. I'm a freelancer who's passionate about creating visually stunning designs that captivate and inspire.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://github.com/sadique-xo"
                    aria-label="GitHub"
                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sadiqueh/"
                    aria-label="LinkedIn"
                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/notsadique"
                    aria-label="Twitter"
                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://dribbble.com/designbysadique"
                    aria-label="Dribbble"
                    className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-muted/70 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dribbble className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Card */}
          <Card className="bg-card shadow-lg rounded-2xl p-8 border border-border/20">
            <CardContent className="p-0">
              <div className="space-y-4 mb-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-xl border border-border/20">
                    <step.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-card-foreground font-medium">{step.label}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-card-foreground text-lg mb-1">My process</h3>
                <p className="text-muted-foreground text-sm">My design process of making good design</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {/* Design Stack Card */}
          <Card className="bg-card shadow-lg rounded-2xl p-6 h-75 border border-border/20">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="text-left flex-1">
                <h3 className="font-bold text-card-foreground text-lg mb-1">Design stack</h3>
                <p className="text-muted-foreground text-sm mb-4">A mix of pixels, planning, and playlists.</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {designStack.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-2 bg-muted rounded-lg">
                      <item.icon className="w-5 h-5 text-muted-foreground mb-1" />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="bg-card shadow-lg rounded-2xl p-6 h-75 border border-border/20">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="text-left flex-1">
                <h3 className="font-bold text-card-foreground text-lg mb-1">My next goals</h3>
                <p className="text-muted-foreground text-sm mb-4">A few things I'm aiming for.</p>
                <div className="space-y-3">
                  {goals.map((goal, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg hover:rounded-xl transition-all duration-200"
                      onClick={() => toggleGoal(index)}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        goal.completed ? 'bg-muted-foreground border-muted-foreground' : 'border-muted-foreground'
                      }`}>
                        {goal.completed && <CheckCircle className="w-3 h-3 text-card" />}
                      </div>
                      <span className={`text-card-foreground text-sm transition-colors duration-200 ${
                        goal.completed ? 'line-through opacity-70' : ''
                      }`}>{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Carousel Card */}
          <Card className="bg-transparent shadow-lg rounded-2xl overflow-hidden p-0 h-75 border-0">
            <CardContent className="p-0 h-full">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                {cityImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover rounded-2xl"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
