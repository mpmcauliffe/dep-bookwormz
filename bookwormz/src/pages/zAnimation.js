
export const pageVariants = {
    in: {
        opacity: 1,
        x: 0,
    },
    ini: {
        opacity: 0,
        x: '200vh'
    },
    out: {
        opacity: 1,
        x: '-300vh'
    }
}
export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: .5,
}
