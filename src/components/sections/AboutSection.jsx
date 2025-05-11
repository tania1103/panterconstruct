
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import QuoteModal from '@/components/QuoteModal';
import { useState } from 'react';

const AboutSection = () => {
  const { t } = useTranslation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const stats = [
    { value: "10+", labelKey: "about.stat1.label" },
    { value: "200+", labelKey: "about.stat2.label" },
    { value: "98%", labelKey: "about.stat3.label" },
    { value: "15+", labelKey: "about.stat4.label" },
  ];

  return (
    <>
    <section id="about" className="py-16 md:py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t('about.p2')}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold" onClick={() => setIsQuoteModalOpen(true)}>
              {t('about.button.contactUs')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg glassmorphism">
              <Target size={36} className="text-primary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('about.mission.title')}</h3>
              <p className="text-gray-400 text-sm">
                {t('about.mission.desc')}
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg glassmorphism">
              <Eye size={36} className="text-primary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('about.vision.title')}</h3>
              <p className="text-gray-400 text-sm">
                {t('about.vision.desc')}
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg glassmorphism sm:col-span-2">
              <Award size={36} className="text-primary mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">{t('about.values.title')}</h3>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>{t('about.values.item1')}</li>
                <li>{t('about.values.item2')}</li>
                <li>{t('about.values.item3')}</li>
                <li>{t('about.values.item4')}</li>
                <li>{t('about.values.item5')}</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </>
  );
};

export default AboutSection;
