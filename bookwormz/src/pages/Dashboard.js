import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { getUserInfo } from '../redux/actions/accountActions'
import { getBooks, } from '../redux/actions/bookActions'
import { getMyClubs, resetClubs, } from '../redux/actions/clubActions'
import { pageTransition, pageVariants, } from './zAnimation'
import { Buffer, ClubDock, EmptyNotification, MyBookShelf, HeaderSection, MainContent, StandarGrid } from '../components'


export const Dashboard_proto = ({ 
    getUserInfo, displayName, 
    getBooks, 
    getMyClubs, resetClubs, availableClubs,  }) => {

    useEffect(() => { 
        getUserInfo()
        getBooks()
        getMyClubs() 
        resetClubs()

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
                {availableClubs.length < 1
                    ? (
                        <EmptyNotification 
                            linkTo={'/clubs'}
                            linkMessage={'Find a club'}
                            preMessage={'You don\'t belong to any clubs.'} />
                    ) : (
                        <StandarGrid id='book-cover-select'>
                            {availableClubs.map((club, i) => (
                                <ClubDock
                                    index={i}
                                    club={club}
                                    key={club._id} />
                            ))}
                        </StandarGrid>
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
    availableClubs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    availableClubs: state.clubs.availableClubs,
})

const Dashboard = connect(mapStateToProps, { getUserInfo, getBooks, getMyClubs, resetClubs, })(Dashboard_proto)
export { Dashboard }
