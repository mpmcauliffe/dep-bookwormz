import React, { useState, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { triggerAuthError, } from '../../redux/actions/authActions'
import { searchBooks, setLoading, } from '../../redux/actions/bookActions'
import { searchClubs, } from '../../redux/actions/clubActions'
import { checkUser, } from '../../middleware/checkUser'
import { SearchContainer, SearchForm, } from './Search.comp'


export const Searchbar_proto = ({ 
    searchBooks, setLoading, triggerAuthError,
    searchFor, queryString, 
    searchClubs,
}) => {
    const [txt, setTxt] = useState('')
    const history = useHistory()

    const changeTxt = e => {
        setTxt(e.target.value)

        if (searchFor === 'clubs') {
            searchClubs(txt)
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        setLoading()
        
        if (!checkUser()) {
            triggerAuthError('1', `Search cannot be completed. Please try logging in again.`, history)
            return
        } 

        if (searchFor === 'books') {
            searchBooks(txt)
            return
        }

        return
    }

    useEffect(() => {
        if (typeof queryString !== 'undefined' && queryString.length > 0) {
            setTxt(queryString)
        }
    }, [queryString])


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
    setLoading: PropTypes.func.isRequired,
    triggerAuthError: PropTypes.func.isRequired,
    searchFor: PropTypes.string.isRequired,
    queryString: PropTypes.string.isRequired,
    searchClubs: PropTypes.func.isRequired,
}

// const mapStateToProps = state => ({
//     queryString: state.books.bookSearchQuery,
// })

const Searchbar = connect(null, { searchBooks, setLoading, triggerAuthError, searchClubs, })(Searchbar_proto)
export { Searchbar }
