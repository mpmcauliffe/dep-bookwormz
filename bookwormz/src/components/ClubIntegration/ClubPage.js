import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { useHistory, useParams, } from 'react-router-dom'
import { Members, } from './sections'
import {  BiGrid, Buffer, ClubImg, ClubHeaderGrid, HeaderLink, HeaderSection, MainContent,
        Spinner, StandarGrid, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'
import { getClub, } from '../../redux/actions/clubActions'
// import { truncate, } from '../../helpers/truncate'


export const Club_proto = ({ getClub, currentClub, }) => {
    const history                       = useHistory()
    let { clubId }                      = useParams()
    
    console.log(currentClub)
    //console.log(currentClub?.members)
    useEffect(() => {
        if (!currentClub) { getClub(clubId, history) }
    
    // eslint-disable-next-line
    }, [getClub, currentClub, clubId])

// 550 char count
    if (!currentClub || Object.keys(currentClub).length === 0) { return <Spinner /> }


    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
                <MainContent>
                    <HeaderSection>
                        <h4>{currentClub.clubName}</h4>
                        <HeaderLink to='/clubs'>
                            <i className='fas fa-caret-left fa-2x' />
                            <span>&nbsp;&nbsp;&nbsp; Return to Clubs</span>
                        </HeaderLink>
                    </HeaderSection>
                    <br /><br /><br /><br /><br /><br />
                    <ClubHeaderGrid>
                        <ClubImg 
                            alt='club_book_cover'
                            src={require(`./img/${currentClub.bookNumber}.png`).default} />

                        <div className='info-cell'>
                            <p>{currentClub.description}</p>
                        </div>
                    </ClubHeaderGrid>
                    
                    <Buffer thickness={7} />
                    {currentClub.books.length < 1 && <p>There are no books in this club.</p>}
                    
                    <BiGrid>
                        <div style={{ height: '60rem', border: '.5rem solid pink' }} />
                        <div style={{ height: '60rem', border: '.5rem solid pink' }} />
                    </BiGrid>
                    <Buffer thickness={7} />
                    
                    <h3>Club Members</h3><Buffer thickness={7} />
                    <StandarGrid>
                        {currentClub.members.map(member => (
                            <Members 
                                member={member}
                                key={member.memberId} />
                        ))}
                    </StandarGrid>
                </MainContent>
        </motion.div>
    )
}


Club_proto.propTypes = {
    getClub: PropTypes.func.isRequired,
    currentClub: PropTypes.object,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub
})

const Club = connect(mapStateToProps, { getClub, })(Club_proto)
export { Club }
