import React, { useState, useEffect } from 'react'
import useInView from '../hooks/useInView'
import SectionTitle from './SectionTitle'
import PROJECTS from '../data/projects'
import '../styles/projects.css'
import '../styles/components.css'

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeIndex, setActiveIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const activeProject = PROJECTS[activeIndex]

  const formatDirName = (title) => title.split(' | ')[0].replace(/\s+/g, '-').toLowerCase()

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
      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
        <SectionTitle title="My Projects" sub="/usr/bin/projects" />

        {/* Terminal Window */}
        <div 
          style={{
            marginTop: '3rem',
            background: '#0a0a0a',
            border: '1px solid #333',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
            fontFamily: "'DM Mono', monospace",
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Terminal Header */}
          <div style={{
            background: '#1a1a1a',
            padding: '0.8rem 1rem',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #333'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'center', color: '#888', fontSize: '0.85rem' }}>
              haseeb@portfolio: ~/projects
            </div>
          </div>

          {/* Terminal Body */}
          <div style={{ display: 'flex', flexDirection: windowWidth < 768 ? 'column' : 'row', minHeight: '500px' }}>
            
            {/* Sidebar (File Explorer) */}
            <div style={{
              width: windowWidth < 768 ? '100%' : '300px',
              borderRight: windowWidth < 768 ? 'none' : '1px solid #222',
              borderBottom: windowWidth < 768 ? '1px solid #222' : 'none',
              padding: '1.5rem',
              background: '#0f0f0f'
            }}>
              <div style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '0.9rem' }}>
                $ ls -l
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {PROJECTS.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      padding: '0.6rem 0.8rem',
                      cursor: 'pointer',
                      background: activeIndex === i ? 'rgba(74,222,128,0.1)' : 'transparent',
                      color: activeIndex === i ? '#4ade80' : '#888',
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.85rem',
                    }}
                    onMouseOver={(e) => {
                      if (activeIndex !== i) e.currentTarget.style.color = '#ccc'
                    }}
                    onMouseOut={(e) => {
                      if (activeIndex !== i) e.currentTarget.style.color = '#888'
                    }}
                  >
                    <span>📁</span> 
                    {formatDirName(p.title)}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content (Terminal Output) */}
            <div style={{ flex: 1, padding: '2rem', background: '#0a0a0a', color: '#e5e5e5', overflowY: 'auto' }}>
              <div style={{ marginBottom: '2rem', color: '#4ade80', fontSize: '0.9rem' }}>
                <span style={{ color: '#fff' }}>haseeb@portfolio</span>:<span style={{ color: '#3b82f6' }}>~/projects</span>$ cd {formatDirName(activeProject.title)}
                <br/>
                <span style={{ color: '#fff' }}>haseeb@portfolio</span>:<span style={{ color: '#3b82f6' }}>~/projects/{formatDirName(activeProject.title)}</span>$ cat details.json
              </div>

              {/* JSON Syntax Highlighting */}
              <div style={{ color: '#d4d4d4', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <span style={{ color: '#ffd700' }}>&#123;</span>
                <div style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9cdcfe' }}>"name"</span>: <span style={{ color: '#ce9178' }}>"{activeProject.title}"</span>,
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9cdcfe' }}>"category"</span>: <span style={{ color: '#ce9178' }}>"{activeProject.category}"</span>,
                  </div>
                  {activeProject.featured && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ color: '#9cdcfe' }}>"featured"</span>: <span style={{ color: '#569cd6' }}>true</span>,
                    </div>
                  )}
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9cdcfe' }}>"description"</span>: <span style={{ color: '#ce9178' }}>"{activeProject.desc}"</span>,
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: '#9cdcfe' }}>"tech_stack"</span>: <span style={{ color: '#ffd700' }}>[</span>
                    <div style={{ paddingLeft: '1.5rem' }}>
                      {activeProject.tech.map((t, i) => (
                        <div key={t}><span style={{ color: '#ce9178' }}>"{t}"</span>{i < activeProject.tech.length - 1 ? ',' : ''}</div>
                      ))}
                    </div>
                    <span style={{ color: '#ffd700' }}>]</span>,
                  </div>
                  
                  {activeProject.highlights && activeProject.highlights.length > 0 && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ color: '#9cdcfe' }}>"highlights"</span>: <span style={{ color: '#ffd700' }}>[</span>
                      <div style={{ paddingLeft: '1.5rem' }}>
                        {activeProject.highlights.map((h, i) => (
                          <div key={i} style={{ marginBottom: '0.3rem' }}>
                            <span style={{ color: '#ce9178' }}>"{h}"</span>{i < activeProject.highlights.length - 1 ? ',' : ''}
                          </div>
                        ))}
                      </div>
                      <span style={{ color: '#ffd700' }}>]</span>,
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ color: '#9cdcfe' }}>"links"</span>: <span style={{ color: '#ffd700' }}>&#123;</span>
                    <div style={{ paddingLeft: '1.5rem', display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                      {activeProject.demo && activeProject.demo !== '#' && (
                        <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'underline' }}>
                          "live_demo"
                        </a>
                      )}
                      {activeProject.github && (
                        <a href={activeProject.github === '#' ? 'https://github.com/haseebahmedpk' : activeProject.github} target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', textDecoration: 'underline' }}>
                          "github_repo"
                        </a>
                      )}
                    </div>
                    <span style={{ color: '#ffd700' }}>&#125;</span>
                  </div>
                </div>
                <span style={{ color: '#ffd700' }}>&#125;</span>
              </div>
              <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', color: '#4ade80', fontSize: '0.9rem' }}>
                 <span style={{ color: '#fff' }}>haseeb@portfolio</span>:<span style={{ color: '#3b82f6' }}>~/projects/{formatDirName(activeProject.title)}</span>$ <span style={{ display: 'inline-block', width: '8px', height: '17px', background: '#ccc', marginLeft: '6px', animation: 'blink 1s step-end infinite' }} />
              </div>
            </div>
          </div>
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </section>
  )
}