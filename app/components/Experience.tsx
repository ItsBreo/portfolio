'use client'

import { motion } from 'framer-motion'
import { experience, certifications } from '@/lib/data'
import { EASE_OUT_EXPO } from '@/lib/animations'

/* ─── SVG Icons for Certifications ─── */
const s = 20 // default icon size

const iconMap: Record<string, React.ReactNode> = {
  graduation: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  ),
  docker: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.687 11.687 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.33 12.33 0 0 0 3.823-1.389 10.27 10.27 0 0 0 2.61-2.136c1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  ),
  react: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.065-.838.196C4.805 2.22 4.363 4.26 4.92 7.095c-2.649.826-4.42 2.148-4.42 3.89 0 1.742 1.77 3.065 4.42 3.892-.557 2.835-.1 4.874 1.445 5.565.246.13.528.195.838.195 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .592-.065.838-.196 1.545-.69 2.002-2.73 1.445-5.565 2.649-.827 4.42-2.15 4.42-3.89 0-1.742-1.77-3.064-4.42-3.89.557-2.835.1-4.876-1.445-5.567a1.9 1.9 0 0 0-.838-.195zM6.116 20.356c-.194.077-.387.077-.53 0-.72-.32-.942-1.868-.578-3.877a23 23 0 0 0 2.692.53 23 23 0 0 0 1.742 2.124c-1.262 1.172-2.519 1.768-3.326 1.223zm-.585-4.98a22.8 22.8 0 0 0 .97 1.67 25.4 25.4 0 0 1-1.892-.346c.24-.574.522-1.164.847-1.77.025.15.05.3.075.446zm-1.07-3.39c1.008.277 2.1.48 3.253.6a24.3 24.3 0 0 1 1.728-2.124 24.3 24.3 0 0 1-1.728-2.123c-1.154.119-2.245.323-3.252.6-.19.554-.347 1.12-.47 1.705a12 12 0 0 0 .47 1.342zm1.08-3.39a25.4 25.4 0 0 1 1.891-.345c-.32.551-.65 1.117-.97 1.672-.024.146-.05.295-.074.444a22.6 22.6 0 0 0-.847-1.77zM12 8.1a22 22 0 0 0-1.282 1.476A26 26 0 0 1 12 9.5c.434.01.868.034 1.282.075A22.3 22.3 0 0 0 12 8.1zm5.452 3.884a24.3 24.3 0 0 1-1.728 2.123c1.154-.12 2.245-.323 3.252-.6.19-.554.347-1.12.47-1.705a12 12 0 0 0-.47-1.342c-1.008-.277-2.1-.48-3.252-.6a24.3 24.3 0 0 1 1.728 2.124zm1.07-3.39a25.4 25.4 0 0 1-1.891.345c.32-.551.65-1.117.97-1.672.024-.146.05-.295.074-.444.314.59.608 1.17.847 1.77zm-2.98 5.402a22.3 22.3 0 0 0 1.282-1.476A26 26 0 0 1 12 14.5a26 26 0 0 1-1.282-.075 22 22 0 0 0 1.282 1.476zm-1.563 2.22a23 23 0 0 0 1.742-2.124 25 25 0 0 0 2.691-.53c.365 2.01.143 3.558-.577 3.877a.55.55 0 0 1-.53 0c-.807.544-2.064-.05-3.326-1.223zm8.79-2.86c0 .967-1.17 1.923-3.133 2.592a12 12 0 0 0-.47-1.342c.963-.277 1.84-.62 2.61-1.025a4.1 4.1 0 0 0 .993-.225zm0-4.72c0-.968-1.17-1.923-3.133-2.593.156.436.3.886.43 1.342-.963.277-1.84.62-2.61 1.025a4.1 4.1 0 0 0-.993.226c1.963-.67 3.133-1.625 3.133-2.593-.302.068-.62.124-.956.168z" />
    </svg>
  ),
  angular: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />
    </svg>
  ),
  analytics: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 6-6" />
      <path d="M17 10h4v4" />
    </svg>
  ),
  laravel: (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.074.26-.19.326l-9.053 5.22a.32.32 0 0 1-.085.042l-.032.01a.35.35 0 0 1-.186 0l-.033-.01a.3.3 0 0 1-.086-.043L.478 18.79a.376.376 0 0 1-.189-.326V3.467c0-.036.005-.07.014-.1.003-.012.01-.023.014-.035a.3.3 0 0 1 .028-.06.3.3 0 0 1 .03-.038c.006-.01.015-.016.023-.025.01-.012.021-.02.033-.03a.3.3 0 0 1 .035-.024L5.01.542a.37.37 0 0 1 .378 0l4.553 2.613c.013.007.023.017.034.024.013.01.024.02.034.03.008.01.016.017.023.026.01.013.02.025.029.038a.3.3 0 0 1 .028.06c.005.012.01.023.014.035.01.031.014.065.014.1v9.652l3.779-2.174V5.529c0-.036.005-.07.014-.1a.2.2 0 0 1 .014-.036.36.36 0 0 1 .029-.06.3.3 0 0 1 .029-.037c.006-.01.016-.017.023-.025.012-.012.022-.021.034-.03a.3.3 0 0 1 .034-.025l4.554-2.614a.37.37 0 0 1 .378 0l4.553 2.614c.013.007.024.017.035.024.012.01.023.02.033.03.008.009.017.016.023.025.011.013.02.025.03.038a.4.4 0 0 1 .028.06.2.2 0 0 1 .013.036" />
    </svg>
  ),
}

function CertIcon({ name }: { name: string }) {
  return (
    <span style={{ color: 'var(--accent)', display: 'flex' }}>
      {iconMap[name] || (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )}
    </span>
  )
}

/* ─── SVGs for section headings ─── */
function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function CertificateIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
      <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
      <path d="M14 2v6h6" />
      <circle cx="7" cy="16" r="3" />
      <path d="M5.5 19L4 22l3-1 3 1-1.5-3" />
    </svg>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
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
          Trayectoria
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
            marginBottom: '3rem',
          }}
        >
          Experiencia y formación
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 4vw, 4rem)',
          }}
          className="experience-grid"
        >
          {/* ─── Timeline column ─── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <BriefcaseIcon />
              Experiencia
            </motion.h3>

            <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
              {/* Vertical line */}
              <div
                style={{
                  position: 'absolute',
                  left: '4px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  background: 'linear-gradient(180deg, var(--accent), var(--blue), transparent)',
                  borderRadius: '2px',
                }}
              />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + index * 0.12,
                    ease: EASE_OUT_EXPO,
                  }}
                  style={{
                    position: 'relative',
                    marginBottom: index < experience.length - 1 ? '2rem' : 0,
                  }}
                >
                  {/* Dot on the timeline */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      top: '6px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: index === 0 ? 'var(--accent)' : 'var(--border2)',
                      border: '2px solid var(--bg)',
                      boxShadow: index === 0 ? '0 0 8px var(--glow)' : 'none',
                    }}
                  />

                  <div
                    className="glass"
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '16px',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)'
                      e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.boxShadow = 'var(--glass-shadow)'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {exp.period}
                    </span>
                    <h4
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        marginTop: '0.25rem',
                      }}
                    >
                      {exp.role}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 400,
                        color: 'var(--text3)',
                        marginTop: '0.1rem',
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 300,
                        color: 'var(--text2)',
                        lineHeight: 1.7,
                        marginTop: '0.6rem',
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                        marginTop: '0.75rem',
                      }}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 500,
                            color: 'var(--accent)',
                            background: 'var(--glow)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '100px',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Certifications column ─── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <CertificateIcon />
              Certificaciones
            </motion.h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + index * 0.08,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="glass"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'default',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--glass-shadow)'
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CertIcon name={cert.icon} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.2rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          color: 'var(--text3)',
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span
                        style={{
                          width: '3px',
                          height: '3px',
                          borderRadius: '50%',
                          background: 'var(--border2)',
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: 'var(--accent)',
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Responsive: stack columns on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
