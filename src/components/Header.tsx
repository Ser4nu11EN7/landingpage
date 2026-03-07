import React from 'react';
import { ChevronDown } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Header = () => {
  return (
    <header className="px-6 py-4 flex items-center justify-between z-50 text-white">
      <div className="flex items-center">
        <BrandLogo size="small" withBorder />
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

export default Header;
