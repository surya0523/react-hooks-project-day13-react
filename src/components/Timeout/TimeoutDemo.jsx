import React, { useState } from 'react'
import useTimeout from '../../hooks/useTimeout.js'

export default function TimeoutDemo(){
  const [fired, setFired] = useState(false)
  const [delay, setDelay] = useState(2000)
  useTimeout(() => setFired(true), typeof delay==='number' ? delay : 2000)

  return (
    <div className="demo">
      <label>Delay (ms)</label>
      <input type="number" value={delay} onChange={e=>setDelay(Number(e.target.value))} />
      <p>{fired ? '✅ Fired!' : '⏳ Waiting…'}</p>
      <button onClick={()=>{ setFired(false) }}>Restart</button>
    </div>
  )
}
