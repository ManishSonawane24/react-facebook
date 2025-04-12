import { useState, useCallback ,useEffect} from 'react'
import './App.css'  
function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const  passwordGenerator = useCallback(() => { // useCallback is used to memoize the function that is unless the dependencies change , it will not be recreated
      // passwordGenerator function will execute when the dependencies change that are length, numbersAllowed, charAllowed
      // setPassword is used to set the password state so that it wil changes when the passwordGenerator function is called only
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numbersAllowed)  str += "0123456789"
      if (charAllowed) str += "!@#$%^&*()_+{}[]:;<>?,./"

      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char)
        
      }

      setPassword(pass)

  },[length, numbersAllowed, charAllowed, setPassword])

useEffect(() => { passwordGenerator() }, [length,numbersAllowed, charAllowed,passwordGenerator] )

  return (
    <>
      

      <div className='w-screen justify-center pt-8 max-w-md shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-800'>
       <p className='mb-2 text-2xl text-white text-center my-2'>Password Generator</p >
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='text-orange-500 bg-white outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
           />
           <button
           className='outline-none bg-blue-500 text-white py-1 px-3 shrink-0'
           >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={numbersAllowed}
            id='numberInput'
            onChange={()=> setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={()=> setcharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
