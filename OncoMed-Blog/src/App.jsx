import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogInicio from './components/BlogInicio_Paciente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BlogInicio />

    </>
  )
}

export default App
