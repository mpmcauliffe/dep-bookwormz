import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, Searchbar, } from '../components'


const CreateClubLink = styled(Link)`
    margin-top: .3rem; 
    color: ${p => p.theme.ruby};
    span { font-size: 2rem; }
`

export const Clubs = () => {
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
                    <CreateClubLink to='/createclub'>
                        <span>Create Club &nbsp;&nbsp;&nbsp;</span>
                        <i class='fas fa-caret-right fa-2x' />
                    </CreateClubLink>
                </HeaderSection>
                <br/><br/><br/><br/>
                
                    <Searchbar searchFor='clubs' />

                
                {/* <div style={{ height: '60rem', width: '100%', backgroundColor: '#453299' }} /> */}
                
            </MainContent>
            
        </motion.div>
    )
}
