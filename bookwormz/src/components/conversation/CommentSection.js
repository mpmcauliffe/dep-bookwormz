import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Comment } from './sections'
import { Buffer, EmptyNotification, } from '../../../components'


const CommentSection_proto = () => {
    return (
        <div>
            <h3>Club Conversation</h3>
            <Buffer thickness={7} />
            {Array.isArray() && numberOfBooks > 0 
                ?  (<Simplebar style={{ height: '600px' }}>
                       {clubBooks.map(book => (
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
    
}

const mapStateToProps = state => ({

})

const CommentSection = connect(mapStateToProps, {  })(CommentSection_proto)
export { CommentSection }
