
import React from 'react';
import { 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Globe
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Impact: React.FC = () => {
  const { theme } = useTheme();
  
  const stats = [
    {
      value: "1.7B+",
      label: "Unbanked Population",
      icon: <Users size={24} className="text-crypto-blue" />,
      delay: 100
    },
    {
      value: "$1T+",
      label: "DeFi Market Size",
      icon: <TrendingUp size={24} className="text-crypto-blue" />,
      delay: 200
    },
    {
      value: "50+",
      label: "Blockchain Networks",
      icon: <Globe size={24} className="text-crypto-blue" />,
      delay: 300
    },
    {
      value: "120+",
      label: "Countries Reached",
      icon: <CheckCircle size={24} className="text-crypto-blue" />,
      delay: 400
    }
  ];

  const cardBg = theme === 'dark' ? 'bg-crypto-dark bg-opacity-60' : 'bg-white bg-opacity-10';
  const cardHoverBg = theme === 'dark' ? 'hover:bg-crypto-dark hover:bg-opacity-80' : 'hover:bg-white hover:bg-opacity-20';

  return (
    <section id="impact" className="section-spacing relative overflow-hidden bg-crypto-dark text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-crypto-blue rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-crypto-teal rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float animate-delay-200"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white bg-opacity-10 text-crypto-teal text-sm font-medium">
            Global Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redefining Financial Access
          </h2>
          <p className="text-lg text-white text-opacity-80">
            CryptoDial is bridging the gap between blockchain technology and the world's unbanked populations, creating opportunities for financial inclusion on a massive scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`glass-card ${cardBg} p-6 border border-white border-opacity-10 hover:border-crypto-teal hover:border-opacity-30 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up animate-delay-${stat.delay}`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-10 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-white text-opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-8 md:p-10 animate-fade-up animate-delay-500 ${cardBg} border border-white border-opacity-20`}>
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Why Financial Inclusion Matters</h3>
            
            <div className="space-y-6">
              <div className={`flex gap-4 items-start transition-all duration-300 transform hover:-translate-x-1 ${cardHoverBg} p-3 rounded-lg`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crypto-blue flex items-center justify-center">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-white">Economic Empowerment</h4>
                  <p className="text-white text-opacity-90">
                    Access to financial services enables individuals to save, invest, and build wealth, creating pathways out of poverty.
                  </p>
                </div>
              </div>
              
              <div className={`flex gap-4 items-start transition-all duration-300 transform hover:-translate-x-1 ${cardHoverBg} p-3 rounded-lg`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crypto-teal flex items-center justify-center">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-white">Reduced Inequality</h4>
                  <p className="text-white text-opacity-90">
                    By providing equal access to financial tools, we help bridge the gap between the privileged and marginalized communities.
                  </p>
                </div>
              </div>
              
              <div className={`flex gap-4 items-start transition-all duration-300 transform hover:-translate-x-1 ${cardHoverBg} p-3 rounded-lg`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crypto-blue flex items-center justify-center">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-white">Global Participation</h4>
                  <p className="text-white text-opacity-90">
                    Inclusion in the digital economy allows everyone to participate in and benefit from global economic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
