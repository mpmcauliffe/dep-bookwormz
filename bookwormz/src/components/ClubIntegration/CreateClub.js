import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, } from 'framer-motion'
import { FormContainer, BookGrid, HeaderSection, MainContent, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'


const bookCovers = [ { name: 'Forest Moon', }, { name: 'Blue Rose', }, 
    { name: 'Artsy Fartsy', },  { name: 'Dark Horror', }, { name: 'Grimoire' }, 
    { name: 'War Journal', }, { name: 'Canvas', }, { name: 'Rose Canvas', }, 
    { name: 'Sea Canvas', }, { name: 'Tablet', }, { name: 'Rose Tablet', }, 
    { name: 'Sand Tablet', }, ]

const CreateClubLink = styled(Link)`
    margin-top: .3rem; 
    color: ${p => p.theme.ruby};
    span { font-size: 2rem; }
`

export const CreateClub = () => {

    const onSubmit = () => console.log('create club form submit!')

    const handleBookCoverSelect = e => {
        e.preventDefault()
        console.log(e.target.name)
    }

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
                    createClub
                    onSubmit={onSubmit}
                    toggleInputs={true}>

                    <div  className='update-info'>
                        <div>
                            <input 
                                type='text'
                                name='clubName'
                                placeholder='Name Your Club'
                                // value={userInfo.portrait}
                                style={{ margin: '2rem 0 5rem 0' }}
                                // onChange={e => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })}
                            />
                            <i className='fas fa-users fa-3x' />
                        </div>
                    </div>
                    
                    <div className='input-field'>
                        <h4>Describe your book club:</h4>
                        <textarea id='body' name='body'></textarea>
                    </div>

                    <BookGrid>
                        {bookCovers.map((cover, i) => (
                            <span 
                                key={cover.name}
                                className='grid-cell'>
                                <img 
                                    name={`${i} — ${cover.name}`}
                                    alt='CLUB_BOOK-COVER'
                                    className='club-image'
                                    onClick={handleBookCoverSelect}
                                    src={require(`./img/${i}.png`).default} />
                                <p style={{ marginTop: '3rem', }}>{cover.name}</p>
                            </span>
                        ))}
                    </BookGrid>
                </FormContainer>
                
            </MainContent>
        </motion.div>
    )
}
