import React, { useState, useEffect } from 'react';
import './Extensions.css';

const Extensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [codeStarterInstalls, setCodeStarterInstalls] = useState(null);

  // Fetch live installs for CodeStarter
  useEffect(() => {
    async function fetchInstalls() {
      try {
        const res = await fetch('/api/codestarter-installs');
        if (res.ok) {
          const data = await res.json();
          setCodeStarterInstalls(data);
        } else {
          setCodeStarterInstalls(null);
        }
      } catch (err) {
        setCodeStarterInstalls(null);
      }
    }
    fetchInstalls();
  }, []);

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
    },
    {
      id: 2,
      title: 'Just The Answer',
      description: 'Copy only the meaningful answer from AI responses. Clean and formatted for general pasting and using in Word and Google Docs.',
      icon: '/just-the-answer-icon.png',
      links: [
        {
          label: 'Chrome Web Store',
          url: 'https://chromewebstore.google.com/detail/gnfmkpjejlmnohabakglhkfbailhabea?utm_source=item-share-cb'
        }
      ]
    },
    {
      id: 3,
      title: 'Coding Mode',
      description: 'Temporarily block AI chat sites during coding sessions; optional TOTP unlock.',
      icon: '/coding-mode-icon.png',
      links: [
        {
          label: 'Chrome Web Store',
          url: 'https://chromewebstore.google.com/detail/hekkbldegloakmhpghkmfjdbdhpfeggp?utm_source=item-share-cb'
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
              {ext.title === 'CodeStarter' && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#FFD600',
                  fontWeight: 600,
                  borderRadius: '12px',
                  padding: '4px 12px',
                  fontSize: '0.95em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  zIndex: 2,
                  border: '1px solid rgba(255,255,255,0.18)'
                }}>
                  {codeStarterInstalls !== null && typeof codeStarterInstalls.total === 'number'
                    ? `Total Installs: ${codeStarterInstalls.total.toLocaleString()}`
                    : 'Loading installs...'}
                  {/* Debug: show full API response for troubleshooting */}
                  {codeStarterInstalls && (
                    <pre style={{fontSize: '0.7em', color: '#888', marginTop: '4px', background: 'none', border: 'none'}}>
                      {JSON.stringify(codeStarterInstalls, null, 2)}
                    </pre>
                  )}
                </div>
              )}
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
