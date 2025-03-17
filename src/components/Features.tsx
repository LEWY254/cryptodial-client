
import React from 'react';
import { 
  Send, 
  Wallet, 
  BarChart, 
  Globe, 
  Shield, 
  Key, 
  Clock, 
  Users 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`feature-card animate-fade-up animate-delay-${delay}`}>
      <div className="w-12 h-12 rounded-full bg-crypto-blue bg-opacity-10 flex items-center justify-center mb-4 text-crypto-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-crypto-dark">{title}</h3>
      <p className="text-crypto-gray">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Send size={24} />,
      title: "Send & Receive Crypto",
      description: "Transfer cryptocurrencies to anyone in the world using just a basic mobile phone with a simple USSD code.",
      delay: 100
    },
    {
      icon: <Wallet size={24} />,
      title: "Access DeFi Services",
      description: "Participate in lending, borrowing, and other decentralized finance opportunities without internet access.",
      delay: 200
    },
    {
      icon: <BarChart size={24} />,
      title: "Check Balances",
      description: "Monitor your cryptocurrency balances and transaction history directly from your mobile device.",
      delay: 300
    },
    {
      icon: <Globe size={24} />,
      title: "Global Accessibility",
      description: "Connect to the global digital economy regardless of your location or access to modern technology.",
      delay: 100
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Transactions",
      description: "Benefit from blockchain security with encrypted transactions that protect your financial activities.",
      delay: 200
    },
    {
      icon: <Key size={24} />,
      title: "Self-Custody",
      description: "Maintain full control of your digital assets with our non-custodial solution that respects your ownership.",
      delay: 300
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Processing",
      description: "Experience quick transaction confirmation times across our supported blockchain networks.",
      delay: 100
    },
    {
      icon: <Users size={24} />,
      title: "Community Focused",
      description: "Built with marginalized communities in mind, promoting financial inclusion and empowerment.",
      delay: 200
    }
  ];

  return (
    <section id="features" className="section-spacing bg-crypto-light">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-crypto-blue bg-opacity-10 text-crypto-blue text-sm font-medium">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-crypto-dark">
            Access DeFi With Just a Basic Phone
          </h2>
          <p className="text-lg text-crypto-gray">
            CryptoDial empowers anyone to participate in the digital economy without requiring smartphones or internet access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
