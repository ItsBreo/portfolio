'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'
import ProjectCard from './ProjectCard'

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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              EASE_OUT_EXPO={EASE_OUT_EXPO}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
