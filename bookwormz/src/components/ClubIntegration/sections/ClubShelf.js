import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export const ClubShelf_proto = () => {
    return (
        <div>
            
        </div>
    )
}

ClubShelf_proto.propTypes = {

}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    image: state.account.image,
})

const ClubShelf = connect(mapStateToProps, { })(ClubShelf_proto)
export { ClubShelf }
