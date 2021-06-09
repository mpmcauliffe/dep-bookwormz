const standardColors = Object.freeze({
    RED:   '#fff7f7',
    GREEN: '#f7fff7',
    BLUE:  '#f7f7ff',
})
const grayColors = Object.freeze({
    RED:   '#ddd7d7',
    GREEN: '#d7ddd7',
    BLUE:  '#d7d7dd',
})

module.exports = (modifyingColor, shadeModifier) => {
    switch(modifyingColor) {
        case '#fff7f7': return standardColors.GREEN
        case '#ddd7d7': return grayColors.GREEN

        case '#f7fff7': return standardColors.BLUE
        case '#d7ddd7': return grayColors.BLUE
    
        case '#f7f7ff': return standardColors.RED
        case '#d7d7dd': return grayColors.RED

        default: return shadeModifier === 1 ? standardColors.RED : grayColors.RED
    }
}
