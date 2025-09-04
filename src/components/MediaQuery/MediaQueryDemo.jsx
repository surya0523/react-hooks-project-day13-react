import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery.js'

export default function MediaQueryDemo(){
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTall = useMediaQuery('(min-height: 800px)')
  return (
    <div className="demo">
      <p>isMobile: <strong>{String(isMobile)}</strong></p>
      <p>isTall: <strong>{String(isTall)}</strong></p>
    </div>
  )
}
