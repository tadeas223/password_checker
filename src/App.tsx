import './App.css'
import {useState} from 'react'
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';

function App() {
    const [password, setPassword] = useState<string>(""); 
    return ( 
        <>
            <h1>Password checker</h1>
            <PasswordInput setter={setPassword} />
            <PasswordStrength password={password} />
            <p>{password}</p>
        </>
    )
}

export default App
