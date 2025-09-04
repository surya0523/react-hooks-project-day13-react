// useTheme.js
import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useTheme(defaultTheme = 'light') {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return { theme, setTheme, toggleTheme }
}
