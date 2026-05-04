'use client'

import { useEffect, useRef, useCallback } from 'react'

/* ─────────────────────────────────────────────────────────────────
 * WebGL Shader Background — fluid organic gradient animation.
 * Uses a fragment shader with simplex-noise-based domain warping
 * for that beautiful liquid gradient effect.
 * ───────────────────────────────────────────────────────────────── */

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2  u_resolution;

  /*  Simplex-like 2D noise  */
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 0.15;

    /* Domain warping — layers of noise feeding into each other */
    float n1 = snoise(uv * 3.0 + t * 0.7);
    float n2 = snoise(uv * 2.0 - t * 0.5 + n1 * 0.5);
    float n3 = snoise(uv * 4.0 + t * 0.3 + n2 * 0.4);

    float warp = n1 * 0.4 + n2 * 0.35 + n3 * 0.25;

    /* Color palette — deep purples, blues, and accent violet
       matching the portfolio's design system */
    vec3 col1 = vec3(0.04, 0.03, 0.08);   /* deep void       */
    vec3 col2 = vec3(0.10, 0.06, 0.20);   /* dark purple      */
    vec3 col3 = vec3(0.25, 0.15, 0.55);   /* mid purple       */
    vec3 col4 = vec3(0.29, 0.36, 0.75);   /* blue accent      */
    vec3 col5 = vec3(0.45, 0.42, 0.90);   /* light purple     */

    /* Mix colours with noise */
    float p = warp * 0.5 + 0.5;
    vec3 color;
    if (p < 0.25)      color = mix(col1, col2, p / 0.25);
    else if (p < 0.5)  color = mix(col2, col3, (p - 0.25) / 0.25);
    else if (p < 0.75) color = mix(col3, col4, (p - 0.5) / 0.25);
    else                color = mix(col4, col5, (p - 0.75) / 0.25);

    /* Subtle vignette to focus the center */
    float vig = 1.0 - 0.35 * length(uv - 0.5);
    color *= vig;

    /* Keep it subtle — low opacity so content remains readable */
    gl_FragColor = vec4(color, 0.55);
  }
`

interface WebGLShaderProps {
  className?: string
  style?: React.CSSProperties
}

export default function WebGLShader({ className = '', style }: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const startTime = useRef<number>(Date.now())

  const initGL = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    })
    if (!gl) return null

    /* Compile shaders */
    const vs = gl.createShader(gl.VERTEX_SHADER)!
    gl.shaderSource(vs, VERTEX_SHADER)
    gl.compileShader(vs)

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!
    gl.shaderSource(fs, FRAGMENT_SHADER)
    gl.compileShader(fs)

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    /* Fullscreen quad */
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const pos = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    /* Enable blending for alpha */
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    return {
      gl,
      program,
      timeLoc: gl.getUniformLocation(program, 'u_time'),
      resLoc: gl.getUniformLocation(program, 'u_resolution'),
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = initGL()
    if (!ctx) return

    const { gl, timeLoc, resLoc } = ctx

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      const elapsed = (Date.now() - startTime.current) / 1000
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform2f(resLoc, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [initGL])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}
