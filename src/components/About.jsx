import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, Share2 } from 'lucide-react';

export default function About() {
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

  const pillars = [
    {
      icon: BookOpen,
      title: "Audience Research",
      desc: "Deep-diving into topics to find hidden angles, interest triggers, and current affairs insights."
    },
    {
      icon: HelpCircle,
      title: "Creative Storytelling",
      desc: "Translating dry stats and complex news into captivating short-form videos that raise questions."
    },
    {
      icon: Share2,
      title: "Organic Growth",
      desc: "Leveraging hooks and audience interest to bypass paid reach and build authentic, viral awareness."
    }
  ];

  return (
    <section id="about" style={{ background: '#0B0D13' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Visual Side (Analytical & Creative Split) */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid #FF4D79' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#FF4D79' }}>
                The Intersection
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem' }}>
                Data Meets Attention
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Being a Computer Science undergraduate gives me a structured, analytical mind. I apply this technical logic to study algorithms, read viewer drop-offs, and research facts, while utilizing my creative storytelling skills to capture attention in the first 3 seconds.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid #FFB347' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#FFB347' }}>
                Active Communities
              </span>
              <h3 style={{ fontSize: '1.85rem', fontWeight: '800', marginTop: '0.5rem', marginBottom: '1rem' }}>
                Community & Education
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                From raising political awareness via Rajniti.X to managing cybersecurity awareness sessions in CryptX Club, my focus is always on creating discussions, simplifying details, and educating the community.
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div variants={itemVariants}>
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Nivedan <span>Belwal</span></h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
              }}
            >
              I am a Computer Science undergraduate and digital content creator with experience in building and managing online communities. I founded <strong>Rajniti.X</strong>, an Instagram-based current affairs and political awareness platform that has reached millions of viewers organically.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
              }}
            >
              My strength lies in researching complex topics, understanding audience interest, designing engaging visual stories, and turning raw information into content that people want to watch, discuss, and share.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '1rem'
              }}
            >
              Additionally, as a key member of the <strong>CryptX Club</strong>, I serve as a cybersecurity researcher, directing what topics and content should be shared with students to keep them aware, safe, and engaged.
            </motion.p>

            {/* Core Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={index}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  >
                    <div style={{
                      padding: '0.5rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 77, 121, 0.08)',
                      color: '#FF4D79',
                      marginTop: '0.2rem'
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>{pillar.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
