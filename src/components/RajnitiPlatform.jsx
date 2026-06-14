import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { Instagram } from './BrandIcons';

export default function RajnitiPlatform() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  const roles = [
    "Founder and sole content creator",
    "Topic research and daily trend selection",
    "Content planning and publication strategy",
    "Script writing, voiceovers, and visual styling",
    "Short-form hook & format analysis",
    "Active audience engagement & community discussions",
    "Performance tracking using Instagram Insights",
    "A/B testing hooks to maximize organic reach"
  ];

  const highlights = [
    { label: "Viral Milestone", value: "18.1M+", desc: "Views on highest-performing reel" },
    { label: "Community", value: "8.3K+", desc: "Subscribers organically in few months" },
    { label: "Engagement", value: "High-discussion comments & shares" }
  ];

  return (
    <section id="rajnitix" style={{ background: '#08090C' }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">Featured Work</span>
            <h2 className="section-title">Rajniti.X — <span>Instagram Platform</span></h2>
            <p className="section-desc" style={{ margin: '0 auto 2rem auto' }}>
              A current affairs, political awareness, and public issue platform built to educate, question, and awaken audiences through impactful short-form storytelling.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="rajniti-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'stretch'
          }}>
            {/* Visual Platform Details */}
            <motion.div 
              variants={itemVariants} 
              className="glass-card" 
              style={{ 
                padding: '3rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Glow */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(255, 77, 121, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #FF4D79, #FFB347)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000'
                  }}>
                    <Instagram size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: '800' }}>@raj_niti.x</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Current Affairs awareness</p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Rajniti.X was founded on the belief that news shouldn't be boring or inaccessible. By converting dense political arguments and economic issues into highly shareable, visually gripping reels, the page crossed <strong>25 Million views</strong> organically without a single rupee spent on marketing.
                </p>

                {/* Sub-Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  {highlights.map((h, i) => (
                    <div key={i} style={{ borderLeft: '2px solid rgba(255, 77, 121, 0.4)', paddingLeft: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        {h.label}
                      </span>
                      {h.value && (
                        <h4 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0.2rem 0', color: '#FF4D79' }}>
                          {h.value}
                        </h4>
                      )}
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{h.desc || h.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="https://www.instagram.com/raj_niti.x?igsh=MXFxdTZ5bm52a3VycQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', gap: '0.75rem' }}
              >
                <Instagram size={20} />
                Visit Rajniti.X on Instagram
              </a>
            </motion.div>

            {/* Founder Responsibilities */}
            <motion.div 
              variants={itemVariants} 
              className="glass-card" 
              style={{ 
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <TrendingUp style={{ color: '#FFB347' }} size={24} />
                My Core Responsibilities
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {roles.map((role, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#FFB347', marginTop: '0.25rem' }}>
                      <CheckCircle size={18} />
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                      {role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .rajniti-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
