import { useState } from "react"
import './App.css'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)
  let [color,setColor] = useState() 

  return (
    <div className="w-screen h-screen duration-200 text-black "
    style={{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button  onClick={() => setColor("red")} className=" outline-none text-white bg-red-500 shadow-lg px-4 py-1 rounded-full">Red</button>
          <button  onClick={() => setColor("green")} className=" outline-none text-white bg-green-400 shadow-lg px-4 py-1 rounded-full">Green</button>
          <button  onClick={() => setColor("blue")} className=" outline-none text-white bg-blue-500 shadow-lg px-4 py-1 rounded-full">Blue</button>
          <button  onClick={() => setColor("violet")} className=" outline-none text-white bg-violet-500 shadow-lg px-4 py-1 rounded-full">Violet</button>
          <button  onClick={() => setColor("amber-950")} className=" outline-none text-white bg-amber-950 shadow-lg px-4 py-1 rounded-full">Brown</button>
          <button  onClick={() => setColor("pink")} className=" outline-none text-white bg-pink-500 shadow-lg px-4 py-1 rounded-full">Pink</button>
          <button  onClick={() => setColor("black")} className=" outline-none text-white bg-black shadow-lg px-4 py-1 rounded-full">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
