import React from 'react'
import FetchDemo from './FetchDemo.jsx'

export default function FetchPage(){
  return (
    <div>
      <h2>useFetch</h2>
      <p className="muted">Fetch API data with loading & errors.</p>
      <div className="card"><FetchDemo/></div>
    </div>
  )
}
