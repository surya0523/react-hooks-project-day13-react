import React from 'react'
import useHover from '../../hooks/useHover.js'

export default function HoverDemo(){
  const [hovered, ref] = useHover()
  return (
    <div className="demo">
      <div ref={ref} style={{padding:'30px', textAlign:'center', borderRadius:12, background: hovered ? '#d1fae5' : '#e5e7eb'}}>
        {hovered ? '👆 Hovering!' : 'Hover over this box'}
      </div>
    </div>
  )
}
