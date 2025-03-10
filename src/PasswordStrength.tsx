import React from "react";

interface PasswordStrengthProps {
    password: String;
}


const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) => {
    const len = 8;

    let level = {
        level: 0,
        length: false,
        upperCase: false,
        special: false,
        number: false,
    }

    if(password.length > len) {
        level.length = true;
        level.level++;
    }   
    if(password.match(/[A-Z]/)) {
        level.upperCase = true;   
        level.level++;
    }
    if(password.match(/[0-9]/)) {
        level.number = true;   
        level.level++;
    }
    if(password.match(/[!@#$%^&*]/)) {
        level.special = true;   
        level.level++;
    }

    return (
        <>
            <p>Heslo je {(level.level < 1)? "špatné" : (level.level < 2)? "normální" : "dobré"}</p> 
            <p>Heslo musí:</p> 
            <p style={{color:  (level.length)? "green" : "red"}}>Delší než {len} znaků</p>  
            <p style={{color:  (level.upperCase)? "green" : "red"}}>Obsahovat velké písmeno</p>  
            <p style={{color:  (level.special)? "green" : "red"}}>Obsahovat speciální znak (!@#$%^&*)</p>
        </>
    )
}

export default PasswordStrength;
