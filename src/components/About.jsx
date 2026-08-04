import React from 'react'
import useInView from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import '../styles/components.css'

const STATS = [
  { val: '10+', label: 'Projects Done' },
  { val: '10+', label: 'GitHub Repos' },
]

const CARDS = [
  { icon: '🎓', title: 'BSc Computer Science', sub: 'COMSATS University Islamabad, Wah Campus · 2022–2026' },
  { icon: '📜', title: 'Full Stack Certification', sub: 'Meta Professional Certificate · 2022' },
  { icon: '💼', title: 'Freelance Developer', sub: 'Self-employed · 2021–Present' },
  { icon: '🌐', title: 'Open Source Contributor', sub: 'React & Node.js ecosystem · 2022–Present' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} style={{
      padding: '7rem 2rem',
      background: 'var(--bg-surface)',
      position: 'relative',
    }}>
      {/* Subtle side accent */}
      <div style={{
        position: 'absolute',
        left: 0, top: '10%', bottom: '10%',
        width: 1,
        background: 'linear-gradient(to bottom, transparent, rgba(214,199,178,0.2), transparent)',
        borderRadius: 1,
        opacity: 0.5,
      }} />

      <div className="container">
        <SectionTitle title="About Me" sub="Who I am & what I do" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* ── Left ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(-36px)',
            transition: 'all 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.65rem',
              fontWeight: 700,
              color: 'var(--cream)',
              marginBottom: '1.2rem',
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
            }}>
              Architecting{' '}
              <span style={{ background: 'var(--gradient-warm)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Autonomous AI
              </span>{' '}
              to Personalize Global Education and Opportunity.
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.95, marginBottom: '1rem', fontSize: '0.92rem', fontWeight: 300 }}>
              Computer Science graduate with a research-driven interest in Artificial Intelligence, autonomous systems, and Artificial General Intelligence (AGI). Passionate about designing intelligent agents, AI automation, and machine learning solutions that solve complex real-world problems.
              <br/><br/>
              Skilled in Python, LangChain, machine learning, computer vision, and full-stack application development, with experience building AI-powered systems ranging from multi-agent platforms to intelligent vision-based applications. Committed to advancing AI through graduate studies, interdisciplinary research, and international collaboration, with the long-term goal of contributing to the development of safe, scalable, and human-centered intelligent systems.
            </p>

            {/* <p style={{ color: 'var(--text-muted)', lineHeight: 1.95, marginBottom: '2.5rem', fontSize: '0.92rem', fontWeight: 300 }}>
              My expertise spans frontend and backend development using HTML, CSS, Bootstrap, JavaScript, React, PHP, and Laravel, along with AI-powered automation workflows using n8n and advanced web technologies. I enjoy creating responsive interfaces, automation systems, chatbot solutions, and scalable applications with clean architecture, optimized performance, and user-focused design.
            </p> */}

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem' }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  padding: '1.1rem 1.2rem',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                  className="hover-lift"
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    background: 'var(--gradient-warm)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Cards ── */}
          {/* ── Right: Code Editor ── */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(36px)',
            transition: 'all 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}>
            {/* Editor Window */}
            <div style={{
              background: '#0D0D0D',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              fontFamily: "'DM Mono', monospace",
            }}>
              {/* Title Bar */}
              <div style={{
                background: '#161616',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                {/* Traffic lights */}
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
                </div>
                <span style={{ color: '#4b5563', fontSize: '0.8rem', letterSpacing: '0.04em' }}>profile.json</span>
              </div>

              {/* Code Body */}
              <div style={{ padding: '28px 16px', fontSize: '0.82rem', lineHeight: 2 }}>
                <span style={{ color: '#A8A29E' }}>{'{'}</span><br />

                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"name"</span>
                  <span style={{ color: '#A8A29E' }}>: </span>
                  <span style={{ color: '#86EFAC' }}>"Haseeb Ahmed"</span>
                  <span style={{ color: '#A8A29E' }}>,</span>
                </span><br />

                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"role"</span>
                  <span style={{ color: '#A8A29E' }}>: </span>
                  <span style={{ color: '#86EFAC' }}>"AI & Full-Stack Developer"</span>
                  <span style={{ color: '#A8A29E' }}>,</span>
                </span><br />

                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"graduated from"</span>
                  <span style={{ color: '#A8A29E' }}>: </span>
                  <span style={{ color: '#86EFAC' }}>"COMSATS University Islamabad, Wah Campus"</span>
                  <span style={{ color: '#A8A29E' }}>,</span>
                </span><br />


                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"location"</span>
                  <span style={{ color: '#A8A29E' }}>: </span>
                  <span style={{ color: '#86EFAC' }}>"Rawalpindi, Pakistan"</span>
                  <span style={{ color: '#A8A29E' }}>,</span>
                </span><br />

                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"focus"</span>
                  <span style={{ color: '#A8A29E' }}>: [</span>
                </span><br />

                {['Intelligent Agents', 'Generative AI', 'AI Automation', 'Computer Vision', 'Full-Stack Dev'].map((item, i, arr) => (
                  <span key={item} style={{ paddingLeft: 52, display: 'block' }}>
                    <span style={{ color: '#86EFAC' }}>"{item}"</span>
                    <span style={{ color: '#A8A29E' }}>{i < arr.length - 1 ? ',' : ''}</span>
                  </span>
                ))}

                <span style={{ paddingLeft: 28, display: 'block' }}>
                  <span style={{ color: '#A8A29E' }}>],</span>
                </span><br />

                <span style={{ paddingLeft: 28 }}>
                  <span style={{ color: '#F87171' }}>"status"</span>
                  <span style={{ color: '#A8A29E' }}>: </span>
                  <span style={{ color: '#86EFAC' }}>"Open to Work ✓"</span>
                </span><br />

                <span style={{ color: '#A8A29E' }}>{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
