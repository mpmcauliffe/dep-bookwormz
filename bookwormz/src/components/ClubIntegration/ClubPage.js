import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { useHistory, useParams, } from 'react-router-dom'
import { ClubHeader, ClubShelf, MemberButton, Members, } from './sections'
import { BiGrid, Buffer, EmptyNotification, MainContent, Spinner, StandarGrid, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'
import { getClub, } from '../../redux/actions/clubActions'
import { getBooks, } from '../../redux/actions/bookActions'
// import { truncate, } from '../../helpers/truncate'


const Club_proto = ({ 
    getClub, getBooks, 
    currentClub, clubBooks, myBooks,
    isUserAMember, }) => {
        
    const [showUserBookshelf, setShowUserBookshelf]     = useState(false)
    const history                                       = useHistory()
    let { clubId }                                      = useParams()
    
    const handleClubBookshelfToggle = e => {
        console.log('toggle clicked!')
    }

    // console.log(currentClub)
    // console.log(clubBooks)
    useEffect(() => { 
        if (!currentClub) { getClub(clubId, history) }
        if (myBooks.length < 1) { getBooks() }

    }, [getClub, currentClub, clubId, history, isUserAMember])
    

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
                    
                    <MemberButton 
                        currentId={clubId}
                        clubName={currentClub.clubName} />
                    <Buffer thickness={7} />
                    
                    <BiGrid>
                        <div style={{ height: '60rem', border: '.5rem solid pink' }} />
                        
                        <ClubShelf
                            clubBooks={clubBooks}
                            clubName={currentClub.clubName}
                            numberOfBooks={clubBooks.length}
                            switchBookshelf={handleClubBookshelfToggle} />

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
    isUserAMember: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub,
    clubBooks: state.clubs.clubBooks,
    isUserAMember: state.clubs.isUserAMember,
    getBooks: state.books.getBooks,
    myBooks: state.books.myBooks,
})

const ClubPage = connect(mapStateToProps, { getClub, getBooks, })(Club_proto)
export { ClubPage }
