import React from 'react'
import PropTypes from 'prop-types'
import {  ClubBookItem, } from '../sections'
import { Buffer, EmptyNotification, } from '../../../components'


export const ClubShelf = ({ clubBooks, numberOfBooks, clubName, }) => {
    return (
        <div>
            <h3>Club Book Shelf</h3>
            <Buffer thickness={7} />
            {Array.isArray(clubBooks) && numberOfBooks > 0 
                ? clubBooks.map(book => (
                    <div key={book.bookId}>
                        <ClubBookItem book={book} />
                        <Buffer thickness={.5} />
                    </div>
                )) : (
                    <EmptyNotification 
                        linkTo={''}
                        linkMessage={''}
                        preMessage={`There aren't any books in ${clubName}'s library`} />
                )
            }
        </div>
    )
}

ClubShelf.propTypes = {
    clubBooks: PropTypes.array.isRequired,
    numberOfBooks: PropTypes.number.isRequired,
    clubName: PropTypes.string.isRequired,
}
