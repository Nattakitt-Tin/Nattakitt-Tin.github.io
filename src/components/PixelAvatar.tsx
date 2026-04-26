const CAPYBARA = '/capybara.png'

export function PixelAvatar() {
  return (
    <div className="px-avatar">
      <img
        src={CAPYBARA}
        alt="Capybara mascot"
        style={{ width: 64, height: 64, objectFit: 'contain', imageRendering: 'pixelated' }}
      />
    </div>
  )
}

export function SmallAvatar() {
  return (
    <div className="msg-avatar">
      <img
        src={CAPYBARA}
        alt="Capybara"
        style={{ width: 24, height: 24, objectFit: 'contain', imageRendering: 'pixelated' }}
      />
    </div>
  )
}
