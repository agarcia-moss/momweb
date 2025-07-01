import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Logo = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img 
        src={isDarkMode ? "/whitelogo.png" : "/logo.png"} 
        alt="Company Logo" 
        className="h-16 w-auto transition-opacity duration-300" 
      />
    </div>
  );
};

export default Logo; 