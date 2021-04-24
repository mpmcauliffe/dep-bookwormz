import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { useHistory, useParams, } from 'react-router-dom'
import { ClubHeader, ClubShelf, MemberButton, Members, } from './sections'
import { BiGrid, Buffer, EmptyNotification, MainContent, Spinner, StandarGrid, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'
import { getClub, } from '../../redux/actions/clubActions'
// import { truncate, } from '../../helpers/truncate'


const Club_proto = ({ getClub, currentClub, clubBooks, }) => {
    const history                       = useHistory()
    let { clubId }                      = useParams()
    
    // console.log(currentClub)
    // console.log(clubBooks)
    useEffect(() => {
        if (!currentClub) { getClub(clubId, history) }

    }, [getClub, currentClub, clubId, history])
    

    if (!currentClub || Object.keys(currentClub).length === 0) { return <Spinner /> }

    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
                <MainContent>
                    <ClubHeader
                        clubName={currentClub.clubName}
                        clubCover={currentClub.bookNumber}
                        description={currentClub.description} />
                    <Buffer thickness={3} />
                    <MemberButton />
                    <Buffer thickness={7} />
                    
                    <BiGrid>
                        <div style={{ height: '60rem', border: '.5rem solid pink' }} />
                        
                        <ClubShelf
                            clubBooks={clubBooks}
                            clubName={currentClub.clubName}
                            numberOfBooks={clubBooks.length} />

                        {/* */}
                    </BiGrid>
                    <Buffer thickness={7} />
                    
                    <h3>Club Members</h3><Buffer thickness={7} />
                    {currentClub.members.length > 0 
                        ?  (
                            <StandarGrid>
                                {currentClub.members.map(member => (
                                    <Members 
                                        member={member}
                                        key={member.memberId} />
                                ))}
                            </StandarGrid>
                        ) : (
                            <EmptyNotification
                                linkTo={''}
                                linkMessage={''}
                                preMessage={`There aren't any current members of ${currentClub.clubName}`} />
                        )
                    }
                </MainContent>
        </motion.div>
    )
}


Club_proto.propTypes = {
    getClub: PropTypes.func.isRequired,
    currentClub: PropTypes.object,
    clubBooks: PropTypes.array,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub,
    clubBooks: state.clubs.clubBooks,
})

const ClubPage = connect(mapStateToProps, { getClub, })(Club_proto)
export { ClubPage }
