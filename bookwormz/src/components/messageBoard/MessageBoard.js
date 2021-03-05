import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js' 


export const MessageBoard_proto = ({ bookMessage, userMessage, }) => {
    
    useEffect(() => {
        if (bookMessage.message) {
            M.toast({ 
                html: `${bookMessage.message}`, 
                classes: `${bookMessage.style}`, 
                displayLength: bookMessage.timeDisplay 
            })
        }
        if (userMessage.message) {
            M.toast({ 
                html: `${userMessage.message}`, 
                classes: `${userMessage.style}`, 
                displayLength: userMessage.timeDisplay 
            })
        }
    }, [bookMessage, userMessage])
    
    return <div />
}


MessageBoard_proto.propTypes = {
    bookMessage: PropTypes.object,
    userMessage: PropTypes.object,
}

const mapStateToProps = state => ({
    bookMessage: state.books.bookMessage,
    userMessage: state.account.userMessage,
})

const MessageBoard = connect(mapStateToProps, { })(MessageBoard_proto)
export { MessageBoard }
