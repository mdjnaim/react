import { useState } from 'react'
import JSXBasic from './components/jsx_basic'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <JSXBasic />
      </div>
  )
}

export default App
