import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Publication({ num }: Props) {
  return (
    <Section id="publication" num={num} title="Publication" delay={80}>
      <a href={DATA.publication.url} target="_blank" rel="noreferrer" className="pub-card">
        <div className="pub-jrn">{DATA.publication.journal}</div>
        <div className="pub-title">{DATA.publication.title}</div>
        <div className="pub-lnk">↗ view article</div>
      </a>
    </Section>
  )
}
