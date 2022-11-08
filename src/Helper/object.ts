export function isObjectEmpty(obj: Object):boolean {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}