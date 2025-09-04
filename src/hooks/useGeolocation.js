// useGeolocation.js
import { useEffect, useState } from 'react'

export default function useGeolocation(options = {}) {
  const [coords, setCoords] = useState({ latitude: null, longitude: null, accuracy: null })
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError(new Error('Geolocation not supported'))
      return
    }
    const onSuccess = ({ coords: c }) => {
      setCoords({ latitude: c.latitude, longitude: c.longitude, accuracy: c.accuracy })
      setError(null)
    }
    const onError = (err) => setError(err)
    const watchId = navigator.geolocation.watchPosition(onSuccess, onError, options)
    return () => navigator.geolocation.clearWatch(watchId)
  }, [JSON.stringify(options)])

  return { ...coords, error }
}
