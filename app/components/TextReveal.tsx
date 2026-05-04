'use client'

import { motion } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/animations'

interface TextRevealProps {
  text: string
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function TextReveal({ text, delay = 0, className, style }: TextRevealProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 20, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, idx) => (
        <span key={idx} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span variants={child} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
