import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage.js'

export default function LocalStorageDemo(){
  const [name, setName] = useLocalStorage('name', 'Surya')
  return (
    <div className="demo">
      <label>Stored Name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Type and refresh page" />
      <p className="muted">Value persists in localStorage.</p>
    </div>
  )
}
