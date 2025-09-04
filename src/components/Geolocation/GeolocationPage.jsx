import React from 'react'
import GeolocationDemo from './GeolocationDemo.jsx'

export default function GeolocationPage(){
  return (
    <div>
      <h2>useGeolocation</h2>
      <p className="muted">Get the user’s current location.</p>
      <div className="card"><GeolocationDemo/></div>
    </div>
  )
}
