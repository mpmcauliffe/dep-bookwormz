import React, { useState, useEffect, useReducer, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Simplebar from 'simplebar-react'
import { useParams, } from 'react-router-dom'
import { ClubBookItem, } from './ClubBookItem'
import { BasicTrigger, Buffer, EmptyNotification, } from '../../components'
import { getClubBooks, getBooks, } from '../../redux/actions/bookActions'
import 'simplebar/dist/simplebar.min.css'


const clubBookshelfReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BOOKSHELF':
            const { showUserBookshelf, clubBooks, myBooks, } = action.payload
            return {
                ...state,
                bookshelfTitle: showUserBookshelf ? 'Your Bookshelf' : 'Club Bookshelf',
                toggleTriggerText: showUserBookshelf ? 'Click to view club bookshelf' : 'Click to view your bookshelf',
                bookshelfMessage: showUserBookshelf ? 'You don\'t have any books in your library' : 'There aren\'t any books in this library',
                booksOnDisplay: showUserBookshelf ? myBooks : clubBooks,
            }
        default: 
            return state
    }
}

const initialState = { bookshelfTitle: '', toggleTriggerText: '', bookshelfMessage: '', booksOnDisplay: [], }

export const ClubShelf_proto = ({ getClubBooks, getBooks, clubBooks, myBooks, }) => {

    const [state, dispatch] = useReducer(clubBookshelfReducer, initialState)

    const [showUserBookshelf, setShowUserBookshelf]     = useState(false)

    const { bookshelfTitle, bookshelfMessage, toggleTriggerText, booksOnDisplay, } = state
    
    let { clubId } = useParams()
    
    const handleClubBookshelfToggle = () => {
        setShowUserBookshelf(!showUserBookshelf)
        const bookshelfSettings = { showUserBookshelf, clubBooks, myBooks, }
        dispatch({ type: 'TOGGLE_BOOKSHELF', payload: bookshelfSettings })
    }


    useEffect(() => {
        //if (clubBooks.length === 0) { 
            // getClubBooks(clubId)
            dispatch({ type: 'TOGGLE_BOOKSHELF', payload: showUserBookshelf }) 
        
        // if (myBooks.length === 0) { getBooks() }
    }, [clubBooks, getClubBooks,clubId, showUserBookshelf])


    return (
        <div>
            <h3>{bookshelfTitle}</h3>
            <Buffer thickness={7} />
            
            <BasicTrigger 
                onClick={handleClubBookshelfToggle}>
                {toggleTriggerText}
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
                        preMessage={bookshelfMessage} />
                )
            }
        </div>
    )
}

ClubShelf_proto.propTypes = {
    clubBooks: PropTypes.array.isRequired,
    getClubBooks: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
    getBooks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    getClubBooks: state.books.getClubBooks,
    clubBooks: state.books.clubBooks,
    getBooks: state.books.getBooks,
    myBooks: state.books.myBooks,
})

const ClubShelf = connect(mapStateToProps, { getClubBooks, getBooks, })(ClubShelf_proto)
export { ClubShelf }
