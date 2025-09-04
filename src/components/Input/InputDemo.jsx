import React from 'react'
import useInput from '../../hooks/useInput.js'

export default function InputDemo(){
  const username = useInput('')
  const email = useInput('')
  return (
    <div className="demo grid-2">
      <div>
        <label>Username</label>
        <input {...username.bind} placeholder="Your name" />
        <button onClick={username.reset}>Reset</button>
        <p className="muted">value: {username.value || '(empty)'}</p>
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...email.bind} placeholder="you@example.com" />
        <button onClick={email.reset}>Reset</button>
        <p className="muted">value: {email.value || '(empty)'}</p>
      </div>
    </div>
  )
}
