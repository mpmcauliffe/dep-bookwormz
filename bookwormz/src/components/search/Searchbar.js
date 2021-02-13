import React, { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SearchContainer, SearchForm, } from './Search.comp'


export const Searchbar_proto = ({ searchFor }) => {
    const [txt, setTxt] = useState('')

    const changeTxt = e => setTxt(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        console.log(txt)
    }


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


const Searchbar = connect(null, { })(Searchbar_proto)
export { Searchbar }
