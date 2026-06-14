import { motion } from 'framer-motion';
import { Sparkles, FileSearch, PenTool } from 'lucide-react';

export default function Skills() {
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

  const skillsData = [
    {
      category: "Content & Growth",
      icon: Sparkles,
      color: "#FF4D79",
      items: [
        "Social Media Strategy",
        "Content Creation",
        "Short-Form Video Strategy",
        "Audience Growth",
        "Trend Research",
        "Content Research",
        "Storytelling",
        "Caption Writing",
        "Community Engagement",
        "Personal Branding",
        "Growth Experimentation"
      ]
    },
    {
      category: "Research & Communication",
      icon: FileSearch,
      color: "#FFB347",
      items: [
        "Topic Research",
        "Current Affairs Analysis",
        "Audience Psychology",
        "Public Awareness Content",
        "Presentation Planning",
        "Event Content Planning",
        "Simplifying Complex Topics"
      ]
    },
    {
      category: "Tools & Analytics",
      icon: PenTool,
      color: "#FF4D79",
      items: [
        "Instagram Insights",
        "Canva",
        "CapCut",
        "ChatGPT",
        "Meta Business Suite",
        "Google Workspace"
      ]
    }
  ];

  return (
    <section id="skills" style={{ background: '#08090C' }}>
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
            <span className="section-tag">Competencies</span>
            <h2 className="section-title">Growth & <span>Research Arsenal</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              My toolkit spans visual content creation, deep current affairs research, and analytical insights, refined over millions of organic impressions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {skillsData.map((section, sidx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={sidx}
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    position: 'relative',
                    borderTop: `3px solid ${section.color}`
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: `rgba(${section.color === '#FF4D79' ? '255, 77, 121' : '255, 179, 71'}, 0.08)`,
                      color: section.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{section.category}</h3>
                  </div>

                  {/* Skills Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {section.items.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: 'var(--text-secondary)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          padding: '0.4rem 0.9rem',
                          borderRadius: '30px',
                          transition: 'all 0.3s ease',
                          cursor: 'default'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.borderColor = section.color;
                          e.target.style.color = '#fff';
                          e.target.style.boxShadow = `0 0 10px rgba(${section.color === '#FF4D79' ? '255, 77, 121' : '255, 179, 71'}, 0.2)`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                          e.target.style.color = 'var(--text-secondary)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
