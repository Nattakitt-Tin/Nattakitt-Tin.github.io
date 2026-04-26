import { useState } from 'react'
import { Section } from '../Section'
import { DATA } from '../../data/resume'

interface Props { num: number }

export function Contact({ num }: Props) {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${DATA.contact.email}?subject=Hello from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.msg)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <Section id="contact" num={num} title="Contact" delay={80}>
      <div className="contact-section">
        <a className="dl-btn" href="/cv.pdf" download="Nattakitt_CV.pdf">
          ▼ DOWNLOAD CV (PDF)
        </a>
        <form className="cf-form" onSubmit={submit}>
          <div className="cf-row">
            <div className="cf-field">
              <label className="cf-label">NAME</label>
              <input className="cf-input" value={form.name} onChange={e => set('name', e.target.value)} required placeholder="Your name" />
            </div>
            <div className="cf-field">
              <label className="cf-label">EMAIL</label>
              <input className="cf-input" type="email" value={form.email} onChange={e => set('email', e.target.value)} required placeholder="your@email.com" />
            </div>
          </div>
          <div className="cf-field">
            <label className="cf-label">MESSAGE</label>
            <textarea className="cf-textarea" value={form.msg} onChange={e => set('msg', e.target.value)} required placeholder="Say hello..." />
          </div>
          {sent
            ? <div className="cf-sent">✓ OPENING MAIL CLIENT...</div>
            : <button className="cf-submit" type="submit">▶ SEND MESSAGE</button>
          }
        </form>
      </div>
    </Section>
  )
}
