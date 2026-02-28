import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>カウンター</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>リセット</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}

export default Counter
