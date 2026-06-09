"use client"

import { useEffect, useRef } from "react"

const vertexShader = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
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
    float glow = 0.0038 / (m * m + 0.008);
    col += mix(u_color1, u_color2, fi * 0.5) * glow;
  }

  float lum = dot(col, vec3(0.299, 0.587, 0.114)) + 0.001;
  col = col / lum * (1.0 - exp(-lum * 1.1));
  col = pow(max(col, vec3(0.0)), vec3(0.4545));

  col *= mask;
  gl_FragColor = vec4(col, mask);
}
`

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

export function HumanShaderOrb({ size = 95 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", { premultipliedAlpha: false, alpha: true })
    if (!gl) return

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader)
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader)
    if (!vertex || !fragment) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program)
      return
    }

    const position = gl.getAttribLocation(program, "a_pos")
    const time = gl.getUniformLocation(program, "u_time")
    const resolution = gl.getUniformLocation(program, "u_resolution")
    const color1 = gl.getUniformLocation(program, "u_color1")
    const color2 = gl.getUniformLocation(program, "u_color2")

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    const canvasSize = Math.round(size * pixelRatio)
    canvas.width = canvasSize
    canvas.height = canvasSize
    gl.viewport(0, 0, canvasSize, canvasSize)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const startedAt = performance.now()

    function render(now: number) {
      const t = ((now - startedAt) / 1000) * 0.35

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.uniform1f(time, t)
      gl.uniform2f(resolution, canvasSize, canvasSize)
      gl.uniform3fv(color1, new Float32Array([0.38, 0.14, 0.98]))
      gl.uniform3fv(color2, new Float32Array([0.08, 0.04, 0.32]))
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.enableVertexAttribArray(position)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertex)
      gl.deleteShader(fragment)
    }
  }, [size])

  return (
    <canvas
      ref={canvasRef}
      aria-label="Me as a human"
      role="img"
      style={{ width: size, height: size }}
      className="rounded-full"
    />
  )
}
