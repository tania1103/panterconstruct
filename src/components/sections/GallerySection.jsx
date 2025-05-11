
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GallerySection = () => {
  const { t } = useTranslation();

  const projects = [
    { titleKey: 'gallery.project1.title', categoryKey: 'gallery.project1.category', imgPlaceholder: 'Sleek modern house with large windows and a ventilated facade' },
    { titleKey: 'gallery.project2.title', categoryKey: 'gallery.project2.category', imgPlaceholder: 'Restored historic building roof with new tiles' },
    { titleKey: 'gallery.project3.title', categoryKey: 'gallery.project3.category', imgPlaceholder: 'Minimalist apartment interior with clean lines and neutral colors' },
    { titleKey: 'gallery.project4.title', categoryKey: 'gallery.project4.category', imgPlaceholder: 'Luxury villa with natural stone imitation cladding' },
    { titleKey: 'gallery.project5.title', categoryKey: 'gallery.project5.category', imgPlaceholder: 'Modern open-plan office interior design' },
    { titleKey: 'gallery.project6.title', categoryKey: 'gallery.project6.category', imgPlaceholder: 'Apartment complex featuring a ceramic ventilated facade' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">{t('gallery.title')}</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-850 border-gray-700 shadow-lg hover:shadow-primary/40 transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <img  
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={t(project.titleKey)}
                    src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                     <Eye size={36} className="text-primary" />
                  </div>
                   <div className="absolute top-2 right-2 bg-primary/80 text-black text-xs font-semibold px-2 py-1 rounded">
                    {t(project.categoryKey)}
                  </div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{t(project.titleKey)}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
