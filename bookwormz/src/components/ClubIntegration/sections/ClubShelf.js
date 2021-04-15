import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ClubBookShelf, } from '../../bookShelf/Books.comp'
import { getClubBookShelf } from '../../../redux/actions/clubActions'


export const ClubShelf_proto = ({ clubId, getClubBookShelf }) => {

    useEffect(() => {
        getClubBookShelf(clubId)
    })

    return (
        <div>
            {}

        </div>
        <ClubBookShelf>
            
        </ClubBookShelf>
    )
}

ClubShelf_proto.propTypes = {
    getClubBookShelf: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    getClubBookShelf: state.clubs.getClubBookShelf
})

const ClubShelf = connect(mapStateToProps, { getClubBookShelf, })(ClubShelf_proto)
export { ClubShelf }
