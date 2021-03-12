import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderLink, HeaderSection, MainContent, Searchbar, } from '../components'


export const Clubs_proto = ({ clubSearchQuery, }) => {
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
            </MainContent>
            
        </motion.div>
    )
}


Clubs_proto.propTypes = {
    clubSearchQuery: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    clubSearchQuery: state.clubs.clubSearchQuery
})

const Clubs = connect(mapStateToProps, {  })(Clubs_proto)
export { Clubs }
