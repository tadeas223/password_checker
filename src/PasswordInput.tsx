import { SetStateAction, useState } from "react"

interface PasswordInputProps {
    setter: React.Dispatch<SetStateAction<string>>
}

const PasswordInput: React.FC<PasswordInputProps> = ({setter}: PasswordInputProps) => {
    const [visibility, setVisibility] = useState<boolean>(true); 
    
    return (
        <>
            <input type={(visibility)? "text" : "password"} onChange={(event) => setter(event.target.value)} />
            <input type="checkbox" onChange={(event) => setVisibility((!event.target.checked))}/>
        </>
    )
}

export default PasswordInput;
