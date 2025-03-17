
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      className="rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 focus:outline-none"
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
    >
      {theme === 'dark' ? 
        <Sun size={16} className="text-yellow-400 animate-pulse-slow" /> : 
        <Moon size={16} className="text-crypto-blue" />
      }
    </Toggle>
  );
};

export default ThemeToggle;
