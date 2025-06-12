import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useReactToPrint } from 'react-to-print';

interface PrintButtonProps {
  printRef: React.RefObject<HTMLDivElement>;
}

const PrintButton: React.FC<PrintButtonProps> = ({ printRef }) => {
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Deeparishi_A_Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
        .no-print {
          display: none !important;
        }
        .print-break {
          page-break-before: always;
        }
      }
    `,
  });

  return (
    <motion.button
      onClick={handlePrint}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title="Download as PDF"
    >
      <FiDownload className="w-5 h-5" />
    </motion.button>
  );
};

export default PrintButton;