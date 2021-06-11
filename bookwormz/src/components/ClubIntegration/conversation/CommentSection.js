import React, { Fragment, useEffect, useReducer, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { Comment } from './Comment'
import { MakeComment } from './MakeComment'
import { InputBlock, } from './Comments.comp'
import { BasicTrigger, Buffer, EmptyNotification, } from '../../../components'
import { toggleNewCommentInput } from '../../../redux/actions/commentActions'
import 'simplebar/dist/simplebar.min.css'



const conversationReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMMENT_SECTION':
            return {
                ...state,
                toggleTriggerText: action.payload ? 'Click here to VIEW group comments' : 'Click here to MAKE a new comment',
            }

        default:
            return state
    }
}

const initialState = { toggleTriggerText: '', }

const CommentSection_proto = ({ 
    toggleNewCommentInput, 
    comments, showNewCommentInput,
    image, displayName, isUserAMember, }) => {

    const [state, dispatch] = useReducer(conversationReducer, initialState)

    const { toggleTriggerText, } = state

    useEffect(() => { 
        dispatch({ type: 'TOGGLE_COMMENT_SECTION', payload: showNewCommentInput, })
    }, [showNewCommentInput, comments])


    return (
        <div>
            <h3>Club Conversation</h3>
            <Buffer thickness={7} />
            {isUserAMember
                && <Fragment>
                    <BasicTrigger 
                        //onClick={() => setShowInputBlock(!showInputBlock)}
                        onClick={toggleNewCommentInput}>
                        {toggleTriggerText}
                    </BasicTrigger>
                    <Buffer thickness={3} />
                </Fragment> 
            }
            {/*  */}
            {showNewCommentInput  
                && <InputBlock showInputBlock={showNewCommentInput}>
                    <MakeComment
                        userProfile={image}
                        displayName={displayName}
                        showInputBlock={showNewCommentInput} />
                </InputBlock>}

            {!showNewCommentInput
                ? Array.isArray(comments) && comments.length > 0 
                    ?  (<Simplebar style={{ height: '600px' }}>
                            <div id='commentContainer'>
                                {comments.map((comment, index) => (
                                    <div key={comment._id}>
                                        <Comment 
                                            locator={index}
                                            comment={comment}
                                            isUserAMember={isUserAMember} />
                                        <Buffer thickness={.5} />
                                    </div>))}    
                            </div>
                        </Simplebar> 
                    ) : (
                        <EmptyNotification 
                            linkTo={''}
                            linkMessage={''}
                            preMessage={`There are currently no comments in this club`} />
                    )
                : null
            }
            
        </div>
    )
}


CommentSection_proto.propTypes = {
    comments: PropTypes.array.isRequired,
    showNewCommentInput: PropTypes.bool.isRequired,
    toggleNewCommentInput: PropTypes.func.isRequired,
    
    image: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    
    isUserAMember: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    comments: state.comments.comments,
    showNewCommentInput: state.comments.showNewCommentInput,
    toggleNewCommentInput: state.comments.toggleNewCommentInput,
    
    image: state.account.image,
    displayName: state.account.displayName,
    
    isUserAMember: state.clubs.isUserAMember,
})

const CommentSection = connect(mapStateToProps, { toggleNewCommentInput, })(CommentSection_proto)
export { CommentSection }
