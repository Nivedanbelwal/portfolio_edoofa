import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function VideoShowcase() {

  const reels = [
    {
      id: 1,
      views: "18.1M+",
      label: "Highest Performing Reel",
      badge: "Viral Hero",
      hook: "Curiosity Gap: Opened with a bold, controversial statement overlaid on high-contrast footage, making viewers pause instantly.",
      whyWorked: "Tapped into a high-reach topic with immediate public interest. The formatting encouraged viewers to argue/agree in the comments, pushing it rapidly into the Instagram algorithmic loop.",
      learned: "High shareability beats high likes. Designing content with sections that viewers want to send to their friends is the quickest path to virality."
    },
    {
      id: 2,
      views: "5.1M+",
      label: "Viral Public Interest Reel",
      badge: "Public Discussion",
      hook: "Emotional Hook: Addressed a local community issue directly affecting the daily life of young professionals.",
      whyWorked: "Relatability. It validated viewers' silent frustrations, prompting them to share and tag their peers in discussion threads.",
      learned: "Empathy-driven storytelling creates high-fidelity engagement. Audiences follow creators who talk about the things they care about but don't say."
    },
    {
      id: 3,
      views: "1.5M+",
      label: "High-Reach Awareness Reel",
      badge: "Awareness Campaign",
      hook: "Informative Hook: Promised a solution to a complex regulatory policy in the first 2 seconds.",
      whyWorked: "High educational value. Instead of just listing facts, I animated the timeline, keeping viewers hooked till the last second.",
      learned: "Retention is everything. Pacing the facts in a 1-2-3 list keeps the watch-time curve flat, signalling high quality to the algorithm."
    }
  ];

  return (
    <section id="viral" style={{ background: '#08090C' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Audience Retention</span>
          <h2 className="section-title">Viral Content <span>Showcase</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Analysis of Rajniti.X's top-performing short-form videos. Every million views was backed by a structured hook, content logic, and audience psychology.
          </p>
        </div>

        {/* Reels Row */}
        <div className="reels-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '3px solid #FF4D79'
              }}
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Metric Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF4D79' }}>
                    <Eye size={18} />
                    <span style={{ fontSize: '1.25rem', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>
                      {reel.views} Views
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: '#FFB347',
                    background: 'rgba(255, 179, 71, 0.05)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {reel.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {reel.label}
                </h3>

                {/* Specifics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.06)', paddingLeft: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hook Strategy</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{reel.hook}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.06)', paddingLeft: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Why It Worked</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{reel.whyWorked}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.06)', paddingLeft: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FFB347', textTransform: 'uppercase' }}>Key Learning</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{reel.learned}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reels-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
