import { useState } from 'react'
import './App.css'
import { NavBar } from './navBar';
import { PrincipalBanner } from './principalBanner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <PrincipalBanner />
      <div>
      </div>
    </>
  )
}

export default App
