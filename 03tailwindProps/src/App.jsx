import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import CardNew from './components/CardNew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Test text </h1>
      {/* <Card/> */}
      <CardNew title="JAPAN" texts = {"Japan is the best Asian country to visit in 2025 and the people of Japan are living in 2050 because their technolgy is superb !"} btntxt = "View Now ->"/>
      <CardNew title="Russia" texts = {"Russia is located in Asia and is the best country to visit in 2025 and the people of Russia are living in 2050 because their technolgy is superb !"} />
    </>
  )
}

export default App
