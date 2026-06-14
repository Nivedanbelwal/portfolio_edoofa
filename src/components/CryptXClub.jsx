import { motion } from 'framer-motion';
import { Shield, BookOpen, Presentation, Calendar, CheckCircle2 } from 'lucide-react';
import { Instagram } from './BrandIcons';

export default function CryptXClub() {
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

  const cards = [
    {
      icon: BookOpen,
      title: "Cybersecurity Research",
      desc: "Investigating emerging threats, social engineering statistics, and data privacy frameworks to formulate relevant education points.",
      points: [
        "Analyzed recent data breaches",
        "Sourced current cyber stats",
        "Fact-checked workshop materials"
      ]
    },
    {
      icon: Shield,
      title: "Content Direction",
      desc: "Translating complex cryptographic concepts and technical network jargon into simple, eye-opening slides for student awareness.",
      points: [
        "Simplified phishing definitions",
        "Created discussion frameworks",
        "Guided student event scripts"
      ]
    },
    {
      icon: Presentation,
      title: "Event Support",
      desc: "Spearheaded content pipelines and research material support for the club's major student outreach events and hackathons.",
      points: [
        "Organized session content flows",
        "Prepared speaker outlines",
        "Created awareness handouts"
      ]
    }
  ];

  const responsibilities = [
    "Identify current cybersecurity threats suitable for university student awareness activities",
    "Support content structure planning for interactive offline awareness sessions",
    "Contribute ideas for event themes, debate topics, and security scenarios",
    "Assist in preparing research-backed presentation decks and learning logs",
    "Filter technical details to make cybersecurity hygiene recommendations actionable for beginners"
  ];

  return (
    <section id="cryptx" style={{ background: '#0B0D13' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">Community & Leadership</span>
            <h2 className="section-title">CryptX Club — <span>Research & Content Direction</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Contributing to student-led cybersecurity awareness initiatives. Bridging the gap between technical threat intelligence and public understanding.
            </p>
          </div>

          {/* Intro Row */}
          <div className="cryptx-intro" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>Directing the Message of Security</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                As an active member of CryptX Club, Nivedan leads research initiatives that power the club's educational output. Cybersecurity awareness isn't about scaring students with code—it's about creating content that clearly demonstrates risks like third-party apps, social engineering, and passive data harvesting.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
                {responsibilities.map((resp, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} style={{ color: '#FF4D79', marginTop: '0.15rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{resp}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="glass-card" 
              style={{ 
                padding: '2.5rem', 
                borderLeft: '4px solid #FF4D79',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Calendar size={22} style={{ color: '#FF4D79' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Event Highlight</h4>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                CryptX Club hosted <strong>two major campus events</strong>. Nivedan served as a content researcher and planner, establishing topic criteria, fact-checking cybersecurity statistics, and organizing key learning points to maximize student retention and participation.
              </p>
              
              <a 
                href="https://www.instagram.com/cryptx_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ alignSelf: 'flex-start', display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Instagram size={16} />
                Visit CryptX Instagram
              </a>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="cryptx-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 77, 121, 0.08)',
                      color: '#FF4D79',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}>
                      <Icon size={20} />
                    </div>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.75rem' }}>{c.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {c.desc}
                    </p>
                  </div>

                  {/* Bullet Sub-points */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {c.points.map((pt, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFB347' }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cryptx-intro {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .cryptx-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
