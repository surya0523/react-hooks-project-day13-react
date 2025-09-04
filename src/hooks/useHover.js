// useHover.js
import { useRef, useEffect, useState } from 'react'

export default function useHover() {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const on = () => setIsHovered(true)
    const off = () => setIsHovered(false)
    node.addEventListener('mouseenter', on)
    node.addEventListener('mouseleave', off)
    return () => {
      node.removeEventListener('mouseenter', on)
      node.removeEventListener('mouseleave', off)
    }
  }, [ref.current])

  return [isHovered, ref]
}
