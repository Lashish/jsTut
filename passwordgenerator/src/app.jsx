import './app.css'
import { useState, useCallback, useEffect, useRef } from 'react'

export function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += "1234567890"
    };
    if (charAllowed) {
      str += "!@#$%^&*)("
    };

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  // useRef hook
  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <h1 className="text-4xl text-center text-white my-3">Password Generator</h1>
      <input type="text" value={password} ref={passwordRef} className='text-orange-600 px-3 py-3 my-3 outline-none  w-96 rounded-l-sm cursor-pointer' placeholder='Password' readOnly />

      <button className='bg-blue-400 rounded-r-sm px-4 py-3' onClick={copyPasswordToclipboard}>copy</button>
      <br />

      <input type="range" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} className='mx-3 cursor-pointer' />

      <label className='px-3 text-white '>Length: {length}</label>

      <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
        setNumberAllowed((prev) => !prev)
      }} id="numInput" className='px-3' />

      <label className='px-3 text-white'>Number</label>

      <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
        setCharAllowed((prev) => !prev)
      }} id="charInput" className='px-3' />

      <label className='px-3 text-white'>Character</label>


    </>
  )
}
