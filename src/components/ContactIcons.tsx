import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { TelegramIcon, WhatsAppIcon } from './Icons';

const ContactIcons = () => {
  const styles = {
    base: "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.03] border border-white/10 text-white/60",
    email: "hover:bg-[#EA4335]/10 hover:border-[#EA4335]/40 hover:text-[#EA4335] hover:shadow-[0_0_30px_rgba(234,67,53,0.25)] hover:-translate-y-1",
    tg: "hover:bg-[#2AABEE]/10 hover:border-[#2AABEE]/40 hover:text-[#2AABEE] hover:shadow-[0_0_30px_rgba(42,171,238,0.25)] hover:-translate-y-1",
    wa: "hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:text-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:-translate-y-1"
  };

  return (
    <div className="flex items-center space-x-6 sm:space-x-8">
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:contact@example.com" className={`group transition-all duration-300 flex items-center justify-center ${styles.base} ${styles.email}`}>
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://t.me/example" target="_blank" rel="noopener noreferrer" className={`group transition-all duration-300 flex items-center justify-center ${styles.base} ${styles.tg}`}>
        <TelegramIcon className="w-5 h-5 sm:w-6 sm:h-6 translate-x-[-1px] translate-y-[1px]" />
      </motion.a>
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={`group transition-all duration-300 flex items-center justify-center ${styles.base} ${styles.wa}`}>
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
    </div>
  );
};

export default ContactIcons;
