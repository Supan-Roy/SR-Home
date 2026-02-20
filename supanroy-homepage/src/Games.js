import React, { useState } from 'react';
import './Games.css';
import TicTacToeLogo from './TicTacToeLogo';

const Games = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const games = [
    {
      id: 1,
      title: 'Tic Tac Toe',
      description: 'A classic game of Tic Tac Toe. Play against the computer or challenge yourself! Simple yet challenging strategy game.',
      icon: <TicTacToeLogo size={60} />,
      links: [
        {
          label: 'Play Now',
          url: 'https://ttt.supanroy.com',
          isExternal: true
        }
      ]
    }
  ];

  return (
    <div className="games-wrapper">
      {/* Navigation */}
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

      <div className="games-container">
        <section className="games-hero">
          <div className="games-hero-content">
            <h1 className="games-title">Games</h1>
            <p className="games-subtitle">Fun and interactive games built with code</p>
          </div>
          <div className="games-stars"></div>
          <div className="games-stars2"></div>
        </section>

        <section className="games-list">
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-header">
                  <div className="game-icon">{game.icon}</div>
                  <h2 className="game-title">{game.title}</h2>
                </div>
                
                <p className="game-description">{game.description}</p>
                
                <div className="game-links">
                  {game.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="game-link"
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

export default Games;
