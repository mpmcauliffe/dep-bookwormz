import React, { Fragment, } from 'react'
import PropTypes from 'prop-types'
import { MemberButton } from './MemberButton'
import { ClubHeaderGrid, ClubImg, HeaderLink, HeaderSection,  } from '../..'

export const ClubHeader = ({ clubName, clubCover, description }) => {
    return (
        <Fragment>
            <HeaderSection>
                <h4>{clubName}</h4>
                <HeaderLink to='/clubs'>
                    <i className='fas fa-caret-left fa-2x' />
                    <span>&nbsp;&nbsp;&nbsp; Return to Clubs</span>
                </HeaderLink>
            </HeaderSection>
            <br /><br /><br /><br /><br /><br />
            <ClubHeaderGrid>
                <ClubImg 
                    alt='club_book_cover'
                    src={require(`../img/${clubCover}.png`).default} />

                <div className='info-cell'>
                    <p>{description}</p>
                </div>
            </ClubHeaderGrid>
        </Fragment>
    )
}

ClubHeader.propTypes = {
    clubName: PropTypes.string.isRequired,
    clubCover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
