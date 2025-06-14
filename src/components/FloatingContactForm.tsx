import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiX,
  FiSend,
  FiMessageCircle,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { Integration } from "../data/portfolioData";

const FloatingContactForm: React.FC<{}> = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "redirecting"
  >("idle");
  
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {


      const templateParamsToOwner = {
        to_email: Integration.OWNER_EMAIL,
        title: formData.title || "New Contact from Portfolio",
        name: formData.name,
        time: new Date().toLocaleString(),
        message:
          formData.message +
          "  \n And Recruiter's mail id is " +
          formData.email +
          ".\n\n",
      };

      const templateParamsToRecruiter = {
        email: formData.email,
        name: formData.name,
        title: formData.title || "New Contact from Portfolio",
      };

      await emailjs.send(
        Integration.SERVICE_ID,
        Integration.TEMPLATE_TO_OWNER,
        templateParamsToOwner
      );

      await emailjs.send(
        Integration.SERVICE_ID,
        Integration.TEMPLATE_TO_RECRUITER,
        templateParamsToRecruiter
      );

      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({ name: "", email: "", title: "", message: "" });
        setIsSubmitting(false);
        setSubmitStatus("idle");
        setIsExpanded(false);
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("redirecting");
      setShowErrorPopup(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setShowErrorPopup(false);
        
        // Create mailto link with form data
        const subject = encodeURIComponent(formData.title || "Contact from Portfolio");
        const body = encodeURIComponent(
          `Hi Deeparishi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:${Integration.OWNER_EMAIL}?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        // Reset form and close
        setTimeout(() => {
          setFormData({ name: "", email: "", title: "", message: "" });
          setSubmitStatus("idle");
          setIsExpanded(false);
        }, 1000);
      }, 5000);
    }
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 no-print ${
        isExpanded ? "z-[60]" : "z-50"
      }`}
    >
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-72 sm:w-80 max-h-96 overflow-hidden z-[60]"
          >
            {/* Header */}
            <div className="bg-primary-500 dark:bg-primary-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiMail className="w-5 h-5 text-white" />
                <h3 className="text-white font-semibold text-sm">Contact Me</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <div className="p-4 max-h-80 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Subject *"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-2 ${
                    submitStatus === "success"
                      ? "bg-green-500 hover:bg-green-600"
                      : submitStatus === "error" || submitStatus === "redirecting"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitStatus === "success" ? (
                    <>
                      <FiCheck className="w-4 h-4" />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <FiAlertCircle className="w-4 h-4" />
                      <span>Try Again</span>
                    </>
                  ) : submitStatus === "redirecting" ? (
                    <>
                      <FiMail className="w-4 h-4" />
                      <span>Redirecting...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Error Message */}
                {submitStatus === "error" && errorMessage && (
                  <div className="text-red-500 text-xs mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    {errorMessage}
                  </div>
                )}

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="text-green-600 dark:text-green-400 text-xs mt-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    Thank you! Your message has been sent successfully. You'll
                    receive a confirmation email shortly.
                  </div>
                )}
              </form>
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
            <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />

            {/* Tooltip */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[60]">
              Contact Me
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Error Popup */}
      <AnimatePresence>
        {showErrorPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[70] bg-white dark:bg-gray-800 border border-red-200 dark:border-red-800 rounded-lg shadow-2xl p-4 max-w-sm mx-4"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <FiAlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Email Service Unavailable
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  Sorry, something went wrong while sending the email. You're being redirected to your email app to send the message.
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-red-500 h-1.5 rounded-full animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingContactForm;
