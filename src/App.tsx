import { useState, useEffect } from 'react'
import { Canvas } from './components/Canvas'
import { Sidebar } from './components/Sidebar'
import { TweakPanel } from './components/TweakPanel'
import { ChatWidget } from './components/ChatWidget'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Tools } from './components/sections/Tools'
import { Education } from './components/sections/Education'
import { Publication } from './components/sections/Publication'
import { Contact } from './components/sections/Contact'
import { SECTIONS, TWEAK_DEFAULTS } from './data/resume'
import { DATA } from './data/resume'
import type { Theme, Tweaks } from './types'
import './styles/main.css'

const capybara = '/capybara.png'

export function App() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('resume-theme') as Theme) || 'dark'
  )
  const [active, setActive] = useState('about')
  const [tweaks, setTweaks] = useState<Tweaks>(TWEAK_DEFAULTS)
  const [tweaksOpen, setTweaksOpen] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('resume-theme', theme)
  }, [theme])

  useEffect(() => {
    const r = parseInt(tweaks.accent.slice(1, 3), 16)
    const g = parseInt(tweaks.accent.slice(3, 5), 16)
    const b = parseInt(tweaks.accent.slice(5, 7), 16)
    document.documentElement.style.setProperty('--accent', tweaks.accent)
    document.documentElement.style.setProperty('--accent-dim', `rgba(${r},${g},${b},0.12)`)
    document.documentElement.style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.35)`)
  }, [tweaks.accent])

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOpen(true)
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOpen(false)
    }
    window.addEventListener('message', handler)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')

    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-25% 0px -65% 0px' }
    )
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => { window.removeEventListener('message', handler); obs.disconnect() }
  }, [])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const gapClass = {
    compact: 'sec-gap-compact',
    comfortable: 'sec-gap-comfortable',
    spacious: 'sec-gap-spacious',
  }[tweaks.density]

  const updateAccent = (c: string) => setTweaks(t => ({ ...t, accent: c }))
  const updateDensity = (d: Tweaks['density']) => setTweaks(t => ({ ...t, density: d }))

  return (
    <div className="layout">
      {/* Mobile top bar */}
      <div className="mobile-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={capybara} alt="Capybara" style={{ width: 36, height: 36, objectFit: 'contain', imageRendering: 'pixelated' }} />
          <div>
            <div className="mobile-name">{DATA.name.split(' ')[0]} W.</div>
            <div className="mobile-badge"><span className="blink">█</span> SWE</div>
          </div>
        </div>
        <button className="mobile-theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '◐' : '○'}
        </button>
      </div>

      {/* Mobile bottom nav */}
      <div className="mobile-nav">
        <div className="mobile-nav-inner">
          {SECTIONS.map(s => (
            <button key={s.id} className={`mob-nav-item${active === s.id ? ' active' : ''}`} onClick={() => scrollTo(s.id)}>
              <div className="mob-nav-dot" />
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <Sidebar active={active} theme={theme} onNavClick={scrollTo} onThemeToggle={toggleTheme} />

      <main className={`main ${gapClass}`}>
        <About       num={1} />
        <Experience  num={2} />
        <Projects    num={3} />
        <Skills      num={4} />
        <Tools       num={5} />
        <Education   num={6} />
        <Publication num={7} />
        <Contact     num={8} />
      </main>

      <TweakPanel
        open={tweaksOpen}
        tweaks={tweaks}
        theme={theme}
        onAccent={updateAccent}
        onDensity={updateDensity}
        onTheme={setTheme}
      />

      <ChatWidget />
      <Canvas />
    </div>
  )
}
