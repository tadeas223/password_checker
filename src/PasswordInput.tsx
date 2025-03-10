import React, { ChangeEvent } from "react";
interface PasswordInputProps {
    setter: React.Dispatch<React.SetStateAction<String>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({setter}: PasswordInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
    }  
    
    return(
        <>
            <input type="text" onChange={handleChange} />        
        </>
    )

}

export default PasswordInput;