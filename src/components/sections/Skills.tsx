import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Skills({ num }: Props) {
  return (
    <Section id="skills" num={num} title="Skills" delay={100}>
      <div className="skills-grid">
        {DATA.skills.map((cat, i) => (
          <div key={i}>
            <div className="skill-cat">{cat.cat}</div>
            <div className="tags-row">
              {cat.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
