import { useState } from 'react'
import './App.css'
import PasswordInput from './PasswordInput';

function App() {
  const [password, setPassword] = useState<String>("");

  return (
  <>
    <h1>Password checker</h1>
    <PasswordInput setter={setPassword}/>
    <h1>{password}</h1>
  </>
  )
}

export default App
