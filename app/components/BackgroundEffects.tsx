'use client'

import dynamic from 'next/dynamic'

/* Dynamic import with SSR disabled — WebGL requires browser APIs */
const WebGLShader = dynamic(() => import('./WebGLShader'), { ssr: false })

export default function BackgroundEffects() {
  return (
    <>
      {/* WebGL fluid gradient */}
      <WebGLShader />

      {/* Grain / noise overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          opacity: 0.03,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
    </>
  )
}
