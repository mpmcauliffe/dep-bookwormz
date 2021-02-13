import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchBooks, } from '../../redux/actions/bookActions'
import { SearchContainer, SearchForm, } from './Search.comp'


export const Searchbar_proto = ({ searchBooks, searchFor, bookSearchQuery, }) => {
    const [txt, setTxt] = useState('')

    const changeTxt = e => setTxt(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        searchBooks(txt)
    }

    useEffect(() => {
        if (bookSearchQuery.length > 0) {
            setTxt(bookSearchQuery)
        }
    }, [bookSearchQuery])


    return (
        <SearchForm onSubmit={onSubmit}>
            <SearchContainer>
                <input 
                    value={txt}
                    onChange={changeTxt}
                    type='text' 
                    name='search' 
                    className='input-bar' />
                <i className='fas fa-search fa-3x' />
            </SearchContainer>
        </SearchForm>
    )
}


Searchbar_proto.propTypes = {
    searchBooks: PropTypes.func,
    searchFor: PropTypes.string,
    bookSearchQuery: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    bookSearchQuery: state.books.bookSearchQuery,
})

const Searchbar = connect(mapStateToProps, { searchBooks })(Searchbar_proto)
export { Searchbar }
