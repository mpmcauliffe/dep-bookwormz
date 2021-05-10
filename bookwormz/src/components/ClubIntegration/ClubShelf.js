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

export const ClubShelf_proto = ({ getClubBooks, getBooks, clubBooks, }) => {

    const [state, dispatch] = useReducer(clubBookshelfReducer, initialState)

    const [showUserBookshelf, setShowUserBookshelf]     = useState(false)
    // const [bookshelfTitle, setBookshelfTitle]           = useState('Club Bookshelf')
    // const [toggleTriggerText, setToggleTriggerText]     = useState('Click to switch to your bookshelf')
    
     const { bookshelfTitle, bookshelfMessage, toggleTriggerText, } = state
    
    let { clubId } = useParams()
   
    const handleClubBookshelfToggle = () => {
        setShowUserBookshelf(!showUserBookshelf)
        dispatch({ type: 'TOGGLE_BOOKSHELF', payload: showUserBookshelf })
    }
    // {
    //     if (!showUserBookshelf) {
    //         setShowUserBookshelf(true)
    //         setToggleTriggerText('Click to view club bookshelf')
    //         setBookshelfTitle('Your Bookshelf')

    //         return
    //     }
    //     setShowUserBookshelf(false)
    //     setBookshelfTitle('Club Bookshelf')
    //     setToggleTriggerText('Click to switch to your bookshelf')
    // }

    useEffect(() => {
        if (clubBooks.length === 0) { 
            getClubBooks(clubId)
            dispatch({ type: 'TOGGLE_BOOKSHELF', payload: showUserBookshelf }) 
        }
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
}

const mapStateToProps = state => ({
    getClubBooks: state.books.getClubBooks,
    clubBooks: state.books.clubBooks,
})

const ClubShelf = connect(mapStateToProps, { getClubBooks, })(ClubShelf_proto)
export { ClubShelf }
