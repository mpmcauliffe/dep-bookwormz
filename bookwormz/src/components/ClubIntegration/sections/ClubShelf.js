import React from 'react'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import {  ClubBookItem, } from '../sections'
import { Buffer, EmptyNotification, HeaderLink, } from '../../../components'
import 'simplebar/dist/simplebar.min.css'


export const ClubShelf = ({ clubBooks, numberOfBooks, clubName, }) => {
    return (
        <div>
            <h3>Club Bookshelf</h3>
            <Buffer thickness={7} />
            <HeaderLink>Click to add books from your bookshelf</HeaderLink>
            <Buffer thickness={7} />
            {Array.isArray(clubBooks) && numberOfBooks > 0 
                ?  (<Simplebar style={{ height: '600px' }}>
                       {clubBooks.map(book => (
                            <div key={book.bookId}>
                                <ClubBookItem book={book} />
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

ClubShelf.propTypes = {
    clubBooks: PropTypes.array.isRequired,
    numberOfBooks: PropTypes.number.isRequired,
    clubName: PropTypes.string.isRequired,
}
