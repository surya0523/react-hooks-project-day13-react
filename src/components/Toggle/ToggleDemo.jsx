import React from 'react'
import useToggle from '../../hooks/useToggle.js'

export default function ToggleDemo(){
  const [isOpen, toggle] = useToggle(false)
  return (
    <div className="demo">
      <p>Status: <strong>{isOpen ? 'Open' : 'Closed'}</strong></p>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>Set True</button>
      <button onClick={() => toggle(false)}>Set False</button>
    </div>
  )
}
