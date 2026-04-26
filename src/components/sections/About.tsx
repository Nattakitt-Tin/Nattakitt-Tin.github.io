import { Section } from '../Section'
import { GlitchHero } from '../GlitchHero'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function About({ num }: Props) {
  return (
    <Section id="about" num={num} title="About" delay={80}>
      <GlitchHero />
      <p className="hero-body" dangerouslySetInnerHTML={{ __html: DATA.summary }} />
      <div className="stats-row">
        <div className="stat-box"><div className="stat-val">4+</div><div className="stat-lbl">Years XP</div></div>
        <div className="stat-box"><div className="stat-val">2</div><div className="stat-lbl">Companies</div></div>
        <div className="stat-box"><div className="stat-val">10+</div><div className="stat-lbl">Tech Stack</div></div>
        <div className="stat-box"><div className="stat-val">1</div><div className="stat-lbl">Publication</div></div>
      </div>
    </Section>
  )
}
