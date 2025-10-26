import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  // Google Analytics event tracking
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const { isDark, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    trackEvent('theme_toggled', { theme: isDark ? 'light' : 'dark' });
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleThemeToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FiSun className="w-5 h-5" />
        ) : (
          <FiMoon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;