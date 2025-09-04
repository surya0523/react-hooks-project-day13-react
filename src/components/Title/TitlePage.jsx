import React from 'react'
import TitleDemo from './TitleDemo.jsx'

export default function TitlePage(){
  return (
    <div>
      <h2>useTitle</h2>
      <p className="muted">Update the document title.</p>
      <div className="card"><TitleDemo/></div>
    </div>
  )
}
