import React from 'react';

export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden text-slate-700/10 dark:text-[#6b21a8]/12">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1">
          <circle cx="10%" cy="20%" r="2" />
          <circle cx="30%" cy="40%" r="2" />
          <circle cx="60%" cy="10%" r="2" />
          <circle cx="80%" cy="50%" r="2" />
          <circle cx="50%" cy="80%" r="2" />
        </g>
      </svg>

      <style>{`
        @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0px); } }
        .particles-motion svg { animation: floaty 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default ParticlesBackground;
