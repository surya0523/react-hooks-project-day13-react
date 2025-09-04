import React, { useState } from 'react'
import useDebounce from '../../hooks/useDebounce.js'

export default function DebounceDemo(){
  const [value, setValue] = useState('')
  const debounced = useDebounce(value, 800)
  return (
    <div className="demo">
      <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Type to debounce…" />
      <p>Immediate: <strong>{value}</strong></p>
      <p>Debounced (800ms): <strong>{debounced}</strong></p>
    </div>
  )
}
