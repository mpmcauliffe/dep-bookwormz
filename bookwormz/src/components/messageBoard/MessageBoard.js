import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { clearBookMessage } from '../../redux/actions/bookActions' 
import { clearUserMessage } from '../../redux/actions/accountActions'
import M from 'materialize-css/dist/js/materialize.min.js' 


export const MessageBoard_proto = ({ 
    clearBookMessage, clearUserMessage,
    bookMessage, userMessage, }) => {
    
    useEffect(() => {
        if (bookMessage.message) {
            M.toast({ 
                html: `${bookMessage.message}`, 
                classes: `${bookMessage.style}`, 
                displayLength: bookMessage.timeDisplay 
            })
            clearBookMessage()
        }
        if (userMessage.message) {
            M.toast({ 
                html: `${userMessage.message}`, 
                classes: `${userMessage.style}`, 
                displayLength: userMessage.timeDisplay 
            })
            clearUserMessage()
        }
    }, [clearBookMessage, clearUserMessage, bookMessage, userMessage])
    
    return <div />
}


MessageBoard_proto.propTypes = {
    bookMessage: PropTypes.object,
    userMessage: PropTypes.object,
    clearBookMessage: PropTypes.func,
    clearUserMessage: PropTypes.func,
}

const mapStateToProps = state => ({
    bookMessage: state.books.bookMessage,
    userMessage: state.account.userMessage,
})

const MessageBoard = connect(mapStateToProps, { clearBookMessage, clearUserMessage, })(MessageBoard_proto)
export { MessageBoard }
