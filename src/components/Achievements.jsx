import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, CheckCircle2, Award, Link, X, Eye } from 'lucide-react';

export default function Achievements() {
  const [modalData, setModalData] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const achievements = [
    "Built and scaled Rajniti.X to 8,337+ Instagram followers organically in a few months",
    "Generated over 2.7 Million organic views in the last 30 days alone",
    "Created multiple viral reels crossing 18.1 Million, 5.1 Million, and 1.5 Million views",
    "Produced 156+ comprehensive pieces of content around current affairs and public awareness",
    "Contributed to CryptX Club as a key research and content-direction member",
    "Successfully supported content research and planning for two major campus cybersecurity events"
  ];

  const certifications = [
    {
      title: "Web Exploits Workshop",
      sub: "Achievement Certificate",
      file: "/Achievement Certificate - Nivedan Belwal.pdf",
      type: "pdf"
    },
    {
      title: "CSAXCON Conference",
      sub: "Conference Participation",
      file: "/CSAXCON_CERTIFICATE_NIVEDAN_BELWAL.pdf",
      type: "pdf"
    },
    {
      title: "Internet of Things (IoT)",
      sub: "NPTEL Swayam Certification",
      file: "/Nivedan Belwal IOT certificate.pdf",
      type: "pdf"
    },
    {
      title: "Grapethon National Hackathon",
      sub: "Unstop - National Level Participation",
      file: "/Unstop_hackathon.jpeg",
      type: "image"
    }
  ];

  return (
    <section id="achievements" style={{ background: '#0B0D13' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">Track Record</span>
            <h2 className="section-title">Milestones & <span>Achievements</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Highlights of organic growth, audience milestones, community leadership, and professional certifications.
            </p>
          </div>

          <div className="achievements-layout" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'stretch'
          }}>
            {/* Left: Key Bullet Highlights */}
            <motion.div 
              variants={itemVariants} 
              className="glass-card"
              style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Trophy style={{ color: '#FFB347' }} size={24} />
                Key Highlights
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {achievements.map((ach, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#FF4D79', marginTop: '0.2rem' }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                      {ach}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Certifications & PDFs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award style={{ color: '#FF4D79' }} size={24} />
                Verified Credentials
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="glass-card"
                    style={{ 
                      padding: '1.25rem 1.5rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => setModalData(cert)}
                  >
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '800' }}>{cert.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.15rem' }}>{cert.sub}</p>
                    </div>
                    <button 
                      className="btn btn-secondary"
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', display: 'flex', gap: '0.35rem', alignItems: 'center' }}
                    >
                      <Eye size={12} />
                      View
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '800px', padding: '2rem', background: '#0D0E12', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800' }}>{modalData.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{modalData.sub}</p>
                </div>
                <button onClick={() => setModalData(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                  <X size={24} />
                </button>
              </div>

              {/* PDF or Image Viewer */}
              <div style={{ 
                width: '100%', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                background: '#fff', 
                border: '1px solid rgba(0,0,0,0.1)', 
                lineHeight: 0,
                minHeight: '400px'
              }}>
                {modalData.type === 'pdf' ? (
                  <iframe 
                    src={`${modalData.file}#toolbar=0&view=FitH`} 
                    width="100%" 
                    height="500px" 
                    style={{ border: 'none' }}
                  />
                ) : (
                  <img 
                    src={modalData.file} 
                    alt={modalData.title} 
                    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'contain', background: '#000' }} 
                  />
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a 
                  href={modalData.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem' }}
                >
                  <Link size={14} />
                  Open Document in New Tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .achievements-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
