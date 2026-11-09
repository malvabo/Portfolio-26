"use client"

import { useEffect, useRef } from "react"

// Small inline circle after the word "AI" in the homepage hero: a dark, moving
// shader gradient ("Nighty night": #606080, #8d7dca, #212121, water-like flow).

const vertexShader = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const fragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
const vec3 C1 = vec3(0.376, 0.376, 0.502); // #606080
const vec3 C2 = vec3(0.553, 0.490, 0.792); // #8d7dca
const vec3 C3 = vec3(0.129, 0.129, 0.129); // #212121

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res - 0.5;
  float t = u_time;
  // slowly warped field so the light flows like liquid
  vec2 w = vec2(fbm(uv * 2.2 + vec2(t * 0.35, 0.0)), fbm(uv * 2.2 + vec2(3.1, -t * 0.3)));
  vec2 p = uv + (w - 0.5) * 0.45;
  // a violet glow that drifts round the circle, and a fainter grey one opposite
  vec2 g1 = 0.24 * vec2(cos(t * 0.9), sin(t * 0.7));
  vec2 g2 = 0.26 * vec2(cos(t * 0.6 + 3.1), sin(t * 0.8 + 2.0));
  float l1 = smoothstep(0.42, 0.0, length(p - g1));
  float l2 = smoothstep(0.38, 0.0, length(p - g2));
  vec3 col = C3;
  col = mix(col, C1, l2 * 0.75);
  col = mix(col, C2, l1 * 0.9);
  gl_FragColor = vec4(col, 1.0);
}
`

export function AiOrb() {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(program, "a_pos")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)
    const uTime = gl.getUniformLocation(program, "u_time")
    const uRes = gl.getUniformLocation(program, "u_res")

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const size = Math.max(1, Math.round(wrap.getBoundingClientRect().width * dpr))
      canvas.width = size
      canvas.height = size
      gl.viewport(0, 0, size, size)
      gl.uniform2f(uRes, size, size)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const start = performance.now()
    let frame = 0
    const render = () => {
      gl.uniform1f(uTime, reduceMotion ? 4 : (performance.now() - start) / 1000 + 4)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      if (!reduceMotion) frame = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [])

  return (
    <span
      ref={wrapRef}
      aria-hidden
      className="relative inline-block align-[-0.12em] ml-[0.18em] mr-[0.06em] h-[0.92em] w-[0.92em] rounded-full overflow-hidden bg-[#212121] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </span>
  )
}
