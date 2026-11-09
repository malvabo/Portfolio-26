"use client"

import { useEffect, useRef } from "react"

// Small inline circle after the word "AI" in the homepage hero: a slow, grainy
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
  vec2 uv = gl_FragCoord.xy / u_res;
  // rotate the flow like the reference's tilted plane
  float r = -1.05;
  uv = mat2(cos(r), -sin(r), sin(r), cos(r)) * (uv - 0.5);
  float t = u_time * 0.3;
  vec2 q = vec2(fbm(uv * 1.5 + vec2(0.0, t)), fbm(uv * 1.5 + vec2(5.2, -t * 0.7)));
  float n = fbm(uv * 1.5 + 1.5 * q + vec2(t * 0.4, 0.0));
  // water-like bands
  float w = 0.5 + 0.5 * sin(n * 6.0 + uv.y * 3.0 - t * 1.2);
  vec3 col = mix(C3, C1, smoothstep(0.25, 0.75, n));
  col = mix(col, C2, smoothstep(0.55, 1.0, w * n * 1.6));
  // grain
  col += (hash(gl_FragCoord.xy + fract(u_time) * 100.0) - 0.5) * 0.12;
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
