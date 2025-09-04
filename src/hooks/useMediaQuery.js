// useMediaQuery.js
import { useEffect, useState } from 'react'

export default function useMediaQuery(query) {
  const getMatch = () => typeof window !== 'undefined' && window.matchMedia(query).matches
  const [matches, setMatches] = useState(getMatch())

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    setMatches(mql.matches)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
