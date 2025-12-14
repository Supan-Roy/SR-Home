import React from 'react';

const TicTacToeLogo = ({ size = 60 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <defs>
        <linearGradient id="tttGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffeb3b" />
          <stop offset="100%" stopColor="#ffc107" />
        </linearGradient>
      </defs>
      {/* Grid Background */}
      <rect x="5" y="5" width="50" height="50" fill="none" stroke="url(#tttGradient)" strokeWidth="2" rx="4" />
      
      {/* Vertical Lines */}
      <line x1="22" y1="5" x2="22" y2="55" stroke="url(#tttGradient)" strokeWidth="2" />
      <line x1="38" y1="5" x2="38" y2="55" stroke="url(#tttGradient)" strokeWidth="2" />
      
      {/* Horizontal Lines */}
      <line x1="5" y1="22" x2="55" y2="22" stroke="url(#tttGradient)" strokeWidth="2" />
      <line x1="5" y1="38" x2="55" y2="38" stroke="url(#tttGradient)" strokeWidth="2" />
      
      {/* Sample X in top-left */}
      <line x1="10" y1="10" x2="18" y2="18" stroke="url(#tttGradient)" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="10" x2="10" y2="18" stroke="url(#tttGradient)" strokeWidth="2" strokeLinecap="round" />
      
      {/* Sample O in center */}
      <circle cx="30" cy="30" r="4" fill="none" stroke="url(#tttGradient)" strokeWidth="2" />
    </svg>
  );
};

export default TicTacToeLogo;
