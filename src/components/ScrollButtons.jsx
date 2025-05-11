
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const ScrollButtons = () => {
  const { t } = useTranslation();
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setShowScrollUp(scrollY > 200);
    setShowScrollDown(scrollY + windowHeight < documentHeight - 150); // Adjust to hide earlier
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-[calc(3.5rem+1.5rem+0.5rem)] right-6 z-40 flex flex-col space-y-2"> {/* bottom-6 (whatsapp) + height (whatsapp) + space */}
      {showScrollDown && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToBottom}
            variant="outline"
            size="icon"
            className="bg-gray-700/80 text-gray-200 hover:bg-primary hover:text-black border-primary/50 backdrop-blur-sm w-12 h-12 rounded-full"
            aria-label={t('scroll.down')}
          >
            <ArrowDown size={20} />
          </Button>
        </motion.div>
      )}
      {showScrollUp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="bg-gray-700/80 text-gray-200 hover:bg-primary hover:text-black border-primary/50 backdrop-blur-sm w-12 h-12 rounded-full"
            aria-label={t('scroll.up')}
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ScrollButtons;
