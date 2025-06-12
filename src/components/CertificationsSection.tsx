import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '../data/portfolioData';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="card p-3 sm:p-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center"
      >
        <div className="w-1 h-5 sm:h-6 bg-primary-500 mr-2 sm:mr-3 rounded-full"></div>
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg p-4 sm:p-6 border border-primary-200 dark:border-primary-700 hover:shadow-lg transition-all duration-300 mobile-safe"
          >
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                  <FiAward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {cert.name}
              </h3>

              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 text-sm sm:text-md">
                {cert.issuer}
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-2">
                  <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
                  <span className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-300">{cert.year}</span>
                </div>

                {cert.certLink && (
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs text-gray-700 dark:text-gray-300">View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;