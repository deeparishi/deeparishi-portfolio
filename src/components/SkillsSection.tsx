import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/portfolioData';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {

  return (
    <section className="card p-3 sm:p-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 flex items-center"
      >
        <div className="w-1 h-5 sm:h-6 bg-primary-500 mr-2 sm:mr-3 rounded-full"></div>
        Technical Skills
      </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 mobile-safe"
            >
              <h3 className="text-sm sm:text-md font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center border-b border-primary-500 pb-2">
                {skillCategory.category}
              </h3>
              
              <div className="grid grid-cols-3 gap-2 justify-items-center mobile-grid-safe pt-1">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                      duration: 0.3
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-1 sm:mb-2 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-primary-400 dark:group-hover:border-primary-500">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain transition-all duration-300 group-hover:scale-110"
                        style={{
                          filter: (skill.name === 'Express.js' || skill.name === 'Next.js' || skill.name === 'GitHub') 
                            ? 'brightness(0.7)' 
                            : 'none'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-sm">${skill.name.charAt(0)}</div>`;
                          }
                        }}
                      />
                    </div>
                    
                    <span className="text-xs text-center text-gray-700 dark:text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 max-w-full truncate transform translate-y-1 group-hover:translate-y-0 px-1">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

export default SkillsSection;