import React, { useState } from 'react'
import useClipboard from '../../hooks/useClipboard.js'

export default function ClipboardDemo(){
  const { copied, copy } = useClipboard()
  const [text, setText] = useState('Copy me!')
  return (
    <div className="demo">
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={()=>copy(text)}>Copy</button>
      <span className="badge">{copied ? 'Copied ✅' : 'Not copied'}</span>
    </div>
  )
}
