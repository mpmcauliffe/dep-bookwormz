import React from 'react'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'


export const ClubBookItem = ({ book, }) => {
    return (
    <a href={`${book.infoLink}`}>
        <ClubBookShelf>
            <img src={`${book.image}`} alt='book-cover' className='cover' />
            <div>
                <p className='title'><strong>{book.title}</strong></p>
                <div>
                    <p>{book.authors.map(author => <span key={author}>{author}&nbsp;&nbsp;&nbsp;</span>)}</p>
                </div>
            </div>
        </ClubBookShelf>
    </a>    
)}

ClubBookItem.propTypes = {
    book: PropTypes.object.isRequired,
}
