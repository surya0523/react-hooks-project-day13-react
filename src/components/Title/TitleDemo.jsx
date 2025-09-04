import React, { useState } from 'react'
import useTitle from '../../hooks/useTitle.js'

export default function TitleDemo(){
  const [t, setT] = useState('My Page Title')
  useTitle(t)
  return (
    <div className="demo">
      <input value={t} onChange={e=>setT(e.target.value)} />
      <p className="muted">Document title updates live.</p>
    </div>
  )
}
