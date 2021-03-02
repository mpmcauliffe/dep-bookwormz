import React, { useEffect, } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, } from '../components'
import { getUserInfo, } from '../redux/actions/accountActions'


export const UserAccount_proto = ({ getUserInfo, displayName, secondDisplayName, image, secondaryImage, }) => {
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
                    <h1>Your Account</h1>
                </HeaderSection>
                <div style={{ height: '60rem', width: '100%', backgroundColor: '#22bb22' }} />
            </MainContent>
            
        </motion.div>
    )
}


UserAccount_proto.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    secondDisplayName: PropTypes.string.isRequired,
    secondaryImage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    // logout: PropTypes.func.isRequired,
    // isAuthenticated: state.auth.isAuthenticated,

})

const UserAccount = connect(mapStateToProps, { getUserInfo, })(UserAccount_proto)
export { UserAccount }
