module.exports = (inputArray, newObject, locator) => {

    console.log(newObject.replyToOrigin)
    for (let i=locator; i<inputArray.length; i++) {
       if (inputArray[i].replyToOrigin[3].toString() !== newObject.replyToOrigin[3].toString()) {
           return i
       } 
    }
}    

// x=[1,2,3,4,6,7,8,9]
// (8) [1, 2, 3, 4, 6, 7, 8, 9]
// y=x.splice(4,0,5)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
