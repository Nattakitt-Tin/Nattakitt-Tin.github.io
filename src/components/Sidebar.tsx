import { PixelAvatar } from './PixelAvatar'
import { DATA, SECTIONS } from '../data/resume'
import type { Theme } from '../types'

interface Props {
  active: string
  theme: Theme
  onNavClick: (id: string) => void
  onThemeToggle: () => void
}

export function Sidebar({ active, theme, onNavClick, onThemeToggle }: Props) {
  return (
    <aside className="sidebar">
      <div className="avatar-area">
        <PixelAvatar />
        <div>
          <div className="name-text">{DATA.name}</div>
          <div className="status-badge">
            <span className="blink">█</span> {DATA.role}
          </div>
        </div>
      </div>

      <nav className="nav">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`nav-item${active === s.id ? ' active' : ''}`}
            onClick={() => onNavClick(s.id)}
          >
            <span className="nav-num">{String(i + 1).padStart(2, '0')}</span>
            {s.label}
          </button>
        ))}
      </nav>

      <div className="contacts">
        <a href={`tel:${DATA.contact.phone}`} className="c-link">
          <span className="c-icon">✆</span>{DATA.contact.phone}
        </a>
        <a href={`mailto:${DATA.contact.email}`} className="c-link">
          <span className="c-icon">@</span>{DATA.contact.email}
        </a>
        <a href={`https://${DATA.contact.github}`} target="_blank" rel="noreferrer" className="c-link">
          <span className="c-icon">⌥</span>{DATA.contact.github}
        </a>
        <a href={`https://${DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="c-link">
          <span className="c-icon">in</span>linkedin
        </a>
      </div>

      <button className="theme-btn" onClick={onThemeToggle} style={{ marginTop: 'auto' }}>
        {theme === 'dark' ? '◐ DARK' : '○ LIGHT'}
      </button>
    </aside>
  )
}
