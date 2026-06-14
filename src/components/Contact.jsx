import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Linkedin, Instagram } from './BrandIcons';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const socialLinks = [
    {
      name: "Email Me",
      value: "nivedanbelwal627@gmail.com",
      url: "mailto:nivedanbelwal627@gmail.com",
      icon: Mail,
      color: "#FF4D79"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/nivedan-belwal",
      url: "https://www.linkedin.com/in/nivedan-belwal",
      icon: Linkedin,
      color: "#0077B5"
    },
    {
      name: "Rajniti.X",
      value: "@raj_niti.x",
      url: "https://www.instagram.com/raj_niti.x?igsh=MXFxdTZ5bm52a3VycQ==",
      icon: Instagram,
      color: "#E1306C"
    },
    {
      name: "CryptX Club",
      value: "@cryptx_club",
      url: "https://www.instagram.com/cryptx_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: Instagram,
      color: "#E1306C"
    }
  ];

  return (
    <section id="contact" style={{ background: '#0B0D13', borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '3.5rem',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Header */}
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Let's Build Content <span>That Matters</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Let's connect and discuss how I can help scale Edoofa's digital footprint and organic student outreach.
            </p>
          </div>

          {/* Center Column Container */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              maxWidth: '800px', 
              width: '100%',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '2.5rem' 
            }}
          >
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                Nivedan Belwal
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Have an opportunity, want to talk growth analytics, or interested in a content collaboration? Connect with me directly through any of the channels below.
              </p>
            </div>
            
            {/* Social Cards Grid */}
            <div className="social-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem',
              width: '100%'
            }}>
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{ 
                      padding: '1.25rem 1.5rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1.25rem',
                      textDecoration: 'none',
                      color: 'inherit',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      color: link.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {link.name}
                      </span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '600', marginTop: '0.1rem' }}>
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Tagline footer */}
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '2rem',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              width: '100%',
              marginTop: '1.5rem'
            }}>
              © {new Date().getFullYear()} Nivedan Belwal. Made with 📈 and 💡 for Edoofa.
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .social-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
