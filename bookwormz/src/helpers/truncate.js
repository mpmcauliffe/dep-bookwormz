
export const truncate = (str, modifier = 50) => {
    if (typeof str === 'undefined') { return }

    if (str.length > modifier) {
        str = str.slice(0, modifier).concat('...')
    }    
    return str;
}
