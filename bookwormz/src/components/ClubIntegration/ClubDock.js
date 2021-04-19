import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export const ClubDock = ({ club, index, }) => {
    return (
        <Link
            key={club._id}
            to={`/club/${club._id}`} >
            <span     
                className='grid-cell'>
                
                <label htmlFor={`${club.clubName}`}>
                    <img 
                        name={`${index}—${club.clubName}`}
                        alt='CLUB_BOOK-COVER'
                        className='club-image'
                        // onClick={handleBookCoverSelect}
                        src={require(`./img/${club.bookNumber}.png`).default} />
                </label>
                <p style={{ marginTop: '3rem', color: 'black' }}>{club.clubName}</p>
            </span>
        </Link>
    )
}

ClubDock.propTypes = {
    club: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}
