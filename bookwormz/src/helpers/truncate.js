
export const truncate = (str, modifier = 40) => {
    if(str.length > modifier) {
        str = str.slice(0, modifier).concat('...')
    }    
    return str;
}
