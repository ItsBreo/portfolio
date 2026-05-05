'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const { resolvedTheme } = useTheme()
  
  // Main cursor ring
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.5 })
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.5 })

  // Tiny precision dot
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const smoothDotX = useSpring(dotX, { damping: 30, stiffness: 600 })
  const smoothDotY = useSpring(dotY, { damping: 30, stiffness: 600 })

  useEffect(() => {
    setMounted(true)
    
    if (
      window.innerWidth < 768 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const moveCursor = (e: MouseEvent) => {
      // Main ring (32x32) needs -16 to center
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      // Dot (4x4) needs -2 to center
      dotX.set(e.clientX - 2)
      dotY.set(e.clientY - 2)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.magnetic ||
        target.closest('[data-magnetic]')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY, dotX, dotY])

  if (
    !mounted ||
    typeof window === 'undefined' ||
    window.innerWidth < 768 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return null
  }

  const isDark = resolvedTheme === 'dark'
  const cursorColor = isDark ? 'var(--accent)' : '#3730A3'

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, a, button { cursor: none !important; }
        }
      `}</style>
      {/* Main outer ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `2px solid ${cursorColor}`,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: isDark ? 'difference' : 'normal',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? cursorColor : 'transparent',
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Tiny dot in the center for precision */}
      <motion.div
        style={{
          x: smoothDotX,
          y: smoothDotY,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: cursorColor,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: isDark ? 'difference' : 'normal',
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  )
}
