
import React, { useEffect, useRef } from 'react';
import { PhoneCall, ArrowRight, Navigation, DollarSign, CheckCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const HowItWorks: React.FC = () => {
  const { theme } = useTheme();
  const timelineRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const steps = [
    {
      icon: <PhoneCall size={24} className="text-white" />,
      title: "Dial USSD Code",
      description: "Access CryptoDial by dialing a simple USSD code (*123*456#) from any mobile phone.",
      iconBg: "bg-crypto-blue",
      delay: 100
    },
    {
      icon: <Navigation size={24} className="text-white" />,
      title: "Select Service",
      description: "Navigate through the menu options to choose the service you need.",
      iconBg: "bg-crypto-teal",
      delay: 200
    },
    {
      icon: <DollarSign size={24} className="text-white" />,
      title: "Perform Transaction",
      description: "Complete your cryptocurrency transaction by following the guided prompts.",
      iconBg: "bg-crypto-blue",
      delay: 300
    },
    {
      icon: <CheckCircle size={24} className="text-white" />,
      title: "Receive Confirmation",
      description: "Get an instant confirmation message once your transaction is processed.",
      iconBg: "bg-crypto-teal",
      delay: 400
    }
  ];

  // Animation on scroll for timeline
  useEffect(() => {
    const timeline = timelineRef.current;
    const section = sectionRef.current;
    
    if (!timeline || !section) return;
    
    const timelinePath = timeline.querySelector('path');
    const timelineCircles = timeline.querySelectorAll('circle');
    const timelineLength = timelinePath?.getTotalLength() || 0;
    
    if (timelinePath) {
      timelinePath.style.strokeDasharray = `${timelineLength}`;
      timelinePath.style.strokeDashoffset = `${timelineLength}`;
    }
    
    timelineCircles.forEach(circle => {
      circle.style.opacity = '0';
    });
    
    const animateTimeline = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Start animation when section is 20% in view
      if (scrollPosition > sectionTop - windowHeight * 0.8) {
        const scrollPercentage = Math.min(
          1, 
          (scrollPosition - (sectionTop - windowHeight * 0.8)) / (sectionHeight + windowHeight * 0.6)
        );
        
        if (timelinePath) {
          const drawLength = timelineLength * scrollPercentage;
          timelinePath.style.strokeDashoffset = String(timelineLength - drawLength);
        }
        
        // Animate circles based on scroll progress
        timelineCircles.forEach((circle, index) => {
          const threshold = (index + 1) / (timelineCircles.length + 1);
          
          if (scrollPercentage >= threshold) {
            circle.style.opacity = '1';
            circle.style.transform = 'scale(1)';
          } else {
            circle.style.opacity = '0';
            circle.style.transform = 'scale(0.5)';
          }
        });
      }
    };
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', animateTimeline);
    };
  }, []);

  return (
    <section id="how-it-works" className="section-spacing bg-background" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-crypto-teal bg-opacity-10 text-crypto-teal text-sm font-medium">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How CryptoDial Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Using CryptoDial is straightforward and accessible to everyone, regardless of technical expertise.
          </p>
        </div>

        <div className="relative">
          {/* SVG Timeline */}
          <svg 
            ref={timelineRef} 
            className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 hidden md:block pointer-events-none"
            width="120" 
            viewBox="0 0 120 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M60 0 V 800" 
              stroke={theme === 'dark' ? '#2DD4BF' : '#1E6FD9'} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeDasharray="12 12" 
              className="transition-colors duration-300"
            />
            
            {/* Step Circles */}
            {steps.map((_, index) => (
              <circle 
                key={index} 
                cx="60" 
                cy={200 * (index + 0.5)} 
                r="12" 
                fill={index % 2 === 0 ? '#1E6FD9' : '#2DD4BF'} 
                className="transition-all duration-500 ease-out"
                style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
              />
            ))}
          </svg>

          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center animate-fade-up animate-delay-${step.delay}`}
              >
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center z-10 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2 glass-card p-6 md:p-8 max-w-lg mx-auto md:mx-0 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <a href="#get-started" className="btn-primary inline-flex items-center gap-2">
            Start Using CryptoDial <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
