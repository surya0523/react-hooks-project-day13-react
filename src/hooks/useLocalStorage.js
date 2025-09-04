// useLocalStorage.js
import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
  const readValue = () => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(readValue)

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
      window.dispatchEvent(new Event('local-storage'))
    } catch {}
  }, [key, storedValue])

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key && e.key !== key) return
      setStoredValue(readValue())
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('local-storage', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('local-storage', onStorage)
    }
  }, [key])

  return [storedValue, setStoredValue]
}
