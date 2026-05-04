'use client'

/* Subtle gradient divider between sections */
export default function SectionDivider() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}
    >
      <div
        style={{
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, var(--border2) 20%, var(--accent) 50%, var(--border2) 80%, transparent)',
          opacity: 0.4,
        }}
      />
    </div>
  )
}
