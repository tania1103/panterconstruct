
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import QuoteModal from '@/components/QuoteModal';
import { useState } from 'react';

const EntrepreneurSupportSection = () => {
  const { t } = useTranslation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const faqs = [
    { questionKey: "entrepreneur.faq1.q", answerKey: "entrepreneur.faq1.a" },
    { questionKey: "entrepreneur.faq2.q", answerKey: "entrepreneur.faq2.a" },
    { questionKey: "entrepreneur.faq3.q", answerKey: "entrepreneur.faq3.a" },
    { questionKey: "entrepreneur.faq4.q", answerKey: "entrepreneur.faq4.a" }
  ];

  return (
    <>
    <section id="entrepreneur" className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <Briefcase size={48} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">{t('entrepreneur.title')}</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('entrepreneur.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{t('entrepreneur.readyTitle')}</h3>
            <p className="text-gray-300 mb-4">
              {t('entrepreneur.readyDesc')}
            </p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start">
                <Lightbulb className="text-primary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>{t('entrepreneur.feature1')}</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-primary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>{t('entrepreneur.feature2')}</span>
              </li>
              <li className="flex items-start">
                <Users className="text-primary mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>{t('entrepreneur.feature3')}</span>
              </li>
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold" onClick={() => setIsQuoteModalOpen(true)}>
                {t('entrepreneur.button.getInfo')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="mt-8">
              <img  
                className="w-full h-auto object-cover rounded-lg shadow-xl"
                alt="Team of construction workers collaborating"
                src="https://images.unsplash.com/photo-1645883448890-da2a70d885ae" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{t('entrepreneur.faqTitle')}</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-gray-200 hover:text-primary text-base sm:text-lg">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm sm:text-base">
                    {t(faq.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
    <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </>
  );
};

export default EntrepreneurSupportSection;
