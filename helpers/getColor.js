const standardColors = Object.freeze({
    RED:   Symbol('fff7f7'),
    GREEN: Symbol('f7fff7'),
    BLUE:  Symbol('f7f7ff'),
})
const grayColors = Object.freeze({
    RED:   Symbol('ddd7d7'),
    GREEN: Symbol('d7ddd7'),
    BLUE:  Symbol('d7d7dd'),
})

module.exports = (modifyingObject, shadeModifier) => {
    return grayColors.GREEN
}