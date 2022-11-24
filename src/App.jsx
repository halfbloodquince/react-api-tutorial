import Weather from './components/Weather'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <Weather />
    </div>
  )
}

export default App
