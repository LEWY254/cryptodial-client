import React from 'react';
import { ArrowRight, Activity, Globe, Shield, ChevronDown } from 'lucide-react';
import PhoneMockupSVG from '@/assets/asset-single.svg';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 bg-hero-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-crypto-dark bg-opacity-70"></div>
      
      <div className="container mx-auto relative z-10 container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animate-delay-100">
              Blockchain Access <br />
              <span className="text-crypto-teal">Without Internet</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg animate-fade-up animate-delay-200">
              CryptoDial bridges the gap between blockchain technology and marginalized communities, enabling anyone to access DeFi with just a basic phone.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <a href="#get-started" className="btn-primary flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Side - Phone Mockup with SVG */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in animate-delay-500 relative">
            <div id="phone_mockup" className="relative w-72 h-[500px] glass-card overflow-hidden border-4 border-white border-opacity-30 rounded-[40px] hover:border-crypto-teal hover:border-opacity-50 transition-all duration-500">
              <img src={PhoneMockupSVG} alt="Phone Mockup" className="w-full h-full object-contain" />
            </div>
            
            {/* Indicator for scrolling down */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
              <p className="text-white text-opacity-70 text-sm mb-2">Scroll to explore</p>
              <ChevronDown className="text-crypto-teal" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
