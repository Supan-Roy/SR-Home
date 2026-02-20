import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Landing.css';

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', message: '' });
  const [messageError, setMessageError] = useState('');
  const [sendStatus, setSendStatus] = useState('');
  const [sending, setSending] = useState(false);
  const messageFabRef = useRef(null);

  const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@supanroy.com';
  };

  const handleMessageChange = (event) => {
    const { name, value } = event.target;
    setMessageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const trimmedName = messageForm.name.trim();
    const trimmedMessage = messageForm.message.trim();

    if (!trimmedName) {
      setMessageError('Name is required.');
      return;
    }

    if (!trimmedMessage) {
      setMessageError('Please add a message.');
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setMessageError('Email service is not configured. Please try again later.');
      return;
    }

    setMessageError('');
    setSendStatus('');
    setSending(true);

    try {
      await emailjs.send(emailServiceId, emailTemplateId, {
        from_name: trimmedName,
        reply_to: messageForm.email.trim() || 'not-provided',
        message: trimmedMessage,
      }, emailPublicKey);

      setSendStatus('Message sent! I will get back to you soon.');
      setMessageForm({ name: '', email: '', message: '' });
    } catch (error) {
      setMessageError('Failed to send. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!messageOpen) {
      return;
    }

    const handleOutsideClick = (event) => {
      if (messageFabRef.current && !messageFabRef.current.contains(event.target)) {
        setMessageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [messageOpen]);

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <a className="logo" href="/" aria-label="Go to home page">
            <img src="/favicon.svg" alt="SR Logo" className="logo-img" />
          </a>
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
              <span className="button-icon"><img src="/icons8-email-64.png" alt="Email" style={{width:24,height:24,verticalAlign:'middle'}} /></span>
              <span>Email</span>
            </button>
            <a href="https://github.com/Supan-Roy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon" style={{display:'inline-block',background:'#fff',borderRadius:'4px',width:18,height:18,verticalAlign:'middle',padding:0}}><img src="/github.png" alt="GitHub" style={{width:24,height:24,verticalAlign:'middle',display:'block',borderRadius:'4px',marginTop:'-3px',marginLeft:'-3px'}} /></span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon"><img src="/linkedin.png" alt="LinkedIn" style={{width:24,height:24,verticalAlign:'middle'}} /></span>
              <span>LinkedIn</span>
            </a>
            <a href="https://codeforces.com/profile/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon"><img src="/icons8-codeforces-96.png" alt="CodeForces" style={{width:24,height:24,verticalAlign:'middle'}} /></span>
              <span>CodeForces</span>
            </a>
            <a href="https://leetcode.com/supanroy" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              <span className="button-icon"><img src="/icons8-leetcode-96.png" alt="LeetCode" style={{width:24,height:24,verticalAlign:'middle'}} /></span>
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

      {/* Floating message button */}
      <div className="message-fab" aria-live="polite" ref={messageFabRef}>
        <button
          type="button"
          className="message-fab__button"
          onClick={() => setMessageOpen((prev) => !prev)}
          aria-expanded={messageOpen}
          aria-controls="message-panel"
        >
          <span className="message-fab__icon">💬</span>
          <span className="message-fab__label">Message</span>
        </button>
        <div
          id="message-panel"
          className={`message-panel ${messageOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="false"
          aria-label="Send a message"
        >
          <div className="message-panel__header">
            <div>
              <p className="message-panel__eyebrow">Send a note</p>
              <h3 className="message-panel__title">Message Supan</h3>
            </div>
            <button
              type="button"
              className="message-panel__close"
              onClick={() => setMessageOpen(false)}
              aria-label="Close message form"
            >
              ×
            </button>
          </div>

          <form className="message-panel__form" onSubmit={handleMessageSubmit}>
            <label className="message-panel__label" htmlFor="message-name">
              Name <span className="message-panel__required">*</span>
            </label>
            <input
              id="message-name"
              name="name"
              type="text"
              value={messageForm.name}
              onChange={handleMessageChange}
              required
              className="message-panel__input"
              placeholder="Your name"
            />

            <label className="message-panel__label" htmlFor="message-email">
              Email (optional)
            </label>
            <input
              id="message-email"
              name="email"
              type="email"
              value={messageForm.email}
              onChange={handleMessageChange}
              className="message-panel__input"
              placeholder="you@example.com"
            />

            <label className="message-panel__label" htmlFor="message-body">
              Message
            </label>
            <textarea
              id="message-body"
              name="message"
              value={messageForm.message}
              onChange={handleMessageChange}
              className="message-panel__textarea"
              placeholder="Say hello or share your idea"
              rows="4"
              required
            ></textarea>

            {messageError && <p className="message-panel__error">{messageError}</p>}
            {sendStatus && <p className="message-panel__success">{sendStatus}</p>}

            <button type="submit" className="message-panel__submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
