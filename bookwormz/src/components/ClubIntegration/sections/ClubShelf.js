import React from 'react'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'


export const ClubShelf = ({ book, }) => (

    <ClubBookShelf>
    
    </ClubBookShelf>

    
)

ClubShelf.propTypes = {
    book: PropTypes.object.isRequired,
}
