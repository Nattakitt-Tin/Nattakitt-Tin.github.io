import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Tools({ num }: Props) {
  return (
    <Section id="tools" num={num} title="Util Tools" delay={100}>
      <div className="tools-grid">
        {DATA.tools.map((t, i) => (
          <div key={i} className="tool-card">
            <div className="tool-icon">{t.icon}</div>
            <div className="tool-name">{t.name}</div>
            <div className="tool-desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
