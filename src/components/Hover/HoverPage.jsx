import React from 'react'
import HoverDemo from './HoverDemo.jsx'

export default function HoverPage(){
  return (
    <div>
      <h2>useHover</h2>
      <p className="muted">Detect hover on any element.</p>
      <div className="card"><HoverDemo/></div>
    </div>
  )
}
