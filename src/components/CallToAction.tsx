
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="get-started" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto bg-hero-pattern rounded-2xl overflow-hidden shadow-xl">
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-crypto-dark bg-opacity-85"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-white animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join the Digital Economy?
                </h2>
                <p className="text-lg text-white text-opacity-90 mb-6 max-w-xl">
                  Start using CryptoDial today and experience the power of blockchain technology without needing internet access or a smartphone.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary flex items-center gap-2">
                    Get Started <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Contact Our Team
                  </a>
                </div>
              </div>
              
              <div className="w-full lg:w-auto flex justify-center animate-fade-in animate-delay-300">
                <div className="px-6 py-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20">
                  <div className="text-center text-white mb-4">
                    <p className="font-medium mb-1">Dial to Access CryptoDial</p>
                    <p className="text-3xl font-bold">*123*456#</p>
                  </div>
                  
                  <div className="text-white text-opacity-90 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crypto-teal inline-block"></span>
                      Works with any mobile phone
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crypto-teal inline-block"></span>
                      No internet required
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-crypto-teal inline-block"></span>
                      Secure and encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
