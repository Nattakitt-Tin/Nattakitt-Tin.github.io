import { ACCENTS } from '../data/resume'
import type { Tweaks, Theme } from '../types'

interface Props {
  open: boolean
  tweaks: Tweaks
  theme: Theme
  onAccent: (c: string) => void
  onDensity: (d: Tweaks['density']) => void
  onTheme: (t: Theme) => void
}

export function TweakPanel({ open, tweaks, theme, onAccent, onDensity, onTheme }: Props) {
  return (
    <div className={`tweaks-panel${open ? ' open' : ''}`}>
      <div className="tw-title">// TWEAKS</div>

      <div className="tw-row">
        <div className="tw-lbl">ACCENT</div>
        <div className="tw-swatches">
          {ACCENTS.map(a => (
            <div
              key={a.c}
              className={`tw-swatch${tweaks.accent === a.c ? ' active' : ''}`}
              style={{ background: a.c }}
              onClick={() => onAccent(a.c)}
            />
          ))}
        </div>
      </div>

      <div className="tw-row">
        <div className="tw-lbl">DENSITY</div>
        <div className="tw-btns">
          {(['compact', 'comfortable', 'spacious'] as Tweaks['density'][]).map(d => (
            <button
              key={d}
              className={`tw-btn${tweaks.density === d ? ' active' : ''}`}
              onClick={() => onDensity(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="tw-row">
        <div className="tw-lbl">THEME</div>
        <div className="tw-btns">
          {(['dark', 'light'] as Theme[]).map(t => (
            <button
              key={t}
              className={`tw-btn${theme === t ? ' active' : ''}`}
              onClick={() => onTheme(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
