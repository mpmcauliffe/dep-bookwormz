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
        default: 
            return state
    }
}

const initialState = {
    showUserBookshelf: false,
    bookshelfTitle: 'Club Bookshelf',
    toggleTriggerText: 'Click to switch to YOUR bookshelf',
    bookshelfMessage: 'There aren\'t any books in this bookshelf',
    isBookshelfLoaded: false,
}

export const ClubShelf_proto = ({ getClubBooks, getBooks, clubBooks, }) => {

    const [state, dispatch] = useReducer(clubBookshelfReducer, initialState)

    // const [showUserBookshelf, setShowUserBookshelf]     = useState(false)
    // const [bookshelfTitle, setBookshelfTitle]           = useState('Club Bookshelf')
    // const [toggleTriggerText, setToggleTriggerText]     = useState('Click to switch to your bookshelf')
    
     const { showUserBookshelf, bookshelfTitle, bookshelfMessage, toggleTriggerText, isBookshelfLoaded, } = state
    
    let { clubId } = useParams()
   
    const handleClubBookshelfToggle = e => {
        if (!showUserBookshelf) {
            setShowUserBookshelf(true)
            setToggleTriggerText('Click to view club bookshelf')
            setBookshelfTitle('Your Bookshelf')

            return
        }
        setShowUserBookshelf(false)
        setBookshelfTitle('Club Bookshelf')
        setToggleTriggerText('Click to switch to your bookshelf')
    }

    useEffect(() => {
        if (clubBooks.length === 0) { getClubBooks(clubId) }
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
                        preMessage={`There aren't any books in this library`} />
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
