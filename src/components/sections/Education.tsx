import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Education({ num }: Props) {
  return (
    <Section id="education" num={num} title="Education" delay={80}>
      <div className="edu-card">
        <div>
          <div className="edu-deg">{DATA.education.degree}</div>
          <div className="edu-sch">{DATA.education.school}</div>
        </div>
        <div className="edu-yr">{DATA.education.period}</div>
      </div>
    </Section>
  )
}
