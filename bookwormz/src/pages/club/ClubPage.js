import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { useHistory, useParams, } from 'react-router-dom'
import { BiGrid, Buffer, EmptyNotification, MainContent, Spinner, StandarGrid, 
        CommentSection, ClubHeader, ClubShelf, MemberButton, Members,} from '../../components'
import { pageTransition, pageVariants, } from '../zAnimation'
import { getClub, } from '../../redux/actions/clubActions'
import { getClubBooks, getBooks, } from '../../redux/actions/bookActions'
import { getComments, } from '../../redux/actions/commentActions'
import { getUserInfo, } from '../../redux/actions/accountActions'
// import { truncate, } from '../../helpers/truncate'


const Club_proto = ({ 
    getClub, getBooks, getClubBooks, getUserInfo, getComments,
    currentClub, 
    isUserAMember, isCheifAdmin, }) => {
        
    const history                      = useHistory()
    let { clubId }                     = useParams()
    
    // console.log(currentClub)
    // console.log(clubBooks)
    useEffect(() => { 
        if (!currentClub) { getClub(clubId, history) }
        
        getClubBooks(clubId)
        getComments(clubId)
        getBooks()
        getUserInfo()
        

        window.scroll(0, 0)

    // eslint-disable-next-line
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
                        <CommentSection
                            isUserAMember={isUserAMember} />
                        
                        <ClubShelf />

                        {/* <div style={{ height: '60rem', border: '.5rem solid pink' }} /> */}
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
    isUserAMember: PropTypes.bool.isRequired,

    getBooks: PropTypes.func.isRequired,
    getClubBooks: PropTypes.func.isRequired,

    getUserInfo: PropTypes.func.isRequired,

    getComments: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub,
    isUserAMember: state.clubs.isUserAMember,
    
    getBooks: state.books.getBooks,
    getClubBooks: state.books.getClubBooks,

    getComments: state.comments.getComments,
})

const ClubPage = connect(mapStateToProps, { getClub, getBooks, getClubBooks, getUserInfo, getComments, })(Club_proto)
export { ClubPage }
