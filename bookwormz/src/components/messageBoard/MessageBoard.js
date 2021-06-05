import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { clearBookMessage } from '../../redux/actions/bookActions' 
import { clearUserMessage } from '../../redux/actions/accountActions'
import { clearClubMessage } from '../../redux/actions/clubActions'
import { clearCommentMessage } from '../../redux/actions/commentActions'
import M from 'materialize-css/dist/js/materialize.min.js' 


export const MessageBoard_proto = ({ 
    clearBookMessage, clearUserMessage, clearClubMessage, clearCommentMessage,
    bookMessage, userMessage, clubMessage, commentMessage, }) => {
    
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
        if (clubMessage.message) {
            M.toast({ 
                html: `${clubMessage.message}`, 
                classes: `${clubMessage.style}`, 
                displayLength: clubMessage.timeDisplay 
            })
            clearClubMessage()
        }
        if (commentMessage.message) {
            M.toast({ 
                html: `${commentMessage.message}`, 
                classes: `${commentMessage.style}`, 
                displayLength: commentMessage.timeDisplay 
            })
            clearCommentMessage()
        }

    }, [clearBookMessage, clearUserMessage, clearClubMessage, clearCommentMessage,
        bookMessage, userMessage, clubMessage, commentMessage])
    
    return <div />
}


MessageBoard_proto.propTypes = {
    bookMessage: PropTypes.object,
    userMessage: PropTypes.object,
    clubMessage: PropTypes.object,
    commentMessage: PropTypes.object,
    clearBookMessage: PropTypes.func,
    clearUserMessage: PropTypes.func,
    clearClubMessage: PropTypes.func,
    clearCommentMessage: PropTypes.func,
}

const mapStateToProps = state => ({
    bookMessage: state.books.bookMessage,
    userMessage: state.account.userMessage,
    clubMessage: state.clubs.clubMessage,
    commentMessage: state.comments.commentMessage,
})

const MessageBoard = connect(
    mapStateToProps, 
    { clearBookMessage, clearUserMessage, clearClubMessage, clearCommentMessage, })
(MessageBoard_proto)
export { MessageBoard }
