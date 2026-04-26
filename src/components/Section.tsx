import { useRef, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  id: string
  num: number
  title: string
  children: ReactNode
  delay?: number
}

export function Section({ id, num, title, children, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section
      id={id}
      ref={ref}
      className="reveal"
      data-screen-label={`${String(num).padStart(2, '0')} ${title}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="sec-label">
        <span className="sec-num">{String(num).padStart(2, '0')}</span>
        <span className="sec-title">{title}</span>
        <div className="sec-line" />
      </div>
      {children}
    </section>
  )
}
