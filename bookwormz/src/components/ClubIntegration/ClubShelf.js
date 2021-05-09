import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { useParams, } from 'react-router-dom'
import { ClubBookItem, } from './ClubBookItem'
import { BasicTrigger, Buffer, EmptyNotification, } from '../../components'
import { getClubBooks } from '../../redux/actions/bookActions'
import 'simplebar/dist/simplebar.min.css'


export const ClubShelf_proto = ({ getClubBooks,
    clubBooks, clubName, }) => {

    const [showUserBookshelf, setShowUserBookshelf]     = useState(false)
    let { clubId }                                      = useParams()

    const handleClubBookshelfToggle = e => {
        console.log('toggle clicked!')
    }
console.log(clubBooks)
    useEffect(() => {
        if (clubBooks.length === 0) { getClubBooks(clubId) }
    }, [])


    return (
        <div>
            <h3>Club Bookshelf</h3>
            <Buffer thickness={7} />
            
            <BasicTrigger 
                onClick={handleClubBookshelfToggle}>
                Click to switch to your bookshelf
            </BasicTrigger>
            <Buffer thickness={3} />
            
            {Array.isArray(clubBooks) && clubBooks.length > 0 
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

ClubShelf_proto.propTypes = {
    clubBooks: PropTypes.array.isRequired,
    clubName: PropTypes.string.isRequired,
    getClubBooks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    getClubBooks: state.books.getClubBooks,
    clubBooks: state.books.clubBooks,
})

const ClubShelf = connect(mapStateToProps, { getClubBooks, })(ClubShelf_proto)
export { ClubShelf }
