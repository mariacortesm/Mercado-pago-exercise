import { useState } from 'react'
import './App.css'
import { NavBar } from './navBar';
import { PrincipalBanner } from './principalBanner';
import { DividingTitle } from './dividingTitle';
import { CardsOptions } from './cardsOptions';
import { SecondBanner } from './secondBanner';
import { CardsBenefits } from './cardsBenefits';
import { ThirdBanner } from './thirdBanner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <PrincipalBanner />
      <DividingTitle />
      <CardsOptions />
      <SecondBanner />
      <CardsBenefits />
      <ThirdBanner />
      <div>
      </div>
    </>
  )
}

export default App
