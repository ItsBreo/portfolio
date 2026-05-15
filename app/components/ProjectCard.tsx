'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Users } from 'lucide-react'

// SVG Icons
function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

interface ProjectCardProps {
  project: any
  index: number
  EASE_OUT_EXPO: number[]
}

export default function ProjectCard({ project, index, EASE_OUT_EXPO }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px var(--glow)' }}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.1,
        ease: EASE_OUT_EXPO as any,
      }}
      style={{
        borderRadius: '20px',
      }}
    >
      <div
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--glass-shadow)',
        }}
      >
        {/* Project Image */}
        {project.image && (
          <div
            style={{
              width: '100%',
              height: '200px',
              overflow: 'hidden',
              position: 'relative',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              quality={85}
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        {/* Top accent bar if no image */}
        {!project.image && (
          <div
            style={{
              height: '2px',
              background: 'var(--accent)',
            }}
          />
        )}

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
            {project.team && project.team > 1 && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  marginTop: '0.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--text3)',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '100px',
                }}
              >
                <Users size={12} />
                Equipo de {project.team}
              </div>
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
            {project.tags.map((tag: string) => (
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
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${project.title} en GitHub`}
                whileHover={{ x: 3, color: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  color: 'var(--text3)',
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={15} />
                Código
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo de ${project.title}`}
                whileHover={{ x: 3, color: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  color: 'var(--text3)',
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={15} />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
