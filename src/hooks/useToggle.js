// useToggle.js
import { useState, useCallback } from 'react'

export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback((next) => {
    setValue(v => typeof next === 'boolean' ? next : !v)
  }, [])
  return [value, toggle]
}
