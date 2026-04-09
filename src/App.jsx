import { useState } from 'react'
import JSXBasic from './components/jsx_basic'
import PropsExample from './components/props'
import StateExample from './components/state'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <JSXBasic />
        <PropsExample />
        <StateExample />
      </div>
  )
}

export default App
