// useInput.js
import { useState, useCallback } from 'react'

export default function useInput(initial = '') {
  const [value, setValue] = useState(initial)
  const onChange = useCallback((e) => setValue(e.target.value), [])
  const reset = useCallback(() => setValue(initial), [initial])
  const bind = { value, onChange }
  return { value, setValue, onChange, reset, bind }
}
