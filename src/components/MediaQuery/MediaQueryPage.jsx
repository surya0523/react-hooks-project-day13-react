import React from 'react'
import MediaQueryDemo from './MediaQueryDemo.jsx'

export default function MediaQueryPage(){
  return (
    <div>
      <h2>useMediaQuery</h2>
      <p className="muted">Detect screen size changes.</p>
      <div className="card"><MediaQueryDemo/></div>
    </div>
  )
}
