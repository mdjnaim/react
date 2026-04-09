import { useState } from 'react'
import JSXBasic from './components/jsx_basic'
import PropsExample from './components/props'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <JSXBasic />
        <PropsExample />
      </div>
  )
}

export default App
