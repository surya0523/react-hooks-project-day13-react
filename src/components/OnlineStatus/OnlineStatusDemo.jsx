import React from 'react'
import useOnlineStatus from '../../hooks/useOnlineStatus.js'

export default function OnlineStatusDemo(){
  const online = useOnlineStatus()
  return (
    <div className="demo">
      <p>Status: <strong>{online ? 'Online ✅' : 'Offline ❌'}</strong></p>
      <p className="muted">Toggle your network to test.</p>
    </div>
  )
}
