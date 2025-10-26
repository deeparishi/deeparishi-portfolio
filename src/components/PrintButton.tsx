import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

interface PrintButtonProps {
  resumeUrl: string;
  fileName?: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ 
  resumeUrl, 
  fileName = "Deeparishi_Resume.pdf" 
}) => {
  // Google Analytics event tracking
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const handleDownload = () => {
    trackEvent('resume_downloaded', {
      file_name: fileName
    });
    // Convert Google Drive view link to download link (same logic as FloatingResumePreview)
    let downloadUrl = resumeUrl;
    
    if (resumeUrl.includes('drive.google.com')) {
      // Extract file ID from Google Drive URL
      const fileIdMatch = resumeUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title="Download Resume"
    >
      <FiDownload className="w-5 h-5" />
    </motion.button>
  );
};

export default PrintButton;