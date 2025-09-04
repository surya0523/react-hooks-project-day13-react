import React from 'react'
import useCounter from '../../hooks/useCounter.js'

export default function CounterDemo(){
  const { count, increment, decrement, reset } = useCounter(0)
  return (
    <div className="demo">
      <h3>Count: <span className="badge">{count}</span></h3>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  )
}
