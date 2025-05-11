
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollButtons from '@/components/ScrollButtons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function App() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30 text-gray-100">
      <Header />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+34000000000" message={t('whatsapp.message')} />
      <ScrollButtons />
    </div>
  );
}

export default App;
