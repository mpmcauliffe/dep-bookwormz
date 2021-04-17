import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'
import { getClubBookShelf } from '../../../redux/actions/clubActions'


export const ClubShelf_proto = ({ clubId, getClubBookShelf, clubBooks, }) => {

    useEffect(() => {
        // if (!clubBooks) { getClubBookShelf(clubId) }
    })

    return (
        <div>
            <ClubBookShelf>
            
            </ClubBookShelf>
        </div>
        
    )
}

ClubShelf_proto.propTypes = {
    getClubBookShelf: PropTypes.func.isRequired,
    clubBooks: PropTypes.array,
}

const mapStateToProps = state => ({
    getClubBookShelf: state.clubs.getClubBookShelf,
    clubBooks: state.clubs.clubBooks,
})

const ClubShelf = connect(mapStateToProps, { getClubBookShelf, })(ClubShelf_proto)
export { ClubShelf }
