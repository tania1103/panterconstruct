
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Send } from 'lucide-react';

const QuoteModal = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Form data:', formData);

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
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[525px] bg-gray-800 border-gray-700 text-gray-100 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl">{t('quoteModal.title')}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('quoteModal.description')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="quote-name" className="text-gray-300">{t('contact.form.name')}</Label>
            <Input id="quote-name" name="name" type="text" placeholder={t('contact.form.namePlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-primary focus:border-primary" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quote-email" className="text-gray-300">{t('contact.form.email')}</Label>
              <Input id="quote-email" name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-primary focus:border-primary" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
              <Label htmlFor="quote-phone" className="text-gray-300">{t('contact.form.phone')}</Label>
              <Input id="quote-phone" name="phone" type="tel" placeholder={t('contact.form.phonePlaceholder')} className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-primary focus:border-primary" value={formData.phone} onChange={handleInputChange}/>
            </div>
          </div>
          <div>
            <Label htmlFor="quote-subject" className="text-gray-300">{t('contact.form.subject')}</Label>
            <Input id="quote-subject" name="subject" type="text" placeholder={t('contact.form.subjectPlaceholder')} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-primary focus:border-primary" value={formData.subject} onChange={handleInputChange}/>
          </div>
          <div>
            <Label htmlFor="quote-message" className="text-gray-300">{t('contact.form.message')}</Label>
            <Textarea id="quote-message" name="message" placeholder={t('contact.form.messagePlaceholder')} rows={4} required className="mt-1 bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-primary focus:border-primary" value={formData.message} onChange={handleInputChange}/>
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                Cancelar
                </Button>
            </DialogClose>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-black font-semibold">
              {t('contact.form.button.send')} <Send className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
