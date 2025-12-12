import React, { useEffect, useState } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="crime-tape-top">
        <div className="tape-content">
          ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️
        </div>
      </div>

      <div className="main-content">
        <h1 className="name-title">
          <span className="letter">S</span>
          <span className="letter">u</span>
          <span className="letter">p</span>
          <span className="letter">a</span>
          <span className="letter">n</span>
          <span className="letter space"> </span>
          <span className="letter">R</span>
          <span className="letter">o</span>
          <span className="letter">y</span>
        </h1>
        
        <div className="coming-soon-text">
          <span className="coming">COMING</span>
          <span className="soon">SOON</span>
          <span className="loading-dots">{dots}</span>
        </div>

        <div className="caution-tape-cross">
          <div className="tape-diagonal tape-diagonal-1"></div>
          <div className="tape-diagonal tape-diagonal-2"></div>
        </div>
      </div>

      <div className="crime-tape-bottom">
        <div className="tape-content">
          ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️ COMING SOON ⚠️
        </div>
      </div>

      <div className="background-effects">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
