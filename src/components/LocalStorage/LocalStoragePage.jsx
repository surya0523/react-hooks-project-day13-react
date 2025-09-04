import React from 'react'
import LocalStorageDemo from './LocalStorageDemo.jsx'

export default function LocalStoragePage(){
  return (
    <div>
      <h2>useLocalStorage</h2>
      <p className="muted">Persist values in localStorage.</p>
      <div className="card"><LocalStorageDemo/></div>
    </div>
  )
}
