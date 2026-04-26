import { useState, useRef, useEffect } from 'react'
import { SmallAvatar } from './PixelAvatar'
import { SYSTEM_PROMPT, CHAT_SUGGESTIONS } from '../data/resume'
const capybara = '/capybara.png'

interface Message {
  role: 'bot' | 'user'
  text: string
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'bot', text: "Hi! 👾 I'm Nattakitt's AI secretary. Ask me anything about his experience, skills, or projects!" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showSugs, setShowSugs] = useState(true)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [msgs, loading])

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    setShowSugs(false)
    const userMsg: Message = { role: 'user', text }
    setMsgs(m => [...m, userMsg])
    setInput('')
    setLoading(true)
    try {
      const history = [...msgs, userMsg].map(m => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      }))
      const reply = await window.claude?.complete({ messages: history, system: SYSTEM_PROMPT })
      setMsgs(m => [...m, { role: 'bot', text: reply ?? 'No response.' }])
    } catch {
      setMsgs(m => [...m, { role: 'bot', text: 'Sorry, I had trouble connecting. Please try again!' }])
    }
    setLoading(false)
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      <div className={`chat-panel${open ? '' : ' hidden'}`}>
        <div className="chat-header">
          <SmallAvatar />
          <div className="chat-header-info">
            <div className="chat-header-name">Nattakitt's Secretary</div>
            <div className="chat-header-status"><span className="blink">█</span> AI · Online</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="chat-messages" ref={messagesRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role}`}>
              {m.role === 'bot' && <SmallAvatar />}
              <div className="msg-bubble">{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="msg bot">
              <SmallAvatar />
              <div className="msg-bubble">
                <div className="typing-dots"><span /><span /><span /></div>
              </div>
            </div>
          )}
        </div>

        {showSugs && (
          <div className="chat-suggestions">
            {CHAT_SUGGESTIONS.map((s, i) => (
              <button key={i} className="chat-sug" onClick={() => send(s)}>{s}</button>
            ))}
          </div>
        )}

        <div className="chat-input-row">
          <input
            className="chat-input"
            placeholder="Ask about Nattakitt..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            disabled={loading}
          />
          <button className="chat-send" onClick={() => send(input)} disabled={loading || !input.trim()}>▶</button>
        </div>
      </div>

      <button className="chat-fab" onClick={() => setOpen(o => !o)} title="Chat with AI Secretary">
        <img src={capybara} alt="Capybara" style={{ width: 36, height: 36, objectFit: 'contain', imageRendering: 'pixelated' }} />
        {!open && (
          <span style={{
            position: 'absolute', top: -4, right: -4, width: 10, height: 10,
            background: '#22C55E', borderRadius: 0,
            clipPath: 'polygon(0 2px,2px 2px,2px 0,calc(100% - 2px) 0,calc(100% - 2px) 2px,100% 2px,100% calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,2px calc(100% - 2px),0 calc(100% - 2px))',
          }} />
        )}
      </button>
    </>
  )
}
