
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import QuoteModal from '@/components/QuoteModal';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navLinks = [
    { href: '#hero', labelKey: 'nav.home' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#entrepreneur', labelKey: 'nav.entrepreneur' },
    { href: '#gallery', labelKey: 'nav.gallery' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/d87ca4a6-4af8-4681-beaa-cb43fa3d13e6/a7b0e0ea1d259cfea154201f46fb36ff.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    if (isOpen) {
      setIsOpen(false);
    }
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };
  
  const handleLogoClick = () => {
    if (isOpen) setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    if (isOpen) setIsOpen(false);
  };


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-gray-900 shadow-lg' : 'bg-transparent' 
        } ${isOpen ? '' : (isScrolled ? 'glassmorphism' : '')}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={handleLogoClick} className="flex items-center focus:outline-none">
              <img src={logoUrl} alt="Panter Construct Logo" className="h-12 sm:h-14 w-12 sm:w-14 rounded-full object-cover" />
            </button>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {t(link.labelKey)}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-3 border-primary text-primary hover:bg-primary hover:text-black"
                onClick={openQuoteModal}
              >
                {t('button.getQuote')}
              </Button>
              <LanguageSwitcher />
            </nav>

            <div className="lg:hidden flex items-center">
              <LanguageSwitcher />
              <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-gray-300 hover:text-primary ml-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900 absolute w-full shadow-xl" // Removed backdrop-blur for full opacity
          >
            <nav className="flex flex-col items-center py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-primary hover:text-black transition-colors w-full text-center"
                >
                  {t(link.labelKey)}
                </button>
              ))}
              <Button 
                size="lg" 
                className="w-11/12 mt-4 bg-primary hover:bg-primary/90 text-black"
                onClick={openQuoteModal}
              >
                {t('button.getQuote')}
              </Button>
              <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700 w-11/12">
                <a href="tel:+34000000000" className="text-gray-400 hover:text-primary"><Phone size={24}/></a>
                <a href="mailto:info@panterconstruct.es" className="text-gray-400 hover:text-primary"><Mail size={24}/></a>
              </div>
            </nav>
          </motion.div>
        )}
      </motion.header>
      <QuoteModal isOpen={isQuoteModalOpen} setIsOpen={setIsQuoteModalOpen} />
    </>
  );
};

export default Header;
