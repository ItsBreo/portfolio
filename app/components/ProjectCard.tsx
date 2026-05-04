'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

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
  const ref = useRef<HTMLDivElement>(null)

  // Framer motion values for 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for fluid movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  // Map mouse position to rotation angles (max 8 degrees tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    // Get mouse position relative to card center (normalized from -0.5 to 0.5)
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.1,
        ease: EASE_OUT_EXPO as any,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        borderRadius: '20px',
        cursor: 'default',
        zIndex: 1,
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      <div
        className="glass"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxShadow: 'var(--glass-shadow)',
          transform: 'translateZ(20px)', // Lift content above background
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--glass-shadow)'
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
            <motion.img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(30px)',
              }}
            />
          </div>
        )}

        {/* Top accent gradient bar if no image */}
        {!project.image && (
          <div
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent), var(--blue), var(--accent2))',
              backgroundSize: '200% 100%',
              animation: 'gradientShift 4s ease infinite',
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub - ${project.title}`}
                data-magnetic="true"
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text3)')}
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
                data-magnetic="true"
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
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text3)')}
              >
                <ExternalLink size={15} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
