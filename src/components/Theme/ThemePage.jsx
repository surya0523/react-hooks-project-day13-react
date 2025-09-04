import React from 'react'
import ThemeDemo from './ThemeDemo.jsx'

export default function ThemePage(){
  return (
    <div>
      <h2>useTheme</h2>
      <p className="muted">Toggle between light and dark mode.</p>
      <div className="card"><ThemeDemo/></div>
    </div>
  )
}
