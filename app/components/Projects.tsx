'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'

/* Inline SVG GitHub icon */
function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '6rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '0.5rem',
          }}
        >
          Proyectos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: '2.5rem',
          }}
        >
          Lo que he construido
        </motion.h2>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.1,
                ease: EASE_OUT_EXPO,
              }}
              className="glass"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)'
              }}
            >
              {/* Top accent gradient bar */}
              <div
                style={{
                  height: '3px',
                  background:
                    'linear-gradient(90deg, var(--accent), var(--blue), var(--accent2))',
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 4s ease infinite',
                }}
              />

              {/* Card content */}
              <div
                style={{
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: '1rem',
                }}
              >
                {/* Header */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 400,
                        color: 'var(--accent)',
                        lineHeight: 1.4,
                      }}
                    >
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 300,
                    color: 'var(--text2)',
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: 'var(--accent)',
                        background: 'var(--glow)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '100px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginTop: '0.5rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        color: 'var(--text3)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--accent)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text3)')
                      }
                    >
                      <GithubIcon size={15} />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Demo - ${project.title}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        fontWeight: 400,
                        color: 'var(--text3)',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--accent)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text3)')
                      }
                    >
                      <ExternalLink size={15} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
