import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, } from 'framer-motion'
import { FormContainer, HeaderSection, MainContent, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'


const CreateClubLink = styled(Link)`
    margin-top: .3rem; 
    color: ${p => p.theme.ruby};
    span { font-size: 2rem; }
`

export const CreateClub = () => {

    const onSubmit = () => console.log('create club form submit!')

    return (
        <motion.div 
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>

            <MainContent>
                <HeaderSection>
                    <h4>Create a Club</h4>
                    <CreateClubLink to='/clubs'>
                        <i className='fas fa-caret-left fa-2x' />
                        <span>&nbsp;&nbsp;&nbsp; Return to Clubs</span>
                    </CreateClubLink>
                </HeaderSection>
                <br/><br/><br/><br/>

                <FormContainer 
                    onSubmit={onSubmit}
                    toggleInputs={true}>
                    
                    <div className='update-info'>
                        <div>
                            <input 
                                type='text'
                                name='clubName'
                                placeholder='Name Your Club'
                                // value={userInfo.portrait}
                                // onChange={e => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
                            />
                            <i className='fas fa-users fa-3x' />
                        </div>
                    </div>
                    
                </FormContainer>
                
            </MainContent>
        </motion.div>
    )
}
