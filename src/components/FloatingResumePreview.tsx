import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiX, FiDownload, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

interface FloatingResumePreviewProps {
  resumeUrl: string;
  fileName?: string;
}

const FloatingResumePreview: React.FC<FloatingResumePreviewProps> = ({ 
  resumeUrl, 
  fileName = "resume.pdf" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const handleDownload = () => {
    let downloadUrl = resumeUrl;
    
    if (resumeUrl.includes('drive.google.com')) {
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

  const getPreviewUrl = () => {
    if (resumeUrl.includes('drive.google.com')) {
      const fileIdMatch = resumeUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 no-print">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col ${
              isFullscreen 
                ? 'fixed inset-4 w-auto h-auto' 
                : 'w-80 sm:w-96 h-72 sm:h-80'
            }`}
          >
            {/* Header */}
            <div className="bg-primary-500 dark:bg-primary-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2">
                <FiFileText className="w-5 h-5 text-white" />
                <h3 className="text-white font-semibold text-sm">Resume Preview</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <FiMinimize2 className="w-4 h-4" />
                  ) : (
                    <FiMaximize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  title="Download Resume"
                >
                  <FiDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    setIsFullscreen(false);
                  }}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  title="Minimize"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="relative flex-1 bg-gray-50 dark:bg-gray-900">
              <div className="absolute inset-0">
                <iframe
                  src={getPreviewUrl()}
                  className="w-full h-full border-0"
                  title="Resume Preview"
                  loading="lazy"
                  onLoad={(e) => {
                    const loadingOverlay = e.currentTarget.parentElement?.nextElementSibling;
                    if (loadingOverlay) {
                      (loadingOverlay as HTMLElement).style.display = 'none';
                    }
                  }}

                  onError={() => setLoadError(true)}
                />
              </div>
              
              {/* Loading/Error overlay */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  {loadError ? (
                    <>
                      <FiFileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PDF Preview Unavailable</p>
                      <button
                        onClick={handleDownload}
                        className="text-primary-500 hover:text-primary-600 text-sm underline"
                      >
                        Download Resume Instead
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Loading Resume...</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Footer with Download Button */}
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 border-t border-gray-200 dark:border-gray-600 flex-shrink-0">
              <button
                onClick={handleDownload}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="bg-primary-500 hover:bg-primary-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group relative"
          >
            <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              View Resume
              <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingResumePreview;