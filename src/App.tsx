import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import ThemeToggle from './components/ThemeToggle';
import PrintButton from './components/PrintButton';
import AnimatedBackground from './components/AnimatedBackground';
import { portfolioData } from './data/portfolioData';
import FloatingResumePreview from './components/FloatingResumePreview';
import FloatingContactForm from './components/FloatingContactForm';

const App: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Fixed Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 no-print">
        <ThemeToggle /> 
        <PrintButton resumeUrl={portfolioData.resumeUrl} />
      </div>

      {/* Floating Components */}
      <FloatingContactForm contactEmail={portfolioData.contact.email} />
      <FloatingResumePreview
        resumeUrl = {portfolioData.resumeUrl}  
        fileName="Deeparishi_Resume.pdf" 
      />

      {/* Sticky Header */}
      <Header contact={portfolioData.contact} />

      {/* Main Content */}
      <div ref={printRef} className="pt-14 sm:pt-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-16 space-y-4 sm:space-y-6"
        >
          {/* Contact Section */}
          <motion.div id="contact" variants={sectionVariants}>
            <ContactSection contact={portfolioData.contact} />
          </motion.div>

          {/* Experience Section */}
          <motion.div id="experience" variants={sectionVariants}>
            <ExperienceSection experiences={portfolioData.experience} />
          </motion.div>

          {/* Skills Section */}
          <motion.div id="skills" variants={sectionVariants}>
            <SkillsSection skills={portfolioData.skills} />
          </motion.div>

          {/* Page Break for Print */}
          <div className="print-break"></div>

          {/* Certifications Section */}
          <motion.div id="certifications" variants={sectionVariants}>
            <CertificationsSection certifications={portfolioData.certifications} />
          </motion.div>

          {/* Education Section */}
          <motion.div id="education" variants={sectionVariants}>
            <EducationSection education={portfolioData.education} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;