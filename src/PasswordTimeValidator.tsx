import { useEffect } from "react";

function PasswordTimeValidator(time: number, timeLimit: number = 5000) : boolean {
    const difference = Date.now() - time;

    useEffect(() => {
        console.log(difference);
    });
    return (difference > timeLimit);
}

export default PasswordTimeValidator;
