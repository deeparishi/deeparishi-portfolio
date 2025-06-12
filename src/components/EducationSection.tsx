import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../data/portfolioData';
import { FiBook, FiMapPin, FiCalendar, FiStar } from 'react-icons/fi';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="card p-3 sm:p-5 min-h-[300px]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center"
      >
        <div className="w-1 h-5 sm:h-6 bg-primary-500 mr-2 sm:mr-3 rounded-full"></div>
        Education
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 w-full max-w-xs"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-600">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center"><svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div>`;
                        }
                      }}
                    />
                  ) : (
                    <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                  )}
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight">
                {edu.degree}
              </h3>
              
              <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2 sm:mb-3">
                {edu.institution}
              </p>
              
              <div className="space-y-1.5">
                <div className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1.5 sm:p-2 max-w-32 mx-auto">
                  <FiCalendar className="w-3 h-3 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <span className="font-semibold text-xs text-gray-700 dark:text-gray-300 truncate">{edu.year}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1.5 sm:p-2 max-w-32 mx-auto">
                  <FiMapPin className="w-3 h-3 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <span className="font-medium text-xs text-gray-700 dark:text-gray-300 truncate">{edu.location}</span>
                </div>
                
                {edu.gpa && (
                  <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-1.5 sm:p-2 border border-yellow-200 dark:border-yellow-700 max-w-32 mx-auto">
                    <FiStar className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                    <span className="font-bold text-xs text-yellow-700 dark:text-yellow-300 truncate">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;