export const objectNullValueCheck = testObject => {
    if (typeof testObject.imageLinks === 'undefined') {
        return { 
            ...testObject,
            imageLinks: {
                thumbnail: 
            } 
        }
    }
}