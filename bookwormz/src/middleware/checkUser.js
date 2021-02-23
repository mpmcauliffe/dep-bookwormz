/* CHECK USER TOKEN FOR FRONTEND USAGE */
export const checkUser = () => {
    if (!localStorage.token) { return false }
    return true
}
