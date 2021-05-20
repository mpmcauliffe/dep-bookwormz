import React, { useState, useReducer, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { Comment } from './Comment'
import { MakeComment } from './MakeComment'
import { InputBlock, } from './Comments.comp'
import { BasicTrigger, Buffer, EmptyNotification, } from '../../../components'
import { dummytext } from './dummytext'
import 'simplebar/dist/simplebar.min.css'



const conversationReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_COMMENT_SECTION':
            return {
                ...state,

            }

        default:
            return state
    }
}

const CommentSection_proto = ({ comments=dummytext, }) => {
    const [showInputBlock, setShowInputBlock] = useState(false)


    //console.log(comments)

    return (
        <div>
            <h3>Club Conversation</h3>
            <Buffer thickness={7} />
            
            <BasicTrigger 
                onClick={() => setShowInputBlock(!showInputBlock)}>
                Click here to MAKE a new comment
            </BasicTrigger>
            <Buffer thickness={3} />
            {/*  */}
            <InputBlock showInputBlock={showInputBlock}>
                <MakeComment />
            </InputBlock>

            {!showInputBlock
                ? Array.isArray(comments) && comments.length > 0 
                    ?  (<Simplebar style={{ height: '600px' }}>
                        <div id='commentContainer'>
                        {comments.map(comment => (
                        <div key={comment._id}>
                            <Comment comment={comment} />
                            <Buffer thickness={.5} />
                        </div>))}    
                        </div>
                        

                        
                        </Simplebar> 
                    ) : (
                        <EmptyNotification 
                            linkTo={''}
                            linkMessage={''}
                            preMessage={`There aren't any books in this library`} />
                    )
                : null
            }
            
        </div>
    )
}


CommentSection_proto.propTypes = {
    //comments: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({

})

const CommentSection = connect(mapStateToProps, {  })(CommentSection_proto)
export { CommentSection }
