export function isObjectEmpty(obj: Object):boolean {
    let valid = true;
    Object.values(obj).forEach(value => {
        if (value.length === 0) {
            valid = false;
        }
    });
    return valid;
}