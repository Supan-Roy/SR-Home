import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="projects-wrapper">
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

      <div className="projects-container">
        <section className="projects-hero">
          <div className="projects-hero-content">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-subtitle">Explore my creative and technical projects</p>
          </div>
          <div className="projects-stars"></div>
          <div className="projects-stars2"></div>
        </section>

        <section className="projects-list">
          <div className="projects-grid">
            <p className="coming-soon">Coming Soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
