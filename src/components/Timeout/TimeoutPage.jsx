import React from 'react'
import TimeoutDemo from './TimeoutDemo.jsx'

export default function TimeoutPage(){
  return (
    <div>
      <h2>useTimeout</h2>
      <p className="muted">Run a function after a delay.</p>
      <div className="card"><TimeoutDemo/></div>
    </div>
  )
}
