import React from 'react'
import CounterDemo from './CounterDemo.jsx'

export default function CounterPage(){
  return (
    <div>
      <h2>useCounter</h2>
      <p className="muted">Increment, decrement and reset a number.</p>
      <div className="card"><CounterDemo/></div>
    </div>
  )
}
