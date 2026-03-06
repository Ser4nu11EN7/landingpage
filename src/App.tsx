import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { motion } from 'motion/react';

// --- Shared Icons ---
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.36-.99.54-1.41.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.34-.48.92-.74 3.62-1.58 6.03-2.61 7.24-3.12 3.44-1.43 4.15-1.68 4.62-1.69.1 0 .32.02.46.12.12.09.16.22.17.34-.01.05-.01.16-.02.26z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Strict Brand Logo Component ---
const BrandLogo = ({ size = "small", withBorder = false }: { size?: "small" | "large", withBorder?: boolean }) => {
  const borderClass = withBorder ? "border border-white/20" : "";
  if (size === "large") {
    return (
      <div className={`w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 shadow-lg ${borderClass}`}>
        <div className="w-4 h-4 border-[1.5px] border-white rounded-full"></div>
      </div>
    );
  }
  return (
    <div className={`w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0 ${borderClass}`}>
      <div className="w-3.5 h-3.5 border-[1.5px] border-white rounded-full"></div>
    </div>
  );
};

// --- Header ---
const Header = () => {
  return (
    <header className="px-6 py-4 flex items-center justify-between z-50 text-white">
      <div className="flex items-center">
        <BrandLogo size="small" />
      </div>
      <nav className="flex items-center space-x-6 text-[15px] font-medium text-gray-300">
        <a href="#" className="transition-colors hover:text-white">Creators</a>
        <a href="#" className="transition-colors hover:text-white">Dashboard</a>
        <a href="#" className="transition-colors hover:text-white">Sign Out</a>
        <div className="flex items-center space-x-1 cursor-pointer transition-colors ml-2 hover:text-white">
          <span className="text-[11px] font-bold tracking-wider text-white/50">EN</span>
          <span>English</span>
          <ChevronDown className="w-4 h-4 ml-0.5 text-white/50" />
        </div>
      </nav>
    </header>
  );
};

// --- Contact Icons Component ---
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

// --- Starfield Background Component ---
const Starfield = ({ opacity = 0.5 }: { opacity?: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div 
      className="absolute inset-0" 
      animate={{ backgroundPosition: ["0px 0px", "200px 200px"] }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: 'radial-gradient(1px 1px at 10% 10%, white, transparent), radial-gradient(1.5px 1.5px at 20% 30%, white, transparent), radial-gradient(2px 2px at 40% 70%, white, transparent), radial-gradient(1px 1px at 60% 20%, white, transparent), radial-gradient(1.5px 1.5px at 80% 80%, white, transparent), radial-gradient(2px 2px at 90% 40%, white, transparent)',
        backgroundSize: '200px 200px',
        opacity: opacity
      }}
    />
    <motion.div 
      className="absolute inset-0" 
      animate={{ backgroundPosition: ["0px 0px", "350px 350px"] }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: 'radial-gradient(1px 1px at 30% 50%, white, transparent), radial-gradient(2px 2px at 70% 10%, white, transparent), radial-gradient(1.5px 1.5px at 50% 90%, white, transparent), radial-gradient(1px 1px at 15% 80%, white, transparent)',
        backgroundSize: '350px 350px',
        opacity: opacity * 0.8
      }}
    />
    <motion.div 
      className="absolute inset-0" 
      animate={{ backgroundPosition: ["0px 0px", "500px 500px"] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: 'radial-gradient(2px 2px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 20%, white, transparent), radial-gradient(1.5px 1.5px at 20% 80%, white, transparent)',
        backgroundSize: '500px 500px',
        opacity: opacity * 0.6
      }}
    />
  </div>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#02040A] text-white flex flex-col relative overflow-hidden">
      <Starfield opacity={0.6} />
      <Header />
      <main className="relative flex-grow flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center flex-col">
          <div className="absolute w-[1000px] h-[500px] bg-[#1e1b4b] opacity-40 blur-[120px] rounded-full"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10 blur-[2px]"></div>
          <div className="absolute w-full h-[60px] bg-gradient-to-r from-transparent via-[#172554] to-transparent opacity-30 blur-[40px]"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-[900px] mx-auto -translate-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mb-10">
            <BrandLogo size="large" withBorder />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[32px] sm:text-[44px] md:text-[52px] font-semibold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 text-balance text-center">
            Receive exclusive information on seller deals for world-class pre-IPO unicorns.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[18px] sm:text-[22px] text-[#8a939f] mb-14 font-light tracking-wide text-center">
            Such as <span className="text-white font-medium">SpaceX</span> and <span className="text-white font-medium">ByteDance</span> <span className="text-gray-600 text-[16px] sm:text-[18px]">(TikTok’s parent company)</span>.
          </motion.p>
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 48 }} transition={{ delay: 0.3 }} className="w-[1px] bg-gradient-to-b from-white/20 to-transparent mb-12"></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col items-center">
            <ContactIcons />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
