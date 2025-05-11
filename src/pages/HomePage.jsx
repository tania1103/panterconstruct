
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import EntrepreneurSupportSection from '@/components/sections/EntrepreneurSupportSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const HomePage = () => {
  const { t } = useTranslation(); // To use translations if needed directly in HomePage

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-x-hidden"
    >
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EntrepreneurSupportSection />
      <GallerySection />
      <ContactFormSection />
    </motion.div>
  );
};

export default HomePage;
