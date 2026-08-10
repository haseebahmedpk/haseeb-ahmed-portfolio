import React from 'react'
import useInView from '../hooks/useInView'
import SectionTitle from './SectionTitle'

const ACHIEVEMENTS = [
  {
    icon: '🥈',
    position: '2nd Position',
    category: 'Competitive Programming',
    event: 'HITEC University Taxila — CodeWar Season II, Dec 2023',
    project: 'Runner-Up in Competitive Programming',
    description: 'Achieved 2nd Position in the CodeWar Season II programming competition, demonstrating problem-solving, algorithmic thinking, logical reasoning, and programming skills by solving competitive coding challenges under time constraints.',
    tags: ['Competitive Programming', 'Algorithms', 'Problem Solving'],
  },
  {
    icon: '🎓',
    position: '3.44 CGPA',
    category: 'Academic Excellence',
    event: 'COMSATS University Islamabad, Wah Campus — 2026',
    project: 'BSc Computer Science Graduation',
    description: 'Successfully graduated with a high distinction of 3.44 CGPA. Developed DeepHunt AI as a final year project and specialized in agentic workflows and machine learning.',
    tags: ['Computer Science', 'Distinction', 'DeepHunt AI'],
  },
]

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section
      id="achievements"
      ref={ref}
      style={{
        padding: '7rem 2rem',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background:
            'radial-gradient(circle, rgba(214,199,178,0.055) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <SectionTitle title="My Achievements" sub="Honours & Recognition" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={i}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(36px)',
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
              }}
            >
              {/* Card */}
              <div
                className="hover-lift"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: '2.2rem 2.4rem',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                {/* Gold top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background:
                      'linear-gradient(90deg, transparent, rgba(214,199,178,0.7), rgba(255,215,100,0.6), rgba(214,199,178,0.7), transparent)',
                  }}
                />

                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.4rem',
                    marginBottom: '1.4rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Trophy icon */}
                  <div
                    style={{
                      fontSize: '2.8rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      filter: 'drop-shadow(0 0 14px rgba(255,215,0,0.45))',
                      animation: 'float 3.5s ease-in-out infinite',
                    }}
                  >
                    {ach.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    {/* Position badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          background: 'linear-gradient(135deg, rgba(255,215,100,0.18), rgba(214,199,178,0.12))',
                          border: '1px solid rgba(255,215,100,0.35)',
                          color: '#FFD764',
                          fontSize: '0.72rem',
                          fontFamily: "'DM Mono', monospace",
                          fontWeight: 500,
                          padding: '4px 12px',
                          borderRadius: 3,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {ach.icon} {ach.position}
                      </span>
                      <span
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.78rem',
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: '0.05em',
                        }}
                      >
                        {ach.category}
                      </span>
                    </div>

                    {/* Project title */}
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--cream)',
                        lineHeight: 1.35,
                        fontFamily: "'Playfair Display', serif",
                        marginBottom: '0.3rem',
                      }}
                    >
                      "{ach.project}"
                    </h3>

                    {/* Event */}
                    <p
                      style={{
                        color: 'var(--accent)',
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        opacity: 0.85,
                      }}
                    >
                      {ach.event}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: 'var(--border)',
                    marginBottom: '1.2rem',
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: 1.85,
                    fontWeight: 300,
                    marginBottom: '1.4rem',
                  }}
                >
                  {ach.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(214,199,178,0.18)',
                        color: 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontFamily: "'DM Mono', monospace",
                        padding: '3px 10px',
                        borderRadius: 3,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
