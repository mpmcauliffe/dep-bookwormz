import React from 'react'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'


export const ClubBookItem = ({ book, }) => (

    <ClubBookShelf>
        <img src={`${book.image}`} alt='book-cover' />
        <p><strong>{book.title}</strong></p>
    </ClubBookShelf>

    
)

ClubBookItem.propTypes = {
    book: PropTypes.object.isRequired,
}
