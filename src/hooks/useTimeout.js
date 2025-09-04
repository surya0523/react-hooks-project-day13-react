// useTimeout.js
import { useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
  const saved = useRef(callback)
  useEffect(() => { saved.current = callback }, [callback])
  useEffect(() => {
    if (typeof delay !== 'number') return
    const id = setTimeout(() => saved.current?.(), delay)
    return () => clearTimeout(id)
  }, [delay])
}
