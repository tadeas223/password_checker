import { useState } from 'react'
import './App.css'
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';

function App() {
  const [password, setPassword] = useState<String>("");

  return (
  <>
    <h1>Password checker</h1>
    <PasswordInput setter={setPassword}/>
    <PasswordStrength password={password}/>
  </>
  )
}

export default App
