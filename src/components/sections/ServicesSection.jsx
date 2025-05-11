
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Layers, Home, Palette, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'ventilated-facades',
      icon: <Layers size={48} className="text-primary mb-4" />,
      titleKey: 'services.ventilatedFacades.title',
      descriptionKey: 'services.ventilatedFacades.description',
      imgPlaceholder: 'Modern building with ventilated facade system',
    },
    {
      id: 'roofs',
      icon: <Home size={48} className="text-primary mb-4" />,
      titleKey: 'services.roofs.title',
      descriptionKey: 'services.roofs.description',
      imgPlaceholder: 'Roof construction worker installing new shingles',
    },
    {
      id: 'interior-reforms',
      icon: <Palette size={48} className="text-primary mb-4" />,
      titleKey: 'services.interiorReforms.title',
      descriptionKey: 'services.interiorReforms.description',
      imgPlaceholder: 'Stylish modern living room after renovation',
    },
    {
      id: 'stone-imitation',
      icon: <Briefcase size={48} className="text-primary mb-4" />,
      titleKey: 'services.stoneImitation.title',
      descriptionKey: 'services.stoneImitation.description',
      imgPlaceholder: 'Wall decorated with artificial stone panels',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">{t('services.title')}</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full flex flex-col bg-gray-850 border-gray-700 hover:shadow-primary/30 shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={t(service.titleKey)}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-primary/80 rounded-full text-black">
                     {React.cloneElement(service.icon, { size: 28, className: "text-black" })}
                  </div>
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-semibold text-primary group-hover:text-primary/90 transition-colors">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-400 text-base">{t(service.descriptionKey)}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black transition-all">
                    <Link to={`/services/${service.id}`} target="_blank" rel="noopener noreferrer">
                      {t('button.moreInfo')} <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
