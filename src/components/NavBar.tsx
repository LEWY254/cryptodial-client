
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
      isScrolled 
        ? theme === 'dark' 
          ? 'bg-crypto-dark bg-opacity-90 backdrop-blur-lg shadow-sm' 
          : 'bg-white bg-opacity-90 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center text-2xl font-bold">
              <span className={cn(
                'transition-colors duration-300',
                isScrolled 
                  ? 'text-crypto-blue' 
                  : theme === 'dark' ? 'text-white' : 'text-crypto-blue'
              )}>Crypto</span>
              <span className={cn(
                'transition-colors duration-300',
                isScrolled 
                  ? theme === 'dark' ? 'text-white' : 'text-crypto-dark' 
                  : 'text-crypto-teal'
              )}>Dial</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'How It Works', 'Impact', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  'font-medium transition-colors duration-300 hover:text-crypto-teal',
                  isScrolled 
                    ? theme === 'dark' ? 'text-white' : 'text-crypto-dark' 
                    : theme === 'dark' ? 'text-white' : 'text-white'
                )}
              >
                {item}
              </a>
            ))}
            <a 
              href="#get-started" 
              className="btn-primary"
            >
              Get Started
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className={cn(
                'p-2 rounded-md focus:outline-none ml-2',
                isScrolled 
                  ? theme === 'dark' ? 'text-white' : 'text-crypto-dark' 
                  : theme === 'dark' ? 'text-white' : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={cn(
            "px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg shadow-lg rounded-b-lg",
            theme === 'dark' 
              ? 'bg-crypto-dark bg-opacity-95' 
              : 'bg-white bg-opacity-95'
          )}>
            {['Features', 'How It Works', 'Impact', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                  theme === 'dark'
                    ? 'text-white hover:bg-crypto-blue/20'
                    : 'text-crypto-dark hover:bg-crypto-blue hover:text-white'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#get-started"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-crypto-blue hover:bg-opacity-90 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
