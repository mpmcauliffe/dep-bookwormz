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
            return {
                ...state,
                bookshelfTitle: action.payload ? 'Your Bookshelf' : 'Club Bookshelf',
                toggleTriggerText: action.payload ? 'Click to view club bookshelf' : 'Click to view your bookshelf',
                bookshelfMessage: action.payload ? 'You don\'t have any books in your library' : 'There aren\'t any books in this library',
            }
        default: 
            return state
    }
}

const initialState = { bookshelfTitle: '', toggleTriggerText: '', bookshelfMessage: '', }

export const ClubShelf_proto = ({ getClubBooks, getBooks, clubBooks, myBooks, }) => {

    const [state, dispatch] = useReducer(clubBookshelfReducer, initialState)

    const [showUserBookshelf, setShowUserBookshelf]     = useState(false)
    const [booksOnDisplay, setBooksOnDisplay]           = useState([ ])

    const { bookshelfTitle, bookshelfMessage, toggleTriggerText, } = state
        
    const handleClubBookshelfToggle = () => setShowUserBookshelf(!showUserBookshelf)

    useEffect(() => {
        showUserBookshelf ? setBooksOnDisplay(myBooks) : setBooksOnDisplay(clubBooks)
        dispatch({ type: 'TOGGLE_BOOKSHELF', payload: showUserBookshelf }) 

    // eslint-disable-next-line    
    }, [showUserBookshelf])


    return (
        <div>
            <h3>{bookshelfTitle}</h3>
            <Buffer thickness={7} />
            
            <BasicTrigger 
                onClick={handleClubBookshelfToggle}>
                {toggleTriggerText}
            </BasicTrigger>
            {showUserBookshelf && <p>Click 'Add' button to add a book to this club's library</p>}
            <Buffer thickness={3} />
            
            {Array.isArray(booksOnDisplay) && booksOnDisplay.length > 0 
                ?  (<Simplebar style={{ height: '600px' }}>
                       {booksOnDisplay.map(book => (
                            <div key={book.bookId}>
                                <ClubBookItem 
                                    book={book}
                                    isUserBookshelf={showUserBookshelf} />
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
