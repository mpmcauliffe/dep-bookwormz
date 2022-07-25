import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { getUserInfo } from '../redux/actions/accountActions'
import { getBooks, } from '../redux/actions/bookActions'
import { getMyClubs, resetClubs, } from '../redux/actions/clubActions'
import { resetComments, } from '../redux/actions/commentActions'
import { pageTransition, pageVariants, } from './zAnimation'
import { Buffer, ClubDock, EmptyNotification, MyBookShelf, HeaderSection, MainContent, StandarGrid } from '../components'


export const Dashboard_proto = ({ 
    getUserInfo, displayName, 
    getBooks, 
    getMyClubs, resetClubs, myClubs,  }) => {

    useEffect(() => { 
        getUserInfo()
        getBooks()
        getMyClubs() 
        resetClubs()
        resetComments()

        window.scroll(0, 0)
        
    // eslint-disable-next-line
    }, [ ])
    

    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <HeaderSection>
                    <h4>Dashboard</h4>
                    
                </HeaderSection>
                {/* <div style={{ height: '60rem', width: '100%', backgroundColor: '#dfdf22' }} /> */}
                <h3 className='subName'>Welcome {displayName}</h3>

                <h3>Your Clubs</h3>
                <Buffer thickness={9} />
                {/* */}
                {Array.isArray(myClubs) 
                    ? (
                        <StandarGrid id='book-cover-select'>
                            {myClubs.map((club, i) => (
                                <ClubDock
                                    index={i}
                                    club={club}
                                    key={club._id} />))}
                        </StandarGrid>
                    ) : (
                        <EmptyNotification 
                            linkTo={'/clubs'}
                            linkMessage={'Find a club'}
                            preMessage={'You don\'t belong to any clubs.'} />
                    )}
                
                <Buffer thickness={13} />
                <h3>Your Books</h3>
                <MyBookShelf />
            </MainContent>
        </motion.div>
        
    )
}


Dashboard_proto.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,

    getBooks: PropTypes.func.isRequired,
    
    getMyClubs: PropTypes.func.isRequired,
    resetClubs: PropTypes.func.isRequired,
    myClubs: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired,
    ]),
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    myClubs: state.clubs.myClubs,
})

const Dashboard = connect(mapStateToProps, { getUserInfo, getBooks, getMyClubs, resetClubs, })(Dashboard_proto)
export { Dashboard }
