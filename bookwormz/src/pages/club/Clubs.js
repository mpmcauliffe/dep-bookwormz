import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from '../zAnimation'
import { StandarGrid, Buffer, ClubDock, HeaderLink, HeaderSection, MainContent, Searchbar, } from '../../components'
import { getAllClubs, fillClubs, resetClubs } from '../../redux/actions/clubActions'
import { fillComments, } from '../../redux/actions/commentActions'


export const Clubs_proto = ({ getAllClubs, clubSearchQuery, availableClubs, fillClubs, fillComments, resetClubs, }) => {

    useEffect(() => { 
        getAllClubs()
        resetClubs() 
        // fillComments() DO NOT TURN ON
        window.scroll(0, 0)
    
    // eslint-disable-next-line
    }, [ ])

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
                                <ClubDock
                                    index={i}
                                    club={club}
                                    key={club._id} />
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
    fillComments: PropTypes.func.isRequired,
    resetClubs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    getAllClubs: state.clubs.getClubs,
    clubSearchQuery: state.clubs.clubSearchQuery,
    availableClubs: state.clubs.availableClubs,
    fillClubs: state.clubs.fillClubs,
    fillComments: state.comments.fillComments,
})

const Clubs = connect(mapStateToProps, { getAllClubs, fillClubs, fillComments, resetClubs, })(Clubs_proto)
export { Clubs }
