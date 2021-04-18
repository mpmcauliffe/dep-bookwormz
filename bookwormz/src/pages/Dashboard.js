import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { getUserInfo } from '../redux/actions/accountActions'
import { getBooks, } from '../redux/actions/bookActions'
import { pageTransition, pageVariants, } from './zAnimation'
import { Buffer, ClubDock, MyBookShelf, HeaderSection, MainContent, StandarGrid } from '../components'


export const Dashboard_proto = ({ getUserInfo, getBooks, displayName, myClubs, }) => {

    useEffect(() => { 
        getUserInfo()
        getBooks() 
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
                {myClubs.length < 1
                    ?  <p>There aren't any book clubs at this time.</p>
                    : (
                        <StandarGrid id='book-cover-select'>
                            {myClubs.map((club, i) => (
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
    getBooks: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    myClubs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    myClubs: state.books.myClubs,
})

const Dashboard = connect(mapStateToProps, { getUserInfo, getBooks, })(Dashboard_proto)
export { Dashboard }
