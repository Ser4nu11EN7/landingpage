import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
// This ensures the logo NEVER changes its colors or style across any theme.
// It is ALWAYS a black background with a white circle outline.
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

// --- Shared Header ---
const SharedHeader = ({ theme }: { theme: 'dark' | 'light' }) => {
  const isDark = theme === 'dark';
  return (
    <header className={`px-6 py-4 flex items-center justify-between z-50 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="flex items-center">
        <BrandLogo size="small" />
      </div>
      <nav className={`flex items-center space-x-6 text-[15px] font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>创作者</a>
        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>仪表盘</a>
        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>退出</a>
        <div className={`flex items-center space-x-1 cursor-pointer transition-colors ml-2 ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>
          <span className={`text-[11px] font-bold tracking-wider ${isDark ? 'text-white/50' : 'text-black/50'}`}>CN</span>
          <span>简体中文</span>
          <ChevronDown className={`w-4 h-4 ml-0.5 ${isDark ? 'text-white/50' : 'text-black/50'}`} />
        </div>
      </nav>
    </header>
  );
};

// --- Contact Icons Component ---
type Variant = 'dark' | 'light' | 'fintech' | 'wealth' | 'swiss' | 'carbon' | 'obsidian';

const ContactIcons = ({ variant }: { variant: Variant }) => {
  const styles = {
    dark: {
      container: "space-x-6 sm:space-x-8",
      base: "w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.03] border border-white/10 text-white/60",
      email: "hover:bg-[#EA4335]/10 hover:border-[#EA4335]/40 hover:text-[#EA4335] hover:shadow-[0_0_30px_rgba(234,67,53,0.25)] hover:-translate-y-1",
      tg: "hover:bg-[#2AABEE]/10 hover:border-[#2AABEE]/40 hover:text-[#2AABEE] hover:shadow-[0_0_30px_rgba(42,171,238,0.25)] hover:-translate-y-1",
      wa: "hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:text-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:-translate-y-1"
    },
    light: {
      container: "space-x-6",
      base: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1a1a1a] text-white shadow-xl",
      email: "hover:bg-[#EA4335]",
      tg: "hover:bg-[#2AABEE]",
      wa: "hover:bg-[#25D366]"
    },
    fintech: {
      container: "space-x-4",
      base: "w-14 h-14 rounded-2xl bg-white text-gray-400 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100",
      email: "hover:text-[#EA4335] hover:shadow-[0_10px_30px_rgba(234,67,53,0.2)] hover:-translate-y-1 hover:border-[#EA4335]/30",
      tg: "hover:text-[#2AABEE] hover:shadow-[0_10px_30px_rgba(42,171,238,0.2)] hover:-translate-y-1 hover:border-[#2AABEE]/30",
      wa: "hover:text-[#25D366] hover:shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:-translate-y-1 hover:border-[#25D366]/30"
    },
    wealth: {
      container: "space-x-8",
      base: "w-14 h-14 rounded-full border border-[#D4AF37]/30 text-[#D4AF37]/70",
      email: "hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.3)]",
      tg: "hover:bg-[#D4AF37] hover:text-[#0B1014] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
      wa: "hover:bg-[#D4AF37] hover:text-[#0B1014] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
    },
    swiss: {
      container: "space-x-4",
      base: "w-16 h-16 bg-black text-white",
      email: "hover:bg-[#EA4335]",
      tg: "hover:bg-[#2AABEE]",
      wa: "hover:bg-[#25D366]"
    },
    carbon: {
      container: "space-x-3",
      base: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-transparent text-zinc-400",
      email: "hover:bg-zinc-800 hover:text-[#EA4335]",
      tg: "hover:bg-zinc-800 hover:text-[#2AABEE]",
      wa: "hover:bg-zinc-800 hover:text-[#25D366]"
    },
    obsidian: {
      container: "space-x-4",
      base: "w-14 h-14 sm:w-16 sm:h-16 rounded-none border-2 border-[#333] bg-black text-white",
      email: "hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]",
      tg: "hover:bg-white hover:text-black hover:border-white",
      wa: "hover:bg-white hover:text-black hover:border-white"
    }
  }[variant];

  return (
    <div className={`flex items-center ${styles.container}`}>
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

// --- Design 1: Dark Premium ---
const DarkPremium = () => (
  <div className="min-h-screen bg-[#050505] text-white flex flex-col">
    <SharedHeader theme="dark" />
    <main className="relative flex-grow flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center flex-col">
        <div className="absolute w-[1000px] h-[500px] bg-[#1a2332] opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10 blur-[2px]"></div>
        <div className="absolute w-full h-[60px] bg-gradient-to-r from-transparent via-[#4a6b9c] to-transparent opacity-10 blur-[30px]"></div>
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
          <ContactIcons variant="dark" />
        </motion.div>
      </div>
    </main>
  </div>
);

// --- Design 2: Editorial Light ---
const EditorialLight = () => (
  <div className="min-h-screen bg-[#F5F2ED] text-[#1a1a1a] flex flex-col">
    <SharedHeader theme="light" />
    <main className="flex-grow flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="relative z-10 max-w-[900px] mx-auto -translate-y-8 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <BrandLogo size="large" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-[44px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-tight text-[#1a1a1a] mb-8 text-balance">
          Receive exclusive information on seller deals for world-class <span className="italic text-[#8c7b64]">pre-IPO unicorns.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[18px] sm:text-[24px] text-[#666] mb-16 font-light tracking-wide">
          Such as <span className="text-[#1a1a1a] font-medium">SpaceX</span> and <span className="text-[#1a1a1a] font-medium">ByteDance</span> <span className="text-[#999] text-[16px] sm:text-[18px] italic">(TikTok’s parent company)</span>.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <ContactIcons variant="light" />
        </motion.div>
      </div>
    </main>
  </div>
);

// --- Design 3: Modern Fintech ---
const ModernFintech = () => (
  <div className="min-h-screen bg-[#FAFAFA] text-gray-900 flex flex-col">
    <SharedHeader theme="light" />
    <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-10">
          <BrandLogo size="large" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 leading-tight">
          Receive exclusive information on seller deals for world-class pre-IPO unicorns.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          Such as <span className="text-gray-900 font-medium">SpaceX</span> and <span className="text-gray-900 font-medium">ByteDance</span> <span className="text-gray-400">(TikTok’s parent company)</span>.
        </p>
        <div className="flex justify-center">
          <ContactIcons variant="fintech" />
        </div>
      </motion.div>
    </main>
  </div>
);

// --- Design 4: Wealth Management ---
const WealthManagement = () => (
  <div className="min-h-screen bg-[#0B1014] text-[#E5E7EB] flex flex-col">
    <SharedHeader theme="dark" />
    <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-10">
          <BrandLogo size="large" withBorder />
        </div>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
        <h1 className="font-serif text-3xl md:text-5xl text-[#F9FAFB] mb-8 leading-snug tracking-wide">
          Receive exclusive information on seller deals for world-class pre-IPO unicorns.
        </h1>
        <p className="text-[#9CA3AF] text-lg mb-14 font-light tracking-widest uppercase text-sm">
          Including <span className="text-[#D4AF37]">SpaceX</span> & <span className="text-[#D4AF37]">ByteDance</span>
        </p>
        <div className="flex justify-center">
          <ContactIcons variant="wealth" />
        </div>
      </motion.div>
    </main>
  </div>
);

// --- Design 5: Swiss Minimal ---
const SwissMinimal = () => (
  <div className="min-h-screen bg-white text-black flex flex-col">
    <SharedHeader theme="light" />
    <main className="flex-grow flex flex-col justify-center px-8 md:px-24">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-5xl">
        <div className="mb-12">
          <BrandLogo size="large" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 text-balance">
          Receive exclusive information on seller deals for world-class pre-IPO unicorns.
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 font-medium mb-16">
          Such as <span className="text-black">SpaceX</span> and <span className="text-black">ByteDance</span>.
        </p>
        <div className="flex">
          <ContactIcons variant="swiss" />
        </div>
      </motion.div>
    </main>
  </div>
);

// --- Design 6: Carbon Executive (New) ---
const CarbonExecutive = () => (
  <div className="min-h-screen bg-[#09090B] text-zinc-100 flex flex-col">
    <SharedHeader theme="dark" />
    <main className="flex-grow flex flex-col items-center justify-center px-4 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-10">
          <BrandLogo size="large" withBorder />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 leading-tight">
          Receive exclusive information on seller deals for world-class pre-IPO unicorns.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-12 font-light max-w-2xl">
          Such as <span className="text-zinc-200 font-medium">SpaceX</span> and <span className="text-zinc-200 font-medium">ByteDance</span> <span className="text-zinc-500">(TikTok’s parent company)</span>.
        </p>
        <div className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-2xl">
          <ContactIcons variant="carbon" />
        </div>
      </motion.div>
    </main>
  </div>
);

// --- Design 7: Obsidian Edge ---
const ObsidianEdge = () => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <SharedHeader theme="dark" />
    <main className="flex-grow flex flex-col justify-center px-6 md:px-16 relative z-10">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-5xl w-full mx-auto border-l-4 border-white pl-8 md:pl-12 py-4">
        <div className="mb-10">
          <BrandLogo size="large" withBorder />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[1]">
          Receive exclusive information on seller deals for world-class pre-IPO unicorns.
        </h1>
        <p className="text-[#888] text-xl md:text-2xl mb-16 font-mono uppercase tracking-widest">
          // SpaceX & ByteDance
        </p>
        <div className="flex">
          <ContactIcons variant="obsidian" />
        </div>
      </motion.div>
    </main>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    'Dark Premium', 
    'Editorial Light', 
    'Modern Fintech', 
    'Wealth Management', 
    'Swiss Minimal',
    'Carbon Executive',
    'Obsidian Edge'
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">
        {activeTab === 0 && <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><DarkPremium /></motion.div>}
        {activeTab === 1 && <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><EditorialLight /></motion.div>}
        {activeTab === 2 && <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><ModernFintech /></motion.div>}
        {activeTab === 3 && <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><WealthManagement /></motion.div>}
        {activeTab === 4 && <motion.div key="4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><SwissMinimal /></motion.div>}
        {activeTab === 5 && <motion.div key="5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><CarbonExecutive /></motion.div>}
        {activeTab === 6 && <motion.div key="6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 w-full h-full"><ObsidianEdge /></motion.div>}
      </AnimatePresence>

      {/* Tab Switcher - Fully scrollable row */}
      <div className="fixed bottom-6 left-0 right-0 z-[100] px-4 flex justify-center pointer-events-none">
        <div 
          className="flex items-center gap-2 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto max-w-full overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {tabs.map((name, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === i 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
