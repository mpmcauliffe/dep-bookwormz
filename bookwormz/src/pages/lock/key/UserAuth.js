import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, logout } from '../../../redux/actions/authActions'
import { SpinnerContainer } from './spinner'


const UserAuth_proto = ({ login, logout, isAuthenticated, history, }) => {
    useEffect(() => {
        if (!isAuthenticated) {
            console.log('login')
            setTimeout(() => { login(history) }, 1000)
        } else {
            console.log('logout')
            setTimeout(() => { logout(history) }, 1000)
        }
    })

    return (
        <SpinnerContainer>
            <div className='lds-dual-ring'></div>            
        </SpinnerContainer>
    )
}


UserAuth_proto.propTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    logout: PropTypes.func.isRequired,
    isAuthenticated: state.auth.isAuthenticated,
})

const UserAuth = connect(mapStateToProps, { login, logout, })(UserAuth_proto)
export { UserAuth }
