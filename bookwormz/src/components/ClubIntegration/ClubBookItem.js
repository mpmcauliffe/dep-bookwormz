import React from 'react'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../bookShelf/Books.comp'
import { AppButton, } from '../../components'


export const ClubBookItem = ({ book, isUserBookshelf, }) => {
    const { bookId, title, infoLink, image, authors } = book
    
    const addBookToClub = e => {
        e.stopPropagation()
        console.log('Book added!')
    }

    const bookItem = (
        <ClubBookShelf>
            <img src={`${image}`} alt='cover' className='cover' />
            <div>
                <p className='title'><strong>{title}</strong></p>
                <div>
                    <p>{authors.map(author => <span key={author}>{author}&nbsp;&nbsp;&nbsp;</span>)}</p>
                </div> 
            {isUserBookshelf 
                && <AppButton
                name={bookId}
                title={title}
                alertButton={false}
                onClick={addBookToClub}>
                    Add</AppButton>}
            </div>
        </ClubBookShelf>
    )

    if (isUserBookshelf) { return bookItem }
    
    return (
        <a href={`${infoLink}`}>
            {bookItem}
        </a>    
    )
}

ClubBookItem.propTypes = {
    book: PropTypes.object.isRequired,
    isUserBookshelf: PropTypes.bool.isRequired,
}
