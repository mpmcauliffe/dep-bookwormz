import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect, } from 'react-router-dom'


const SecureRoute_proto = ({ component: Component, isAuthenticated, ...rest }) => {

    return (
        <Route 
            { ...rest } 
            render={props => isAuthenticated
                ?   (
                        <Component { ...props } />
                ) : (
                        <Redirect to='/' />
                )
            } />
    )
}


SecureRoute_proto.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const SecureRoute = connect(mapStateToProps, { })(SecureRoute_proto)
export { SecureRoute }
