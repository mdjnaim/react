import { useState } from 'react'
import JSXBasic from './components/jsx_basic'
import PropsExample from './components/props'
import StateExample from './components/state'
import EventExample from './components/event'
import ConditionalRendering from './components/cnditional_rendering'
import List from './components/list'
import Form from './components/form'
import UseEffectExample from './components/useeffect' 
import UseRefExample from './components/useref'
import UseMemoExample from './components/usememo'
import Rout from './components/rout'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <JSXBasic />
        <PropsExample />
        <StateExample />
        <EventExample />
        <ConditionalRendering />
        <List />
        <Form />
        <UseEffectExample />
        <UseRefExample />
        <UseMemoExample />
        <Rout />
      </div>
  )
}

export default App
