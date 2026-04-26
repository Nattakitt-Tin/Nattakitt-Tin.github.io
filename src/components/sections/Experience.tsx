import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Experience({ num }: Props) {
  return (
    <Section id="experience" num={num} title="Experience" delay={120}>
      <div className="exp-list">
        {DATA.experience.map((e, i) => (
          <div key={i} className="exp-item">
            <div className="exp-spine">
              <div className="exp-dot" />
              {i < DATA.experience.length - 1 && <div className="exp-line" />}
            </div>
            <div>
              <div className="exp-role">
                {e.role}{' '}
                <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>· {e.team}</span>
              </div>
              <div className="exp-sub">
                <span className="exp-co">{e.company}</span>
                <span className="exp-badge">{e.period}</span>
              </div>
              <div className="exp-bullets">
                {e.bullets.map((b, j) => (
                  <div key={j} className="exp-bullet">
                    <span className="bullet-arrow">▶</span>{b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
