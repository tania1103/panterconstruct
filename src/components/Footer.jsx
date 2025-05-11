
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/d87ca4a6-4af8-4681-beaa-cb43fa3d13e6/a7b0e0ea1d259cfea154201f46fb36ff.jpg";

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t-2 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <button onClick={handleLogoClick} className="inline-block mb-4 focus:outline-none">
              <img src={logoUrl} alt="Panter Construct Logo" className="h-16 w-16 rounded-full object-cover" />
            </button>
            <p className="text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-gray-200 mb-4">{t('footer.quickLinks')}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-gray-200 mb-4">{t('footer.contactInfo')}</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-primary" />
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary" />
                <a href={`tel:${t('contact.phone')}`} className="hover:text-primary transition-colors">{t('contact.phone')}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-primary" />
                <a href={`mailto:${t('contact.email')}`} className="hover:text-primary transition-colors">{t('contact.email')}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-gray-200 mb-4">{t('footer.followUs')}</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
          <p className="mt-1">{t('footer.developedBy')} <span className="text-primary">&hearts;</span> por Tatiana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
