
export const truncate = (str, modifier) => {
    if(str.length > modifier) {
        str = str.slice(0, modifier).concat('...')
    }    
    return str;
}
