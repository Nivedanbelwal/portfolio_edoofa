import { motion } from 'framer-motion';
import { Users, LineChart, ShieldCheck } from 'lucide-react';

export default function WhyEdoofa() {
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

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Building Trust",
      desc: "By combining rigorous factual research with clear explanations, I create content that establishes credibility—essential for students and parents navigating educational options."
    },
    {
      icon: Users,
      title: "Student-Centric Stories",
      desc: "I specialize in audience psychology: understanding what students care about, their anxieties, and their aspirations, translating these insights into relatable digital narratives."
    },
    {
      icon: LineChart,
      title: "Data-Driven Scaling",
      desc: "Just like I did at Rajniti.X, I monitor click-throughs, drop-off curves, and engagement rates to continually optimize messaging and formats, guaranteeing cost-effective organic growth."
    }
  ];

  return (
    <section id="why-edoofa" style={{ background: '#08090C' }}>
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
            <span className="section-tag">Role Alignment</span>
            <h2 className="section-title">Why I Fit <span>Edoofa</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              How my unique blend of analytical research, viral short-form storytelling, and community-building aligns with Edoofa's mission.
            </p>
          </div>

          <div className="edoofa-layout" style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            {/* Left: Strong Intent Statement */}
            <motion.div 
              variants={itemVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                color: '#FFB347',
                borderLeft: '4px solid #FF4D79',
                paddingLeft: '1.5rem',
                lineHeight: '1.6'
              }}>
                "Edoofa needs content that builds trust, creates awareness, and reaches students through authentic storytelling."
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                My experience with <strong>Rajniti.X</strong> has taught me how to research deep audience interests, create content that earns massive organic attention, and build trust without corporate jargon. I understand how to convert information into engaging short-form video formats, and how to use insights to systematically improve performance.
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                At Edoofa, I want to apply this organic audience-building blueprint to create student-focused stories, nurture relationships across student communities, and help the Edoofa brand scale through meaningful and consistent digital content.
              </p>
            </motion.div>

            {/* Right: Feature Columns */}
            <motion.div 
              variants={itemVariants} 
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div 
                    key={idx}
                    className="glass-card"
                    style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                  >
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 77, 121, 0.08)',
                      color: '#FF4D79',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.5rem' }}>{b.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.5' }}>{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .edoofa-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
