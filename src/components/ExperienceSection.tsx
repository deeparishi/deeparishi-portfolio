import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../data/portfolioData';
import { FiMapPin, FiCalendar, FiFolder, FiActivity, FiBarChart } from 'react-icons/fi';
import { FaBuilding, FaMoneyBillWave, FaCommentDots } from 'react-icons/fa'

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>(experiences[0]?.id || '');

  const selectedExperience = experiences.find(exp => exp.id === selectedCompany);

  return (
    <section className="card p-3 sm:p-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center"
      >
        <div className="w-1 h-5 sm:h-6 bg-primary-500 mr-2 sm:mr-3 rounded-full"></div>
        Professional Experience
      </motion.h2>
      
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="hidden lg:flex lg:flex-col lg:w-1/3">
          <div className="sticky top-24 space-y-3 max-h-[calc(100vh-120px)] custom-scrollbar pr-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCompany(exp.id)}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${selectedCompany === exp.id
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white border-primary-500 shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${selectedCompany === exp.id
                      ? 'bg-white/20'
                      : 'bg-primary-100 dark:bg-primary-900'
                    }`}>
                    <FaBuilding className={`w-5 h-5 ${selectedCompany === exp.id
                        ? 'text-white'
                        : 'text-primary-600 dark:text-primary-400'
                      }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-sm sm:text-base mb-1 ${selectedCompany === exp.id
                        ? 'text-white'
                        : 'text-gray-900 dark:text-white'
                      }`}>
                      {exp.company}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium mb-2 ${selectedCompany === exp.id
                        ? 'text-white/90'
                        : 'text-gray-600 dark:text-gray-400'
                      }`}>
                      {exp.title}
                    </p>
                    <div className="space-y-1">
                      <div className={`flex items-center gap-1 text-xs ${selectedCompany === exp.id
                          ? 'text-white/80'
                          : 'text-gray-500 dark:text-gray-500'
                        }`}>
                        <FiCalendar className="w-3 h-3" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${selectedCompany === exp.id
                          ? 'text-white/80'
                          : 'text-gray-500 dark:text-gray-500'
                        }`}>
                        <FiMapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mt-3 text-xs font-medium ${selectedCompany === exp.id
                    ? 'text-white/90'
                    : 'text-primary-600 dark:text-primary-400'
                  }`}>
                  {exp.projects.length} Project{exp.projects.length !== 1 ? 's' : ''}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile experience list */}
        <div className="lg:w-2/3">
          <div className="lg:hidden space-y-8 overflow-y-auto">
            {experiences.map((experience, expIndex) => (
              <motion.div 
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: expIndex * 0.1 }}
                className="space-y-6"
              >
                {/* Company Header */}
                <div className="bg-gradient-to-br from-primary-400 to-primary-500 dark:from-primary-600 dark:to-primary-700 rounded-xl p-4 text-white shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <FaBuilding className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{experience.company}</h3>
                      <p className="text-white/90 font-medium">{experience.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="space-y-6">
                  {experience.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (expIndex * 0.1) + (projectIndex * 0.05) }}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      {/* Project Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                            {project.name.toLowerCase().includes('trove') ? (
                              <FaCommentDots className="w-5 h-5 text-white" />
                            ) : project.name.toLowerCase().includes('finserve') || project.name.toLowerCase().includes('financial') ? (
                              <FaMoneyBillWave className="w-5 h-5 text-white" />
                            ) : project.name.toLowerCase().includes('ford') ? (
                              <FiBarChart className="w-5 h-5 text-white" />
                            ) : project.name.toLowerCase().includes('gloplax') ? (
                              <FiActivity className="w-5 h-5 text-white" />
                            ) : (
                              <FiFolder className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                              {project.name}
                            </h4>
                            <div className="flex items-center gap-2 text-xs bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg flex-shrink-0">
                              <FiCalendar className="w-3 h-3" />
                              <span className="font-medium text-gray-600 dark:text-gray-400">
                                {project.startDate} - {project.endDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="space-y-6">
                        {/* Key Achievements */}
                        <div>
                          <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                            Key Achievements
                          </h5>
                          <ul className="space-y-3">
                            {project.description.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (expIndex * 0.1) + (projectIndex * 0.05) + (idx * 0.02) }}
                                className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 bg-white dark:bg-gray-800 rounded-lg"
                              >
                                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (expIndex * 0.1) + (projectIndex * 0.05) + (idx * 0.01) }}
                                className="skill-badge text-sm px-3 py-1.5"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Divider between experiences (except for the last one) */}
                {expIndex < experiences.length - 1 && (
                  <div className="border-b border-gray-200 dark:border-gray-700 my-8"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop selected experience view */}
          <div className="hidden lg:block overflow-y-auto">
            <AnimatePresence mode="wait">
              {selectedExperience && (
                <motion.div
                  key={selectedCompany}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Projects Grid */}
                  <div className="space-y-6">
                    {selectedExperience.projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: projectIndex * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                      >
                        {/* Project Header */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                              {project.name.toLowerCase().includes('trove') ? (
                                <FaCommentDots className="w-5 h-5 text-white" />
                              ) : project.name.toLowerCase().includes('finserve') || project.name.toLowerCase().includes('financial') ? (
                                <FaMoneyBillWave className="w-5 h-5 text-white" />
                              ) : project.name.toLowerCase().includes('ford') ? (
                                <FiBarChart className="w-5 h-5 text-white" />
                              ) : project.name.toLowerCase().includes('gloplax') ? (
                                <FiActivity className="w-5 h-5 text-white" />
                              ) : (
                                <FiFolder className="w-5 h-5 text-white" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                {project.name}
                              </h4>
                              <div className="flex items-center gap-2 text-xs bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg flex-shrink-0">
                                <FiCalendar className="w-3 h-3" />
                                <span className="font-medium text-gray-600 dark:text-gray-400">
                                  {project.startDate} - {project.endDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="space-y-6">
                          {/* Key Achievements */}
                          <div>
                            <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                              Key Achievements
                            </h5>
                            <ul className="space-y-3">
                              {project.description.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (projectIndex * 0.1) + (idx * 0.05) }}
                                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 bg-white dark:bg-gray-800 rounded-lg"
                                >
                                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="leading-relaxed">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h5 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                              <span className="w-1 h-4 bg-primary-500 rounded-full mr-2"></span>
                              Technologies Used
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: (projectIndex * 0.1) + (idx * 0.03) }}
                                  className="skill-badge text-sm px-3 py-1.5"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;