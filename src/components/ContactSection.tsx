import React from "react";
import { motion } from "framer-motion";
import { ContactInfo } from "../data/portfolioData";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiCode,
} from "react-icons/fi";

interface ContactSectionProps {
  contact: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  // Google Analytics event tracking
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const contactItems = [
    {
      icon: FiMail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    { icon: FiMapPin, label: "Location", value: contact.location, href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, label: "GitHub", href: contact.github },
    { icon: FiLinkedin, label: "LinkedIn", href: contact.linkedin },
    { icon: FiCode, label: "LeetCode", href: contact.leetcode },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-4 sm:p-5"
    >
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {contact.name}
        </h1>
        <p className="text-md text-primary-600 dark:text-primary-400 font-medium mb-3">
          {contact.title}
        </p>
        <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full mb-3"></div>

        {/* Profile Summary */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Profile Summary
          </h3>
          <ul className="list-disc ml-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {contact.profileSummary.map((point, index) => (
              <li
                key={index}
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Contact Information */}
        <div className="lg:col-span-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={() => trackEvent('contact_info_clicked', { type: item.label })}
                      className="text-sm text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-900 dark:text-white font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            Connect With Me
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('social_link_clicked', { platform: link.label })}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 group"
                title={link.label}
              >
                <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
