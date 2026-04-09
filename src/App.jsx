import { useState } from 'react'
import JSXBasic from './components/jsx_basic'
import PropsExample from './components/props'
import StateExample from './components/state'
import EventExample from './components/event'
import ConditionalRendering from './components/cnditional_rendering'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <JSXBasic />
        <PropsExample />
        <StateExample />
        <EventExample />
        <ConditionalRendering />
      </div>
  )
}

export default App
