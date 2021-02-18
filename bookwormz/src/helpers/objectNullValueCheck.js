export const objectNullValueCheck = (testObject, originalObject) => {
    if (typeof testObject.imageLinks === 'undefined') {
        console.log(testObject.imageLinks)
        return { 
            ...testObject,
            imageLinks: {
                thumbnail: `https://github.com/mpmcauliffe/bookwormz-api/blob/main/bookwormz/public/unavailable.png`
            } 
        }
    }
    return originalObject
}