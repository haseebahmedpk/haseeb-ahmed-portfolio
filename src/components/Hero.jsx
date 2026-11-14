import React, { useState, useEffect } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from 'react-icons/fa6'
import '../styles/hero.css'
import '../styles/components.css'

const ROLES = [
  'AI Engineer',
  'Automation Specialist',
  'Full Stack Developer',
]

const SOCIALS = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/haseebahmedpk',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haseebahmedpk97',
  },
  {
    icon: <FaXTwitter />,
    label: 'Twitter',
    href: 'https://twitter.com/haseebahmedpk97',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=haseebahmedpk97@gmail.com',
  },
]

function TypeWriter({ words }) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const speed = deleting ? 55 : 115

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1300)
          return
        }
        setCharIdx(c => c + 1)
      } else {
        setText(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          return
        }
        setCharIdx(c => c - 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, wordIdx, charIdx, deleting, words])

  return (
    <span style={{ color: 'var(--accent-light)' }}>
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default function Hero() {
  const base = import.meta.env.BASE_URL

  return (
    <section id="home" className="hero">
      <div className="grid-overlay" />
      <div className="hero-corner-deco" />

      <div className="hero-inner">
        <div className="hero-grid">

          {/* ── Left: Text ── */}
          <div style={{ animation: 'fadeInUp 0.8s ease both' }}>


            <h1 className="hero-heading">
              <span className="hero-greeting">Hi, I'm </span>
              <span className="hero-name">Haseeb Ahmed</span>
            </h1>

            <p className="hero-typewriter">
              <TypeWriter words={ROLES} />
            </p>

            <p className="hero-desc">
              Computer Science graduate with a research-driven interest in Artificial Intelligence, autonomous systems, and AGI. Skilled in Python, LangChain, machine learning, and full-stack application development.
            </p>

            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects →
              </button>
              <a href={`${base}assets/haseeb_ahmed_cv.pdf`} download="haseeb_ahmed_cv.pdf" className="btn-outline">
                Download CV ↓
              </a>
            </div>

            <div className="hero-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  aria-label={s.label}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Avatar ── */}
          <div className="avatar-wrapper" style={{ animation: 'fadeInUp 0.8s ease 0.2s both' }}>
            <div className="avatar-container">
              <div className="avatar-ring" />
              <div className="avatar-ring-outer" />
              <div className="avatar-circle">
                <img
                  src={`${base}assets/profile.png`}
                  alt="Haseeb Ahmed — Full Stack Developer"
                  loading="eager"
                  decoding="async"
                  width="400"
                  height="400"
                  className="profile-image"
                />
              </div>
              <div className="floating-badge badge-react">Machine Learning</div>
              <div className="floating-badge badge-node">Gen AI & LLMs</div>
              <div className="floating-badge badge-mongo">AI Automation</div>
            </div>
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span className="scroll-label">Scroll</span>
      </div>

      </section>
  )
}
