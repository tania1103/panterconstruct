
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Layers, Home, Palette, Briefcase, ChevronRight } from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';
import { useState } from 'react';

const serviceDetailsData = {
  'ventilated-facades': {
    titleKey: 'services.ventilatedFacades.title',
    descriptionKey: 'services.ventilatedFacades.description',
    longDescriptionKey: 'services.ventilatedFacades.longDescription',
    images: [
      'Modern office building with glass and steel facade',
      'Close-up of ventilated facade panel installation',
      'Residential building with colorful ventilated facade'
    ],
    icon: <Layers size={64} className="text-primary" />,
    features: [
      'Mejora del aislamiento térmico y acústico.',
      'Reducción del consumo energético.',
      'Amplia variedad de acabados y materiales.',
      'Aumento de la vida útil del edificio.',
      'Fácil mantenimiento.'
    ]
  },
  'roofs': {
    titleKey: 'services.roofs.title',
    descriptionKey: 'services.roofs.description',
    longDescriptionKey: 'services.roofs.longDescription',
    images: [
      'Team of roofers working on a new roof installation',
      'Drone view of a newly tiled residential roof',
      'Close-up of different roofing materials'
    ],
    icon: <Home size={64} className="text-primary" />,
    features: [
      'Instalación de cubiertas inclinadas y planas.',
      'Reparación de goteras y filtraciones.',
      'Aislamiento e impermeabilización.',
      'Mantenimiento preventivo y correctivo.',
      'Utilización de materiales de alta calidad.'
    ]
  },
  'interior-reforms': {
    titleKey: 'services.interiorReforms.title',
    descriptionKey: 'services.interiorReforms.description',
    longDescriptionKey: 'services.interiorReforms.longDescription',
    images: [
      'Luxurious modern kitchen after complete renovation',
      'Spacious living room with contemporary design',
      'Elegant bathroom with high-end fixtures'
    ],
    icon: <Palette size={64} className="text-primary" />,
    features: [
      'Diseño de interiores personalizado.',
      'Reformas integrales de viviendas y locales.',
      'Optimización de espacios.',
      'Instalaciones de fontanería, electricidad y climatización.',
      'Acabados de alta calidad.'
    ]
  },
  'stone-imitation': {
    titleKey: 'services.stoneImitation.title',
    descriptionKey: 'services.stoneImitation.description',
    longDescriptionKey: 'services.stoneImitation.longDescription',
    images: [
      'Exterior wall of a house with stone imitation panels',
      'Interior accent wall with textured stone imitation',
      'Samples of different stone imitation finishes'
    ],
    icon: <Briefcase size={64} className="text-primary" />,
    features: [
      'Aspecto natural y estético.',
      'Ligereza y facilidad de instalación.',
      'Resistencia a la intemperie y durabilidad.',
      'Variedad de texturas, colores y formatos.',
      'Aplicable en fachadas e interiores.'
    ]
  }
};

const ensureLongDescription = (t, key, fallbackKey) => {
  const translated = t(key);
  if (translated === key) { 
    return `${t(fallbackKey)} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  }
  return translated;
};


const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const service = serviceDetailsData[serviceId];
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);


  if (!service) {
    return <div className="container mx-auto px-4 py-16 text-center text-xl">Servicio no encontrado.</div>;
  }
  
  const currentLang = i18n.language;
  if (!i18n.exists(service.longDescriptionKey, {lng: currentLang})) {
      if (!i18n.getDataByLanguage(currentLang).translation[service.longDescriptionKey]) {
        i18n.addResources(currentLang, 'translation', {
            [service.longDescriptionKey]: `${t(service.descriptionKey, {lng: currentLang})} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        });
    }
  }


  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <Button variant="outline" onClick={() => navigate("/")} className="mb-8 border-primary text-primary hover:bg-primary hover:text-black">
        <ArrowLeft className="mr-2 h-4 w-4" /> {t('nav.home')}
      </Button>

      <header className="mb-12 text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
          {service.icon}
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">{t(service.titleKey)}</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">{t(service.descriptionKey)}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {service.images.map((imgDesc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="overflow-hidden rounded-lg shadow-xl aspect-video"
          >
            <img 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              alt={`${t(service.titleKey)} - Imagen ${index + 1}`}
             src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" />
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-850 p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Descripción Detallada</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {ensureLongDescription(t, service.longDescriptionKey, service.descriptionKey)}
        </p>
      </div>

      {service.features && service.features.length > 0 && (
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Características Principales</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {service.features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
              >
                <ChevronRight className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
       <div className="mt-12 text-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold" onClick={() => setIsQuoteModalOpen(true)}>
          {t('button.getQuote')}
        </Button>
      </div>
    </motion.div>
    <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </>
  );
};

export default ServiceDetailPage;
