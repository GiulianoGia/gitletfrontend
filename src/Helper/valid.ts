export function validateEmail(email: string): boolean {
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegex.test(email);
}

/**
 * 
 * @param password Minimum eight characters, at least one letter and one number
 */
export function validatePassword(password: string): boolean {
    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    return passwordRegex.test(password);
}

/**
 * 
 * @returns if text is typeof string 
 */
export function validateText(text: string): boolean {
    const textRegex = new RegExp(/^[A-Za-z\s]*$/);
    return textRegex.test(text);
}

/**
 * 
 * @param text for expample an age
 * @returns if the text only includes numbers
 */
export function validateNumber(text: string): boolean {
    const numberRegex = new RegExp(/^\d+$/)
    return numberRegex.test(text);
}