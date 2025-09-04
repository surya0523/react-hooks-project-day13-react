import React from 'react'
import DebounceDemo from './DebounceDemo.jsx'

export default function DebouncePage(){
  return (
    <div>
      <h2>useDebounce</h2>
      <p className="muted">Delay value updates for search inputs etc.</p>
      <div className="card"><DebounceDemo/></div>
    </div>
  )
}
