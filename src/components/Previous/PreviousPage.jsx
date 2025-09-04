import React from 'react'
import PreviousDemo from './PreviousDemo.jsx'

export default function PreviousPage(){
  return (
    <div>
      <h2>usePrevious</h2>
      <p className="muted">Read the previous value of a state/prop.</p>
      <div className="card"><PreviousDemo/></div>
    </div>
  )
}
