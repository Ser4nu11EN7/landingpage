import React from 'react';
import { motion } from 'motion/react';

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

export default Starfield;
