import { useState } from 'react'
import './App.css'
import { NavBar } from './navBar';
import { PrincipalBanner } from './principalBanner';
import { DividingTitle } from './dividingTitle';
import { CardsOptions } from './cardsOptions';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <PrincipalBanner />
      <DividingTitle />
      <CardsOptions />
      <div>
      </div>
    </>
  )
}

export default App
