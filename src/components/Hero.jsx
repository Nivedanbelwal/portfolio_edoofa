import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Users, Eye, Film, FileText } from 'lucide-react';
import { Instagram } from './BrandIcons';

function StatCounter({ target, label, suffix = "", duration = 1.5, icon: Icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(progress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  const formatValue = (val) => {
    if (suffix === 'M+') {
      return val.toFixed(1) + suffix;
    }
    return Math.floor(val).toLocaleString() + suffix;
  };

  return (
    <motion.div 
      className="glass-card"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minWidth: '200px',
        gap: '0.5rem',
        flex: '1',
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        background: 'rgba(255, 77, 121, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FF4D79',
        marginBottom: '0.25rem'
      }}>
        <Icon size={22} />
      </div>
      <span style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2.25rem',
        fontWeight: '900',
        background: 'linear-gradient(135deg, #FF4D79, #FFB347)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-1px'
      }}>
        {formatValue(count)}
      </span>
      <span style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '7rem 0 4rem 0',
      background: 'radial-gradient(circle at 80% 20%, rgba(255, 77, 121, 0.04) 0%, rgba(0, 0, 0, 0) 50%)'
    }}>
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div variants={itemVariants}>
              <span className="section-tag">Digital Growth Portfolio</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: '900',
                letterSpacing: '-2px',
                lineHeight: '1.1',
                color: 'var(--text-primary)'
              }}
            >
              Content Creator.<br />
              Researcher.<br />
              <span className="text-gradient">Growth Storyteller.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                maxWidth: '620px',
                fontWeight: '400'
              }}
            >
              Building audiences through research-backed content, current affairs storytelling, and community-focused digital communication.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '1.5rem'
              }}
            >
              <a href="#rajnitix" className="btn btn-primary">
                View My Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
                <MessageSquare size={18} />
              </a>
            </motion.div>
          </div>

          {/* Profile/Creator Card */}
          <motion.div 
            variants={itemVariants}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              margin: '0 auto',
            }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg), 0 0 50px rgba(255, 77, 121, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              aspectRatio: '4/5',
              background: 'var(--bg-card)'
            }}>
              <img 
                src="/portfolio_img.jpeg" 
                alt="Nivedan Belwal" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(15%) contrast(105%)'
                }}
              />
              {/* Bottom overlay card */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(8, 9, 12, 0.95) 0%, rgba(8, 9, 12, 0.8) 70%, rgba(8, 9, 12, 0) 100%)',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Nivedan Belwal</h3>
                <p style={{ color: '#FF4D79', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Growth & Content Strategist
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', opacity: 0.8 }}>
                  <a href="https://www.instagram.com/raj_niti.x?igsh=MXFxdTZ5bm52a3VycQ==" target="_blank" rel="noopener noreferrer" style={{ color: '#F5A623' }}>
                    <Instagram size={18} />
                  </a>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>@raj_niti.x</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginTop: '5rem',
            width: '100%'
          }}
        >
          <StatCounter target={8337} label="Instagram Followers" suffix="+" icon={Users} />
          <StatCounter target={2.7} label="Monthly Views" suffix="M+" icon={Eye} />
          <StatCounter target={25} label="Total Reel Views" suffix="M+" icon={Film} />
          <StatCounter target={156} label="Posts Published" suffix="+" icon={FileText} />
        </motion.div>
      </div>

      {/* Inline styles for responsive layout */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid div {
            align-items: center;
            justify-content: center;
          }
          .hero-grid h1 {
            margin: 0 auto;
          }
          .hero-grid p {
            margin: 0 auto;
          }
          .hero-grid div div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
