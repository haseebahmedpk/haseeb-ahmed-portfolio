import React, { useState } from 'react'
import useInView from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import PROJECTS from '../data/projects'
import '../styles/projects.css'
import '../styles/components.css'

export default function Projects() {
  const [ref, inView] = useInView()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      id="projects"
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
          top: '30%',
          right: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(214,199,178,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
        <SectionTitle title="My Projects" sub="Things I've built" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          {PROJECTS.map((project, i) => {
            const isExpanded = expandedIndex === i;
            
            return (
              <div
                key={i}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  background: 'var(--bg-card)',
                  border: `1px solid ${isExpanded ? 'rgba(214,199,178,0.4)' : 'var(--border)'}`,
                  borderRadius: '8px',
                  backdropFilter: 'blur(12px)',
                  overflow: 'hidden',
                }}
              >
                {/* Header Row (Clickable) */}
                <div
                  onClick={() => toggleExpand(i)}
                  style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: isExpanded ? 'rgba(255,255,255,0.02)' : 'transparent',
                    transition: 'background 0.3s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--cream)',
                        fontFamily: "'Playfair Display', serif",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        fontFamily: "'DM Mono', monospace",
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '0.2rem 0.6rem',
                        border: '1px solid rgba(214,199,178,0.2)',
                        borderRadius: '4px',
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          background: 'rgba(74,222,128,0.08)',
                          color: '#4ade80',
                          fontSize: '0.65rem',
                          fontFamily: "'DM Mono', monospace",
                          padding: '3px 10px',
                          borderRadius: 100,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                        Featured
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      color: 'var(--text-muted)',
                      transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      fontSize: '1.8rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      marginLeft: '1rem',
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  style={{
                    maxHeight: isExpanded ? '1500px' : 0,
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <div style={{ height: 1, background: 'var(--border)', margin: '0 0 1.5rem 0' }} />
                    
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.desc}
                    </p>

                    {project.highlights && project.highlights.length > 0 && (
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '0 0 1.5rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.6rem',
                        }}
                      >
                        {project.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem',
                              color: 'var(--text-muted)',
                              fontSize: '0.85rem',
                              lineHeight: 1.6,
                              fontWeight: 300,
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--accent)',
                                fontSize: '0.7rem',
                                marginTop: '0.3rem',
                                flexShrink: 0,
                              }}
                            >
                              ▹
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            background: 'transparent',
                            border: '1px solid rgba(214,199,178,0.18)',
                            color: 'var(--text-muted)',
                            fontSize: '0.7rem',
                            fontFamily: "'DM Mono', monospace",
                            padding: '3px 10px',
                            borderRadius: 3,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions" style={{ display: 'flex', gap: '1rem', width: '300px', maxWidth: '100%' }}>
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          className="project-btn-demo"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View live demo of ${project.title}`}
                          style={{ flex: 1 }}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github === '#' ? 'https://github.com/haseebahmedpk' : project.github}
                          className="project-btn-github"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View ${project.title} on GitHub`}
                          style={{ flex: 1 }}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global GitHub Redirect Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
        }}>
          <a
            href="https://github.com/haseebahmedpk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              color: 'var(--cream)',
              textDecoration: 'none',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(12px)',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(214,199,178,0.4)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <span style={{ fontSize: '1.2rem' }}>💻</span>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}