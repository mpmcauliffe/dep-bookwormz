import React from 'react'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, } from '../components'


export const Dashboard = () => {

    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <HeaderSection>
                    <h1>Dashboard</h1>
                </HeaderSection>
                <div style={{ height: '60rem', width: '100%', backgroundColor: '#dfdf22' }} />
            </MainContent>
            
        </motion.div>
        
    )
}
