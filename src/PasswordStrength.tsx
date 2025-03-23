interface PasswordStrengthProps {
    password: string
}

interface Level {
        length: boolean,
        upper: boolean,
        special: boolean,
        number: boolean,
}

function levelNumber(level: Level): number {
    let num = 0;
    if(level.length) num++;
    if(level.upper) num++;
    if(level.special) num++;
    if(level.number) num++;
    return num;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) => {
    let minLen = 8; 
    let level: Level = {
        length: false, 
        upper: false, 
        special: false, 
        number: false, 
    };

    if(password.length > minLen) level.length = true;
    if(password.match(/[A-Z]/) !== null) level.upper = true;
    if(password.match(/[0-9]/) !== null) level.number = true;
    if(password.match(/[!@#$%^&*]/) !== null) level.special= true;

    return (
        <>
            <p>Password is {
                (levelNumber(level) == 4)? <span style={{color: "green"}}> good </span>
                : (levelNumber(level) >= 2)? <span style={{color: "orange"}}> normal </span>
                : <span style={{color: "red"}}> bad </span>
            }</p>

            <p> Password should have: </p>
            <p><span style={{color: (level.length)? "green" : "red"}}>More than {minLen} characters</span></p>
            <p><span style={{color: (level.upper)? "green" : "red"}}>At least one upper case character</span></p>
            <p><span style={{color: (level.number)? "green" : "red"}}>At least one number</span></p>
            <p><span style={{color: (level.special)? "green" : "red"}}>At least one of this characters "!@#$%^&*"</span></p>
        </>
    )
}

export default PasswordStrength;
