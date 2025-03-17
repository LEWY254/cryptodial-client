
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-crypto-dark text-white">
      <div className="container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center text-2xl font-bold mb-4">
              <span className="text-crypto-blue">Crypto</span>
              <span className="text-crypto-teal">Dial</span>
            </div>
            <p className="text-white text-opacity-70 mb-6">
              Bringing DeFi to Everyone, Everywhere. Access the digital economy with just a basic mobile phone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'How It Works', 'Impact', 'About Us', 'FAQ', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-crypto-teal flex-shrink-0 mt-1" />
                <span className="text-white text-opacity-70">info@cryptodial.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-crypto-teal flex-shrink-0 mt-1" />
                <span className="text-white text-opacity-70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-crypto-teal flex-shrink-0 mt-1" />
                <span className="text-white text-opacity-70">123 Blockchain Avenue, Digital City, Internet 10101</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-white text-opacity-70 mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-crypto-teal"
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white border-opacity-10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CryptoDial. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white text-opacity-70 hover:text-crypto-teal transition-colors duration-300 text-sm">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
