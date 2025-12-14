import React, { useState } from 'react';
import './Landing.css';

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@supanroy.com';
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src="/favicon.svg" alt="SR Logo" className="logo-img" />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li className="mobile-visible"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li className="mobile-visible"><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li className="mobile-visible"><a href="https://portfolio.supanroy.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li className="mobile-visible"><a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li className="mobile-hidden"><a href="/extensions" onClick={() => setMenuOpen(false)}>Extensions</a></li>
            <li className="mobile-hidden"><a href="https://compiler.supanroy.com/" target="_blank" rel="noopener noreferrer">Compiler</a></li>
            <li className="mobile-hidden"><a href="/games" onClick={() => setMenuOpen(false)}>Games</a></li>
            <li className="mobile-hidden"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
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

      {/* Hero Section */}
      <section className="hero">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="hero-content">
          <div className="name-container">
            <h1 className="name">Supan Roy</h1>
          </div>

          <p className="tagline">Programmer & Aspiring Software Engineer</p>

          <div className="info-cards">
            <div className="info-card card-fade-in">
              <span className="card-icon">🎓</span>
              <p>Student</p>
              <span className="card-subtitle">Daffodil International University</span>
            </div>
            <div className="info-card card-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="card-icon">💻</span>
              <p>Computer Science & Engineering</p>
              <span className="card-subtitle">CSE</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate student at Daffodil International University, pursuing Computer Science and Engineering. 
                With a strong foundation in programming and software development, I'm committed to building elegant solutions 
                to complex problems.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to create impactful applications that make a difference. 
                I continuously explore new technologies and best practices to grow as a software engineer.
              </p>
            </div>
            <div className="about-image">
              <img src="/Supan - Profile Main.jpg" alt="Supan Roy" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-content">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Programming Languages</h3>
              <p>C, C++, Python, JavaScript</p>
            </div>
            <div className="skill-item">
              <h3>Web Development</h3>
              <p>React, HTML5, CSS3, Django</p>
            </div>
            <div className="skill-item">
              <h3>Tools & Technologies</h3>
              <p>Git, VS Code, APIs, Database</p>
            </div>
            <div className="skill-item">
              <h3>Soft Skills</h3>
              <p>Problem Solving, Communication, Teamwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's connect and create something amazing together</p>

          <div className="contact-options">
            <button className="cta-button primary" onClick={handleContactClick}>
              <span className="button-icon">✉️</span>
              <span>Email</span>
            </button>
            <a href="https://github.com/Supan-Roy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon">💻</span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon">🔗</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://codeforces.com/profile/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon">⚡</span>
              <span>CodeForces</span>
            </a>
            <a href="https://leetcode.com/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon">💡</span>
              <span>LeetCode</span>
            </a>
          </div>

          <div className="contact-info">
            <p className="email-display">📧 contact@supanroy.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Supan Roy. All rights reserved.</p>
      </footer>

      {/* Floating elements */}
      <div className="floating-element element-1"></div>
      <div className="floating-element element-2"></div>
      <div className="floating-element element-3"></div>
    </div>
  );
};

export default Landing;
