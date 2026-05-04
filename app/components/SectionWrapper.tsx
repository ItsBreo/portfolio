'use client'

import { motion } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  delay?: number
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: EASE_OUT_EXPO,
    },
  }),
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={delay}
    >
      {children}
    </motion.section>
  )
}
