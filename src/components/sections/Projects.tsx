import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Projects({ num }: Props) {
  return (
    <Section id="projects" num={num} title="Projects" delay={100}>
      <div className="projects-grid">
        {DATA.projects.map((p, i) =>
          '_placeholder' in p ? (
            <div
              key={i}
              className="proj-card"
              style={{
                border: '1px dashed var(--border)',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                minHeight: 160,
                opacity: 0.5,
              }}
            >
              <span style={{ fontFamily: 'Press Start 2P,monospace', fontSize: 16, color: 'var(--text-dim)' }}>+</span>
              <span style={{ fontFamily: 'Press Start 2P,monospace', fontSize: 7, color: 'var(--text-dim)', textAlign: 'center', lineHeight: 1.8 }}>
                MORE<br />COMING<br />SOON
              </span>
            </div>
          ) : (
            <div
              key={i}
              className="proj-card"
              onClick={() => p.link && window.open(p.link, '_blank')}
              style={{ cursor: p.link ? 'pointer' : 'default' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span className="proj-tag" style={{ margin: 0 }}>[{p.tag}]{p.link ? ' ↗' : ''}</span>
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--text-dim)' }}>{p.period}</span>
              </div>
              <div className="proj-name">{p.name}</div>
              <div style={{ fontFamily: 'Press Start 2P,monospace', fontSize: 7, color: 'var(--accent)', opacity: 0.7, marginBottom: 8 }}>{p.company}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-techs">
                {p.techs.map((t, j) => <span key={j} className="proj-tech">{t}</span>)}
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  )
}
