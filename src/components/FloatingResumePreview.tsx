import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiX, FiDownload, FiMaximize2, FiMinimize2, FiZoomIn, FiZoomOut, FiRefreshCw } from 'react-icons/fi';

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
  const [zoom, setZoom] = useState(125);

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
    link.target = '_blank';
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
    // Add zoom parameter and enable toolbar for better PDF viewing
    return `${resumeUrl}#view=FitH&zoom=${zoom}&toolbar=1`;
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleResetZoom = () => {
    setZoom(125);
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
                : 'w-[90vw] sm:w-[600px] h-[80vh] sm:h-[700px]'
            }`}
          >
            {/* Header */}
            <div className="bg-primary-500 dark:bg-primary-600 px-3 py-2.5 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2">
                <FiFileText className="w-4 h-4 text-white" />
                <h3 className="text-white font-semibold text-sm">Resume Preview</h3>
                <span className="text-white/80 text-xs font-mono bg-white/10 px-2 py-0.5 rounded">
                  {zoom}%
                </span>
              </div>
              <div className="flex items-center space-x-0.5">
                {/* Zoom Controls */}
                <button
                  onClick={handleZoomOut}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom Out (Ctrl + -)"
                  disabled={zoom <= 50}
                >
                  <FiZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
                  title="Reset Zoom (100%)"
                >
                  <FiRefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom In (Ctrl + +)"
                  disabled={zoom >= 200}
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
                
                <div className="w-px h-5 bg-white/30 mx-1.5"></div>
                
                {/* Other Controls */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
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
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
                  title="Download Resume"
                >
                  <FiDownload className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    setIsFullscreen(false);
                    setZoom(125);
                  }}
                  className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
                  title="Minimize"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="relative flex-1 bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <iframe
                src={getPreviewUrl()}
                className="w-full h-full border-0"
                title="Resume Preview"
                loading="lazy"
                onLoad={(e) => {
                  const loadingOverlay = e.currentTarget.parentElement?.querySelector('.loading-overlay');
                  if (loadingOverlay) {
                    (loadingOverlay as HTMLElement).style.display = 'none';
                  }
                }}
                onError={() => setLoadError(true)}
              />
              
              {/* Loading/Error overlay */}
              <div className="loading-overlay absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  {loadError ? (
                    <>
                      <FiFileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                        PDF Preview Unavailable
                      </p>
                      <button
                        onClick={handleDownload}
                        className="text-primary-500 hover:text-primary-600 text-sm underline pointer-events-auto"
                      >
                        Download Resume Instead
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Loading Resume...</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2.5 border-t border-gray-200 dark:border-gray-600 flex-shrink-0 flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Links open in new tab
              </p>
              <button
                onClick={handleDownload}
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2 shadow-sm"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download</span>
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
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              View Resume
              <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingResumePreview;