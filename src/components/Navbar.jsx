import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rajniti.X', href: '#rajnitix' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Viral Content', href: '#viral' },
    { name: 'CryptX Club', href: '#cryptx' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Why Edoofa', href: '#why-edoofa' },
  ];

  return (
    <nav className="navbar" style={{ 
      background: scrolled ? 'rgba(8, 9, 12, 0.9)' : 'rgba(8, 9, 12, 0.7)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container navbar-container">
        <a href="#about" className="logo">
          Nivedan Belwal
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          background: 'rgba(11, 12, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link" 
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: '600' }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary" 
            onClick={() => setIsOpen(false)}
            style={{ width: '100%' }}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
