// useClipboard.js
import { useCallback, useState } from 'react'

export default function useClipboard() {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(String(text))
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
      return true
    } catch {
      setCopied(false)
      return false
    }
  }, [])
  return { copied, copy }
}
