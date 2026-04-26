import { useEffect } from 'react'

interface Particle { x: number; y: number; sz: number; vx: number; vy: number; a: number }

export function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('pixel-canvas') as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const particles: Particle[] = []

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const makeParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      sz: Math.random() < 0.6 ? 2 : 4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.2 - Math.random() * 0.3,
      a: Math.random(),
    })

    for (let i = 0; i < 60; i++) particles.push(makeParticle())

    const getAccent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#F59E0B'

    let rafId: number
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const accent = getAccent()
      particles.forEach(p => {
        ctx.globalAlpha = p.a * 0.35
        ctx.fillStyle = accent
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.sz, p.sz)
        p.x += p.vx
        p.y += p.vy
        p.a -= 0.003
        if (p.a <= 0 || p.y < -10) {
          Object.assign(p, makeParticle(), { y: H + 4, a: Math.random() * 0.6 + 0.1 })
        }
      })
      ctx.globalAlpha = 1
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
