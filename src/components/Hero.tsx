
import React from 'react';
import { ArrowRight, Activity, Globe, Shield, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 bg-hero-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-crypto-dark bg-opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-crypto-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-crypto-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto relative z-10 container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 text-white animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 animate-fade-up">
              <p className="text-sm font-medium">Bringing DeFi to Everyone, Everywhere</p>
            </div>
            
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
              <a href="#how-it-works" className="btn-secondary transform transition-transform duration-300 hover:scale-105">
                Learn How
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 md:gap-10 animate-fade-up animate-delay-400">
              <div className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <Activity className="text-crypto-teal" size={20} />
                <p>50+ Blockchains</p>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <Globe className="text-crypto-teal" size={20} />
                <p>Global Access</p>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-1">
                <Shield className="text-crypto-teal" size={20} />
                <p>Secure Transactions</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in animate-delay-500 relative">
            {/* SVG Arrow pointing to phone - only visible on larger screens */}
            <div className="hidden lg:block absolute -left-12 top-1/2 transform -translate-y-1/2">
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-slow">
                <path d="M0 25H75" stroke="#2DD4BF" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M65 10L75 25L65 40" stroke="#2DD4BF" strokeWidth="2" />
                <text x="10" y="15" fill="#2DD4BF" fontSize="12" fontFamily="sans-serif">Try it out!</text>
              </svg>
            </div>
            
            <div className="relative w-72 h-[500px] glass-card overflow-hidden border-4 border-white border-opacity-30 rounded-[40px] hover:border-crypto-teal hover:border-opacity-50 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-6 bg-crypto-dark rounded-t-[28px]"></div>
              
              <div className="flex flex-col h-full pt-8 px-4 pb-4 bg-crypto-dark bg-opacity-90">
                <div className="text-white text-center mb-4">
                  <p className="text-sm opacity-70">Network Operator</p>
                  <p className="text-lg font-medium">USSD Service</p>
                </div>
                
                <div className="flex-1 glass-card p-4 m-1 flex flex-col space-y-4 text-white overflow-hidden">
                  <p className="text-center text-sm font-medium">CryptoDial Menu</p>
                  <div className="border-b border-white border-opacity-20 pb-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-1 rounded cursor-pointer transform hover:translate-x-1">
                    <p className="text-sm">1. Check Balance</p>
                  </div>
                  <div className="border-b border-white border-opacity-20 pb-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-1 rounded cursor-pointer transform hover:translate-x-1">
                    <p className="text-sm">2. Send Crypto</p>
                  </div>
                  <div className="border-b border-white border-opacity-20 pb-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-1 rounded cursor-pointer transform hover:translate-x-1">
                    <p className="text-sm">3. Receive Crypto</p>
                  </div>
                  <div className="border-b border-white border-opacity-20 pb-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-1 rounded cursor-pointer transform hover:translate-x-1">
                    <p className="text-sm">4. DeFi Services</p>
                  </div>
                  <div className="border-b border-white border-opacity-20 pb-2 hover:bg-white hover:bg-opacity-10 transition-all duration-300 p-1 rounded cursor-pointer transform hover:translate-x-1">
                    <p className="text-sm">5. Transaction History</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full"></div>
                </div>
              </div>
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
