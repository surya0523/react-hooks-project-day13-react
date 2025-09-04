import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch.js'

export default function FetchDemo(){
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1')
  const { data, loading, error } = useFetch(url)

  return (
    <div className="demo">
      <div className="row">
        <input value={url} onChange={e=>setUrl(e.target.value)} />
        <button onClick={() => { /* triggers by state change */ }}>Fetch</button>
      </div>
      {loading && <p>Loading…</p>}
      {error && <p style={{color:'crimson'}}>Error: {error.message}</p>}
      {data && <pre className="demo" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data,null,2)}</pre>}
    </div>
  )
}
