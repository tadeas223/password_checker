import { SetStateAction, useState } from "react"

interface PasswordInputProps {
    password: string
    setter: React.Dispatch<SetStateAction<string>>
    setterCreationTime: React.Dispatch<SetStateAction<number|null>>
    setTime: boolean
}

const PasswordInput: React.FC<PasswordInputProps> = ({password, setter, setTime, setterCreationTime}: PasswordInputProps) => {
    const [visibility, setVisibility] = useState<boolean>(true); 

    return (
        <>
            <input type={(visibility)? "text" : "password"} onChange={(event) =>  { setter(event.target.value); if(setTime) { setterCreationTime(Date.now()); } } } value={password} />
            <input type="checkbox" onChange={(event) => setVisibility((!event.target.checked))}/>
        </>
    )
}

export default PasswordInput;
