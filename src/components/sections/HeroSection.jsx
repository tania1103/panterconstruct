
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import QuoteModal from '@/components/QuoteModal'; 
import { useState } from 'react'; 

const HeroSection = () => {
  const { t } = useTranslation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); 

  const handleRequestQuoteClick = () => {
    setIsQuoteModalOpen(true);
  };
  
  const handleOurServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover"
          alt="Modern building facade"
          src="https://images.unsplash.com/photo-1648363079170-238a8273930d" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block">{t('hero.mainTitle')}</span>
            <span className="block text-primary mt-2">{t('hero.subTitle')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={handleRequestQuoteClick} 
            >
                {t('hero.button.requestQuote')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={handleOurServicesClick}
            >
                {t('hero.button.ourServices')}
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, staggerChildren: 0.2 }}
        >
          {[
            { icon: <Award size={36} className="text-primary" />, titleKey: "hero.feature1.title", descriptionKey: "hero.feature1.desc" },
            { icon: <Users size={36} className="text-primary" />, titleKey: "hero.feature2.title", descriptionKey: "hero.feature2.desc" },
            { icon: <Home size={36} className="text-primary" />, titleKey: "hero.feature3.title", descriptionKey: "hero.feature3.desc" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-xl glassmorphism hover:shadow-primary/30 shadow-lg transition-shadow"
              variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t(item.titleKey)}</h3>
              <p className="text-gray-400 text-sm">{t(item.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} /> 
    </>
  );
};

export default HeroSection;
