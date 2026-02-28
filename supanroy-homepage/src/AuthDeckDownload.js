import React, { useState } from 'react';
import './AuthDeckDownload.css';

const AuthDeckDownload = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="authdeck-download-wrapper">
      <nav className="navbar">
        <div className="nav-content">
          <a className="logo" href="/" aria-label="Go to home page">
            <img src="/favicon.svg" alt="SR Logo" className="logo-img" />
          </a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li className="mobile-visible"><a href="/" onClick={() => setMenuOpen(false)}>About</a></li>
            <li className="mobile-visible"><a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li className="mobile-visible"><a href="https://portfolio.supanroy.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li className="mobile-visible"><a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li className="mobile-hidden"><a href="/extensions" onClick={() => setMenuOpen(false)}>Extensions</a></li>
            <li className="mobile-hidden"><a href="https://compiler.supanroy.com/" target="_blank" rel="noopener noreferrer">Compiler</a></li>
            <li className="mobile-hidden"><a href="/games" onClick={() => setMenuOpen(false)}>Games</a></li>
            <li className="mobile-hidden"><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="authdeck-download-container">
        <section className="authdeck-download-hero">
          <div className="authdeck-download-hero-content">
            <h1 className="authdeck-download-title">AuthDeck Download</h1>
            <p className="authdeck-download-subtitle">Privacy-first Windows desktop authenticator for secure 2FA/TOTP management</p>
          </div>
          <div className="authdeck-download-stars"></div>
          <div className="authdeck-download-stars2"></div>
        </section>

        <section className="authdeck-download-section">
          <div className="authdeck-download-card">
            <img src="/authdeck-icon.png" alt="AuthDeck Icon" className="authdeck-download-icon" />
            <h2 className="authdeck-download-app-name">AuthDeck for Windows</h2>
            <p className="authdeck-download-version">Current Version: <strong>1.0.4</strong></p>
            <a
              className="authdeck-download-btn"
              href="https://drive.google.com/file/d/1Sfcv6OM5BvLmz1zMQbQmKzWQJmUZdq0Q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download v1.0.4
            </a>
            <a className="authdeck-back-btn" href="/projects">← Back to Projects</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthDeckDownload;
