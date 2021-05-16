import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { Comment } from './Comment'
import { Buffer, EmptyNotification, } from '../../../components'
import { dummytext } from './dummytext'
import 'simplebar/dist/simplebar.min.css'


const CommentSection_proto = ({ comments=dummytext, }) => {
    //console.log(comments)

    return (
        <div>
            <h3>Club Conversation</h3>
            <Buffer thickness={12.5} />
            {Array.isArray(comments) && comments.length > 0 
                ?  (<Simplebar style={{ height: '600px' }}>
                       {comments.map(comment => (
                            <div key={comment._id}>
                                <Comment comment={comment} />
                                <Buffer thickness={.5} />
                            </div>))}
                    </Simplebar> 
                ) : (
                    <EmptyNotification 
                        linkTo={''}
                        linkMessage={''}
                        preMessage={`There aren't any books in this library`} />
                )
            }
        </div>
    )
}


CommentSection_proto.propTypes = {
    comments: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({

})

const CommentSection = connect(mapStateToProps, {  })(CommentSection_proto)
export { CommentSection }
