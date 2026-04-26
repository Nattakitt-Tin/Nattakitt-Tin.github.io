import { useState, useEffect } from 'react'

const PHRASES = ['fintech', 'banking', 'microservices', 'AI / ML', 'real-time']

export function GlitchHero() {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const word = PHRASES[idx]
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        return () => clearTimeout(t)
      } else {
        setGlitching(true)
        const t = setTimeout(() => {
          setGlitching(false)
          setIdx(i => (i + 1) % PHRASES.length)
          setTyping(true)
        }, 350)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, typing, idx])

  return (
    <h1 className="hero-h">
      Building the<br />future of{' '}
      <em>
        <span
          className={`glitch-wrap${glitching ? ' glitching' : ''}`}
          data-text={displayed || ' '}
        >
          {displayed || ' '}
        </span>
        <span className="cursor" />
      </em>
    </h1>
  )
}
