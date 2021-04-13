import React, { useEffect, } from 'react'
import { Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { StandarGrid, Buffer, HeaderLink, HeaderSection, MainContent, Searchbar, } from '../components'
import { getAllClubs, fillClubs, } from '../redux/actions/clubActions'


export const Clubs_proto = ({ getAllClubs, clubSearchQuery, availableClubs, fillClubs, }) => {

    useEffect(() => { getAllClubs() })

    // if (availableClubs.length < 1) { return <Spinner /> }

    return (
        <motion.div 
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <HeaderSection>
                    <h4>Clubs</h4>
                    <HeaderLink to='/createclub'>
                        <span>Create Club &nbsp;&nbsp;&nbsp;</span>
                        <i className='fas fa-caret-right fa-2x' />
                    </HeaderLink>
                </HeaderSection>
                <br /><br /><br /><br />
                <Searchbar 
                    searchFor='clubs'
                    queryString={clubSearchQuery} />
                    {/* */}
                <Buffer thickness={15} />
                {/* */}
                {availableClubs.length < 1
                    ?  <p>There aren't any book clubs at this time.</p>
                    : (
                        <StandarGrid id='book-cover-select'>
                            {availableClubs.map((club, i) => (
                                <Link
                                    key={club._id}
                                    to={`/club/${club._id}`} >
                                    <span     
                                        className='grid-cell'>
                                        
                                        <label htmlFor={`${club.clubName}`}>
                                            <img 
                                                name={`${i}—${club.clubName}`}
                                                alt='CLUB_BOOK-COVER'
                                                className='club-image'
                                                // onClick={handleBookCoverSelect}
                                                src={require(`../components/ClubIntegration/img/${club.bookNumber}.png`).default} />
                                        </label>
                                        <p style={{ marginTop: '3rem', color: 'black' }}>{club.clubName}</p>
                                    </span>
                                </Link>
                                
                            ))}
                        </StandarGrid>
                )}
                
            </MainContent>
        </motion.div>
    )
}


Clubs_proto.propTypes = {
    getAllClubs: PropTypes.func.isRequired,
    clubSearchQuery: PropTypes.string.isRequired,
    availableClubs: PropTypes.array.isRequired,
    fillClubs: PropTypes.func,
}

const mapStateToProps = state => ({
    getAllClubs: state.clubs.getClubs,
    clubSearchQuery: state.clubs.clubSearchQuery,
    availableClubs: state.clubs.availableClubs,
    fillClubs: state.clubs.fillClubs,
})

const Clubs = connect(mapStateToProps, { getAllClubs, fillClubs, })(Clubs_proto)
export { Clubs }
