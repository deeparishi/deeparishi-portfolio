import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const [activeSection, setActiveSection] = useState('contact');

  const sections = [
    { id: 'contact', label: 'Contact', shortLabel: 'Contact' },
    { id: 'experience', label: 'Experience', shortLabel: 'Exp' },
    { id: 'skills', label: 'Skills', shortLabel: 'Skills' },
    { id: 'certifications', label: 'Certifications', shortLabel: 'Certs' },
    { id: 'education', label: 'Education', shortLabel: 'Edu' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('education'); // Set to last section when near bottom
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Check if section is in viewport
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom + 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackEvent('navigation_clicked', { section: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Add extra padding to ensure we scroll past the title
      const extraPadding = 20;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraPadding;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`flex justify-center ${className}`}>
      <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg border border-gray-200 dark:border-gray-600 max-w-full overflow-x-auto">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => scrollToSection(section.id)}
            className={`nav-button whitespace-nowrap ${
              activeSection === section.id
                ? 'active'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span className=" z-10">
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.shortLabel}</span>
            </span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;