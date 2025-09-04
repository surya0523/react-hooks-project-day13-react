import React from 'react'
import useGeolocation from '../../hooks/useGeolocation.js'

export default function GeolocationDemo(){
  const { latitude, longitude, accuracy, error } = useGeolocation({ enableHighAccuracy: true })
  return (
    <div className="demo">
      {error ? (
        <p style={{color:'crimson'}}>Error: {error.message}</p>
      ) : (
        <>
          <p>Latitude: <strong>{latitude ?? '—'}</strong></p>
          <p>Longitude: <strong>{longitude ?? '—'}</strong></p>
          <p>Accuracy: <strong>{accuracy ?? '—'}</strong> m</p>
        </>
      )}
      <p className="muted">Browser permission required.</p>
    </div>
  )
}
