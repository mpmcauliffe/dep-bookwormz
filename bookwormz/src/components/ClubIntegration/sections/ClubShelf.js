import React from 'react'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'


export const ClubShelf = ({ book, }) => (
    <div>
        <ClubBookShelf>
        
        </ClubBookShelf>
    </div>
    
)

ClubShelf.propTypes = {
    book: PropTypes.object.isRequired,
}
