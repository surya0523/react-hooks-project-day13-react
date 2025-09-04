import React from 'react'
import ClipboardDemo from './ClipboardDemo.jsx'

export default function ClipboardPage(){
  return (
    <div>
      <h2>useClipboard</h2>
      <p className="muted">Copy text to clipboard.</p>
      <div className="card"><ClipboardDemo/></div>
    </div>
  )
}
