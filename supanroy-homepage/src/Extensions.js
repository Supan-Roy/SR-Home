import React, { useState } from 'react';
import './Extensions.css';

const Extensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const extensions = [
    {
      id: 1,
      title: 'CodeStarter',
      description: 'A lightweight VS Code extension that automatically inserts useful starter templates whenever you create a new file in supported programming languages.',
      icon: '/codestarter-icon.png',
      links: [
        {
          label: 'VS Code Marketplace',
          url: 'https://marketplace.visualstudio.com/items?itemName=supanbeingroy.codestarter-sroy'
        },
        {
          label: 'Open VSX Registry',
          url: 'https://open-vsx.org/extension/Supan-Roy/codestarter-sroy'
        }
      ]
    }
  ];

  return (
    <div className="extensions-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src="/favicon.svg" alt="SR Logo" className="logo-img" />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li className="mobile-visible"><a href="/" onClick={() => setMenuOpen(false)}>About</a></li>
            <li className="mobile-visible"><a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li className="mobile-hidden"><a href="/extensions" onClick={() => setMenuOpen(false)}>Extensions</a></li>
            <li className="mobile-hidden"><a href="https://compiler.supanroy.com/" target="_blank" rel="noopener noreferrer">Compiler</a></li>
            <li className="mobile-visible"><a href="https://portfolio.supanroy.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
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

      <div className="extensions-container">
      <section className="extensions-hero">
        <div className="extensions-hero-content">
          <h1 className="extensions-title">Extensions</h1>
          <p className="extensions-subtitle">Useful tools and extensions to enhance your development experience</p>
        </div>
        <div className="extensions-stars"></div>
        <div className="extensions-stars2"></div>
      </section>

      <section className="extensions-list">
        <div className="extensions-grid">
          {extensions.map((ext) => (
            <div key={ext.id} className="extension-card">
              <div className="extension-header">
                <img src={ext.icon} alt={ext.title} className="extension-icon" />
                <h2 className="extension-title">{ext.title}</h2>
              </div>
              
              <p className="extension-description">{ext.description}</p>
              
              <div className="extension-links">
                {ext.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="extension-link"
                  >
                    {link.label}
                    <span className="link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Extensions;
