import React, { useEffect, } from 'react'
import { Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { BookGrid, HeaderLink, HeaderSection, MainContent, Searchbar, Spinner, } from '../components'
import { getAllClubs } from '../redux/actions/clubActions'


export const Clubs_proto = ({ getAllClubs, clubSearchQuery, availableClubs, }) => {

    useEffect(() => { 
        console.log('useEffect Club.js')
        getAllClubs() })

    if (availableClubs.length < 1) { return <Spinner /> }

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
                    {/* //     bookNumber: "5"
                    // books: []
                    // chiefAdmin: "60420bd1925e366aa89b048d"
                    // chiefEmail: "mcauliffe99@gmail.com"
                    // chiefPortraitURL: "https://lh3.googleusercontent.com/a-/AOh14GibD-j9kmzjWfYIRjMZphnMLqzu45lcOghcXMck3Q=s96-c"
                    // clubName: "The Big Bear Book Club"
                    // createdAt: "2021-03-13T04:45:55.291Z"
                    // createdBy: "60420bd1925e366aa89b048d"
                    // description: "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails."
                    // members: ["60420bd1925e366aa89b048d"]
                    // visibility: "public"
                    // __v: 0
                    // _id: "604c4383fd60c4436c509b88" */}
                    
                {/*  */}
                <BookGrid id='book-cover-select'>
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
                </BookGrid>
            </MainContent>
        </motion.div>
    )
}


Clubs_proto.propTypes = {
    getAllClubs: PropTypes.func.isRequired,
    clubSearchQuery: PropTypes.string.isRequired,
    availableClubs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    getAllClubs: state.clubs.getClubs,
    clubSearchQuery: state.clubs.clubSearchQuery,
    availableClubs: state.clubs.availableClubs,
})

const Clubs = connect(mapStateToProps, { getAllClubs, })(Clubs_proto)
export { Clubs }
