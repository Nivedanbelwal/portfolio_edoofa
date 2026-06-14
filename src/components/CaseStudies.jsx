import { motion } from 'framer-motion';
import { TrendingUp, Flame, Search, BarChart3, ChevronRight } from 'lucide-react';

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const cases = [
    {
      icon: TrendingUp,
      title: "Audience Growth",
      badge: "Organic Reach",
      glow: "rgba(255, 77, 121, 0.05)",
      accent: "#FF4D79",
      summary: "Scaled to 8,337+ followers organically in months",
      points: [
        "Consistent Posting: Maintained structured uploading schedules matching peak active hours.",
        "Trend Jacking: Intercepted breaking current affairs and hot political topics within hours.",
        "Audience-Centric Value: Designed content that answered viewers' immediate queries on public issues.",
        "Shareability Focus: Produced reels that took a strong stance, encouraging users to share to stories."
      ]
    },
    {
      icon: Flame,
      title: "Viral Content Strategy",
      badge: "Reel Architecture",
      glow: "rgba(255, 179, 71, 0.05)",
      accent: "#FFB347",
      summary: "Engineered short-form structures that generated 25M+ views",
      points: [
        "The 3-Second Hook: Formulated text overlays and curiosity gaps to prevent scrolling.",
        "Emotional Resonance: Tied current affairs to relatable issues (inflation, safety, local regulations).",
        "Pacing & Visuals: Utilized rapid cuts, overlay images, and dynamic text to match the attention span.",
        "High-Engagement Call to Action: Asked open-ended questions at the end to trigger massive comment threads."
      ]
    },
    {
      icon: Search,
      title: "Research-Backed Content",
      badge: "Fact-Check Funnel",
      glow: "rgba(255, 77, 121, 0.05)",
      accent: "#FF4D79",
      summary: "Rooted political awareness in structured facts to build trust",
      points: [
        "Primary Source Factoring: Read news publications, bills, and policy draft reports before writing.",
        "Simplification Pipeline: Translated legalese and economic terms into layman's analogies.",
        "Balanced Discussion: Maintained neutrality on controversial topics to promote open debate.",
        "Visual Proofs: Embedded official reports, newspaper clips, and video quotes directly in the reels."
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Learning",
      badge: "Data Loop",
      glow: "rgba(255, 179, 71, 0.05)",
      accent: "#FFB347",
      summary: "Using Instagram Insights to double down on winning formats",
      points: [
        "Metric Breakdown: Tracked 'Shares' and 'Saves' as primary indicators of long-term content health.",
        "Drop-off Diagnosis: Analyzed watch-time curves to identify dead moments and edit tighter transitions.",
        "Audience Cohort Study: Studied demographic graphs to tailor topics to the 18–34 age group.",
        "Iterative Refinement: Converted successful viral angles into multi-part awareness series."
      ]
    }
  ];

  return (
    <section id="cases" style={{ background: '#0B0D13' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {/* Section Headers */}
          <div style={{ textAlign: 'center' }}>
            <span className="section-tag">Growth Mechanics</span>
            <h2 className="section-title">Rajniti.X <span>Case Studies</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              How structured planning, data-driven optimization, and deep content research scaled the page from zero to millions of organic impressions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="cases-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem'
          }}>
            {cases.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: `0 10px 30px -10px ${c.glow}`
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div>
                    {/* Top row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: `rgba(${c.accent === '#FF4D79' ? '255, 77, 121' : '255, 179, 71'}, 0.08)`,
                        color: c.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={22} />
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: c.accent,
                        background: `rgba(${c.accent === '#FF4D79' ? '255, 77, 121' : '255, 179, 71'}, 0.05)`,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        border: `1px solid rgba(${c.accent === '#FF4D79' ? '255, 77, 121' : '255, 179, 71'}, 0.15)`
                      }}>
                        {c.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.45rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                      {c.summary}
                    </p>

                    {/* Detailed Points */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                      {c.points.map((pt, pidx) => {
                        const [boldText, normalText] = pt.split(':');
                        return (
                          <li key={pidx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <ChevronRight size={16} style={{ color: c.accent, marginTop: '0.15rem', flexShrink: 0 }} />
                            <span>
                              <strong style={{ color: 'var(--text-primary)' }}>{boldText}:</strong>
                              {normalText}
                            </span>
                          </li>
                        );
                      })}
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
          .cases-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
