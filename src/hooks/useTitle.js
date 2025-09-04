// useTitle.js
import { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    if (!title && title !== '') return
    const prev = document.title
    document.title = title
    return () => { document.title = prev }
  }, [title])
}
