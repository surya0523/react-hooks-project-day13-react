import React from 'react'
import useTheme from '../../hooks/useTheme.js'

export default function ThemeDemo(){
  const { theme, toggleTheme } = useTheme('light')
  return (
    <div className="demo">
      <p>Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p className="muted">Preference persists via localStorage.</p>
    </div>
  )
}
