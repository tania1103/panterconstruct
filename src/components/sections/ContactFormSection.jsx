
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, MailCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactFormSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    
    const mailtoLink = `mailto:info@panterconstruct.es?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    toast({
      title: t('contact.toast.messageSent'),
      description: t('contact.toast.messageSentDesc'),
      variant: "default",
      className: "bg-green-600 text-white border-green-700"
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast({
        title: t('contact.toast.error'),
        description: t('contact.toast.invalidEmail'),
        variant: "destructive",
      });
      return;
    }
    console.log('Newsletter subscription:', newsletterEmail);
    localStorage.setItem('newsletter_subscription', newsletterEmail);
    toast({
      title: t('contact.toast.subscribeSuccess'),
      description: t('contact.toast.subscribeSuccessDesc', { email: newsletterEmail }),
      variant: "default",
      className: "bg-green-600 text-white border-green-700"
    });
    setNewsletterEmail('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">{t('contact.title')}</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-6 md:p-8 bg-gray-800 rounded-xl shadow-xl glassmorphism"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{t('contact.infoTitle')}</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center"><MapPin className="mr-3 h-5 w-5 text-primary" /> {t('contact.address')}</p>
                <p className="flex items-center"><Phone className="mr-3 h-5 w-5 text-primary" /> <a href={`tel:${t('contact.phone')}`} className="hover:text-primary">{t('contact.phone')}</a></p>
                <p className="flex items-center"><Mail className="mr-3 h-5 w-5 text-primary" /> <a href={`mailto:${t('contact.email')}`} className="hover:text-primary">{t('contact.email')}</a></p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">{t('contact.hoursTitle')}</h3>
              <p className="text-gray-300">{t('contact.hoursLine1')}</p>
              <p className="text-gray-300">{t('contact.hoursLine2')}</p>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">{t('contact.newsletterTitle')}</h3>
              <p className="text-gray-400 text-sm mb-3">{t('contact.newsletterDesc')}</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="bg-gray-700 border-gray-600 placeholder-gray-500 text-white"
                  value={newsletterEmail}
                  onChange={handleNewsletterChange}
                  required
                />
                <Button type="submit" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black whitespace-nowrap">
                  <MailCheck className="mr-2 h-4 w-4" /> {t('contact.button.subscribe')}
                </Button>
              </form>
            </div>
             <div className="pt-8 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Ubicación</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.15888,41.3800,2.16888,41.3900&layer=mapnik&marker=41.385,2.16388"
                    width="100%"
                    height="300"
                    style={{ border:0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Panter Construct Location"
                ></iframe>
                </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 p-6 md:p-8 bg-gray-800 rounded-xl shadow-xl glassmorphism"
          >
            <div>
              <Label htmlFor="name" className="text-gray-300">{t('contact.form.name')}</Label>
              <Input id="name" name="name" type="text" placeholder={t('contact.form.namePlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-gray-300">{t('contact.form.email')}</Label>
                <Input id="email" name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white" value={formData.email} onChange={handleInputChange}/>
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300">{t('contact.form.phone')}</Label>
                <Input id="phone" name="phone" type="tel" placeholder={t('contact.form.phonePlaceholder')} className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white" value={formData.phone} onChange={handleInputChange}/>
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="text-gray-300">{t('contact.form.subject')}</Label>
              <Input id="subject" name="subject" type="text" placeholder={t('contact.form.subjectPlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white" value={formData.subject} onChange={handleInputChange}/>
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-300">{t('contact.form.message')}</Label>
              <Textarea id="message" name="message" placeholder={t('contact.form.messagePlaceholder')} rows={5} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white" value={formData.message} onChange={handleInputChange}/>
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
                {t('contact.form.button.send')} <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
