import React, { useState } from 'react'
import usePrevious from '../../hooks/usePrevious.js'

export default function PreviousDemo(){
  const [n, setN] = useState(0)
  const prev = usePrevious(n)
  return (
    <div className="demo">
      <p>Current: <strong>{n}</strong> | Previous: <strong>{prev ?? '—'}</strong></p>
      <button onClick={()=>setN(n+1)}>Increment</button>
      <button onClick={()=>setN(n-1)}>Decrement</button>
      <button onClick={()=>setN(0)}>Reset</button>
    </div>
  )
}
