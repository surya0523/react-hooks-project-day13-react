// useFetch.js
import { useEffect, useState } from 'react'

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    const controller = new AbortController()
    setLoading(true); setError(null)

    fetch(url, { signal: controller.signal, ...options })
      .then(async (res) => {
        if (!res.ok) throw new Error('Network error ' + res.status)
        const json = await res.json()
        setData(json)
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}
