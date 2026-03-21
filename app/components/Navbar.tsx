'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaYoutube, FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaYoutube, url: 'https://www.youtube.com/@SankalpaForChange', label: 'YouTube' },
  { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
  { icon: FaXTwitter, url: 'https://x.com', label: 'X' },
  { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        <div className="navbar-logo-icon">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" opacity="0.9"/>
            <path d="M10 6C10 6 7 8.5 7 11C7 12.657 8.343 14 10 14C11.657 14 13 12.657 13 11C13 8.5 10 6 10 6Z" fill="rgba(255,255,255,0.4)"/>
          </svg>
        </div>
        <div>
          <div className="navbar-logo-text">Sankalpa For Change</div>
          <div className="navbar-logo-sub">Nurturing young minds</div>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="navbar-right">
        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Blog</Link>
        </div>
        <div className="navbar-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="navbar-social-link"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <Link href="/about" className="navbar-cta">Get Involved</Link>
      </div>

      {/* Hamburger */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`ham-line ${menuOpen ? 'open-1' : ''}`}></span>
        <span className={`ham-line ${menuOpen ? 'open-2' : ''}`}></span>
        <span className={`ham-line ${menuOpen ? 'open-3' : ''}`}></span>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/posts" onClick={() => setMenuOpen(false)}>Blog</Link>
          <div className="mobile-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="navbar-social-link"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <Link href="/about" className="navbar-cta" onClick={() => setMenuOpen(false)}>Get Involved</Link>
        </div>
      )}
    </nav>
  );
}