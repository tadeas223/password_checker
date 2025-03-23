export function levelNumber(valid: boolean[]): number {
    let num = 0;

    for(let i = 0; i < valid.length; i++) {
        if(valid[i]) num++; 
    }

    return num;
}

export function CharacterSequenceValidator(password: string, validation: RegExp[]): boolean[] {
    let valid: Array<boolean> = new Array<boolean>(); 

    for(let i = 0; i < validation.length; i++) {
        if(password.match(validation[i]) !== null) valid.push(true);
        else valid.push(false); 
    }

    return valid;
}
