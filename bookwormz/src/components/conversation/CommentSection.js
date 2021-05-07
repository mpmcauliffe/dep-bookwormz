import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { Comment } from './sections'
import { Buffer, EmptyNotification, } from '../../../components'
import { dummytext } from './sections/dummytext'
import 'simplebar/dist/simplebar.min.css'


const CommentSection_proto = ({ comments=dummytext, }) => {
    return (
        <div>
            <h3>Club Conversation</h3>
            <Buffer thickness={7} />
            {Array.isArray(comments) && comments.length > 0 
                ?  (<Simplebar style={{ height: '600px' }}>
                       {comments.map(book => (
                            <div key={book.bookId}>
                                <Comment book={book} />
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
