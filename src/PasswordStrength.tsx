import { CharacterSequenceValidator, levelNumber } from "./CharacterSequenceValidator";
import PasswordTimeValidator from "./PasswordTimeValidator";
import CountryFlagValidator from "./CountryFlagValidator";

interface PasswordStrengthProps {
    password: string,
    country: string,
    creationTime: number|null,
}

export function evaluatePassword(password: string, country: string) {
    let valid = CharacterSequenceValidator(password, [ /[A-Z]/, /[0-9]/, /[!@#$%^&*]/]);

    if(password.length >= 8) valid.push(true);
    else valid.push(false);
    
    valid.push(CountryFlagValidator(password, country));
    
    if(levelNumber(valid) == 5) {
        return "good";
    } else if(levelNumber(valid) > 3) {
        return "normal";
    } else {
        return "bad";
    }
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password, country, creationTime}: PasswordStrengthProps) => {
    let valid = CharacterSequenceValidator(password, [ /[A-Z]/, /[0-9]/, /[!@#$%^&*]/]);
    if(password.length >= 8) valid.push(true);
    else valid.push(false);
    
    let timeValid = true;
    if(creationTime !== null) {
        timeValid = PasswordTimeValidator(creationTime, 5000);
    }

    valid.push(CountryFlagValidator(password, country));

    if(timeValid) {
        return (
            <>
                <p>Password is {
                    (levelNumber(valid) == 5)? <span style={{color: "green"}}> good </span>
                    : (levelNumber(valid) > 3)? <span style={{color: "orange"}}> normal </span>
                    : <span style={{color: "red"}}> bad </span>
                }</p>

                <p>Password should have: </p>
                <p><span style={{color: (valid[0])? "green" : "red"}}>At least one upper case character</span></p>
                <p><span style={{color: (valid[1])? "green" : "red"}}>At least one number</span></p>
                <p><span style={{color: (valid[2])? "green" : "red"}}>At least one of this characters "!@#$%^&*"</span></p>
                <p><span style={{color: (valid[3])? "green" : "red"}}>More than 8 characters</span></p>
                <p><span style={{color: (valid[4])? "green" : "red"}}>Password must contaion the coutry code of this country: </span></p>
                <img style={{width: "50%"}} src={ "https://countryflagsapi.netlify.app/flag/" + country + ".svg"} />
            </>
        );
    } else {
        return (
            <>
                <p style={{color: "red"}}>Slow down</p>
            </>
        )
    }
}

export default PasswordStrength;
