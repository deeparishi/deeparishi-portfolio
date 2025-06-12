import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from '../data/portfolioData';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Navigation from './Navigation';

interface HeaderProps {
  contact: ContactInfo;
}

const Header: React.FC<HeaderProps> = ({ contact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {contact.name}
            </h1>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              {contact.title}
            </p>
          </div>
          
          <div className={`hidden md:flex items-center space-x-4 mr-16 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <FiMail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{contact.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <FiPhone className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <FiMapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{contact.location}</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="mt-2 hidden sm:block">
          <Navigation />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden border-t border-gray-200 dark:border-gray-600 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="px-4 py-2">
          <Navigation />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;