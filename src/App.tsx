import React from 'react';
import { motion } from 'motion/react';
import Starfield from './components/Starfield';
import Header from './components/Header';
import BrandLogo from './components/BrandLogo';
import ContactIcons from './components/ContactIcons';

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
        <div className="relative z-10 flex flex-col items-center w-full max-w-[1600px] mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="mb-6 sm:mb-8 shrink-0">
            <BrandLogo size="large" withBorder />
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col items-center justify-center w-full mb-4 sm:mb-6 shrink-0">
            <h1 className="text-[21vw] sm:text-[16.5vw] lg:text-[195px] xl:text-[240px] font-bold tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 text-center w-full pb-4 sm:pb-8">
              SpaceX<br />ByteDance
            </h1>
            <p className="text-[6.5vw] sm:text-[4.5vw] lg:text-[52px] xl:text-[60px] text-zinc-500 font-light tracking-tight mt-3 sm:mt-5 text-center">
              (TikTok’s parent company)
            </p>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[2.4vw] sm:text-[2.2vw] md:text-[24px] lg:text-[32px] xl:text-[38px] font-medium tracking-tight text-[#8a939f] mb-6 sm:mb-8 whitespace-nowrap text-center shrink-0">
            Receive exclusive information on seller deals for world-class pre-IPO unicorns.
          </motion.h2>

          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 32 }} transition={{ delay: 0.3 }} className="w-[1px] bg-gradient-to-b from-white/20 to-transparent mb-6 sm:mb-8 shrink-0"></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col items-center shrink-0">
            <ContactIcons />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
