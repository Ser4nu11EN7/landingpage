import React from 'react';

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

export default BrandLogo;
