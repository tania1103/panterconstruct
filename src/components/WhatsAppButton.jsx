
import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react'; // Using Phone icon as a placeholder for WhatsApp

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-0 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center"
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,255,0,0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Phone size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
