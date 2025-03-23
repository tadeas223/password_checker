import './App.css'
import {useEffect, useState} from 'react'
import PasswordInput from './PasswordInput';
import PasswordStrength, { evaluatePassword } from './PasswordStrength';
import { countries } from './CountryFlagValidator';

function App() {
    const [password, setPassword] = useState<string>(""); 
    const [creationTime, setCreationTime] = useState<number|null>(null); 
   
    const [country] = useState<string>(countries[Math.floor(Math.random() * countries.length)]);
    const [passwordStrength, setPasswordStrength] = useState<string>("");
    
    useEffect(() => {
        let strength = evaluatePassword(password, country);
        setPasswordStrength(strength);
    }, [password]);
    
    useEffect(() => {
        document.title = "Password is " + passwordStrength;
    }, [passwordStrength]);

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            const action = Math.random() < 0.5 ? 'add' : 'remove'; 
            if(action == 'add') {
                setPassword(password + '🫃'); 
            } else {
                const index = Math.floor(Math.random() * password.length);
                let chars = Array.from(password);
                chars.splice(index , 1);
                setPassword(chars.join('')); 
            }
        }, 10000);
        return () => clearInterval(sabotageInterval);
    });


    return ( 
        <>
            <h1>Password checker</h1>
            <PasswordInput password={password} setter={setPassword} setTime={creationTime == null} setterCreationTime={setCreationTime}/>
            <PasswordStrength country={country} password={password} creationTime={creationTime} />
        </>
    )
}

export default App
