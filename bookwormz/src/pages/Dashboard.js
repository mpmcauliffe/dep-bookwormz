import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { getUserInfo } from '../redux/actions/accountActions'
import { pageTransition, pageVariants, } from './zAnimation'
import { MyBookShelf, HeaderSection, MainContent, } from '../components'


export const Dashboard_proto = ({ getUserInfo, displayName, }) => {

    useEffect(() => { getUserInfo() }, [])

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
                <h3>My Books</h3>
                <MyBookShelf />
            </MainContent>
            
        </motion.div>
        
    )
}


Dashboard_proto.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
})

const Dashboard = connect(mapStateToProps, { getUserInfo, })(Dashboard_proto)
export { Dashboard }
