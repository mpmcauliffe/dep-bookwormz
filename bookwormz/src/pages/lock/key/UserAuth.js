import React, { useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser, logout } from '../../../redux/actions/authActions'
import { Spinner } from '../../../components'


const UserAuth_proto = ({ loginUser, logout, isAuthenticated, }) => {
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            console.log('loginUser')
            setTimeout(() => { loginUser(history) }, 1000)
        } else {
            console.log('logout')
            setTimeout(() => { logout(history) }, 1000)
        }
    })

    return <Spinner />
}


UserAuth_proto.propTypes = {
    loginUser: PropTypes.func,
    logout: PropTypes.func,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    // logout: PropTypes.func.isRequired,
    isAuthenticated: state.auth.isAuthenticated,
})

const UserAuth = connect(mapStateToProps, { loginUser, logout, })(UserAuth_proto)
export { UserAuth }
