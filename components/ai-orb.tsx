"use client"

import { useEffect, useRef } from "react"

// Small inline circle after the word "AI" in the homepage hero: the swirling
// glow shader from the /human page, in the "Nighty night" colours
// (#8d7dca, #606080 on #212121).

const vertexShader = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const fragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;
uniform vec3  u_color1;
uniform vec3  u_color2;

mat2 rot2(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float map(vec3 p) {
  float t = u_time;
  p.xz = rot2(t * 0.4) * p.xz;
  p.xy = rot2(t * 0.3) * p.xy;
  vec3 q = p * 2.0 + t;
  return length(p + sin(t * 0.7)) * log(length(p) + 1.0)
         + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
}

void main() {
  vec2 uv = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
  float r = length(uv);
  float mask = smoothstep(1.01, 0.96, r);

  vec3 ro = vec3(0.0, 0.0, 2.0);
  vec3 rd = normalize(vec3(uv * 0.78, -1.3));

  vec3 col = vec3(0.0);
  float stepSize = 0.065;

  for (int i = 0; i < 35; i++) {
    vec3 p = ro + rd * (float(i) * stepSize);
    float m = abs(map(p));
    float fi = float(i) / 35.0;
    float glow = 0.0011 / (m * m + 0.008);
    col += mix(u_color1, u_color2, fi * 0.5) * glow;
  }

  float lum = dot(col, vec3(0.299, 0.587, 0.114)) + 0.001;
  col = col / lum * (1.0 - exp(-lum * 0.55));
  col = pow(max(col, vec3(0.0)), vec3(0.4545));

  col *= mask;
  gl_FragColor = vec4(col, mask);
}
`

export function AiOrb() {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false, alpha: true })
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
    const uRes = gl.getUniformLocation(program, "u_resolution")
    gl.uniform3f(gl.getUniformLocation(program, "u_color1"), 0.553, 0.490, 0.792) // #8d7dca
    gl.uniform3f(gl.getUniformLocation(program, "u_color2"), 0.376, 0.376, 0.502) // #606080
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

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
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.uniform1f(uTime, reduceMotion ? 4 : ((performance.now() - start) / 1000) * 0.9 + 4)
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
