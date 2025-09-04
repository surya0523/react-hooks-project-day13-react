import React from 'react'
import OnlineStatusDemo from './OnlineStatusDemo.jsx'

export default function OnlineStatusPage(){
  return (
    <div>
      <h2>useOnlineStatus</h2>
      <p className="muted">Detect if user is online or offline.</p>
      <div className="card"><OnlineStatusDemo/></div>
    </div>
  )
}
