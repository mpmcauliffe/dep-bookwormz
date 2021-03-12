import React, { useState, useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, useHistory, } from 'react-router-dom'
import styled from 'styled-components'
import { motion, } from 'framer-motion'
import { AppButton, FormContainer, BookGrid, HeaderLink, 
    HeaderSection, MainContent, } from '../../components'
import { pageTransition, pageVariants, } from '../../pages/zAnimation'
import { createClub, sendClubMessage, } from '../../redux/actions/clubActions'


const bookCovers = [ { name: 'Forest Moon', }, { name: 'Blue Rose', }, 
    { name: 'Artsy Fartsy', }, { name: 'Dark Horror', }, { name: 'Grimoire' }, 
    { name: 'War Journal', }, { name: 'Canvas', }, { name: 'Rose Canvas', }, 
    { name: 'Sea Canvas', }, { name: 'Tablet', }, { name: 'Rose Tablet', }, 
    { name: 'Sand Tablet', }, ]

export const CreateClub_proto = ({ createClub, sendClubMessage, }) => {
    const [clubName, setClubName]       = useState('')
    const [description, setDescription] = useState('')
    const [bookCover, setBookCover]     = useState('')
    const [bookNumber, setBookNumber]   = useState('')

    const history                       = useHistory()

    const onSubmit = e => {
        e.preventDefault()

        if (!clubName || !bookCover) {
            sendClubMessage({ message: `Please ensure you have a club name and you've
                selected a book cover.`, style: 'red accent-4 rounded', timeDisplay: 5000 })
            return
        }

        createClub({ clubName, description, bookNumber, }, history)
    }

    const handleBookCoverSelect = e => {
        setBookCover(e.target.name.split('—')[1]) 
        setBookNumber(e.target.name.split('—')[0])
    } 

    useEffect(() => {
        if (bookCover) {
            console.log(`%c${bookCover} %cselected`, 'color: orange', 'font-weight: bold')
            sendClubMessage({ message: `You've selected ${bookCover}`, 
                style: 'green darken-3 rounded', timeDisplay: 5000 })
        }
    }, [bookCover, sendClubMessage])


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
                    <HeaderLink to='/clubs'>
                        <i className='fas fa-caret-left fa-2x' />
                        <span>&nbsp;&nbsp;&nbsp; Return to Clubs</span>
                    </HeaderLink>
                </HeaderSection>
                <br/><br/><br/><br/>

                <FormContainer 
                    createClub
                    onSubmit={onSubmit}
                    toggleInputs={true}>

                    <div  className='update-info'>
                        <div>
                            <input 
                                required
                                type='text'
                                name='clubName'
                                placeholder='Name Your Club (required)'
                                value={clubName}
                                onChange={e => setClubName(e.target.value)} />
                            <i className='fas fa-users fa-3x' />
                        </div>
                    </div>
                    
                    <div className='input-field description-block'>
                        <i className='fas fa-scroll fa-1x form-icon' />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>Describe your book club (not required):</span>
                        <textarea 
                            id='body' 
                            name='body'
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                    </div>

                    <i className='fas fa-book fa-3x form-icon' />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='grid-label'>Choose a book cover to represent your group (required)</span>
                    <BookGrid id='book-cover-select'>
                        {bookCovers.map((cover, i) => (
                            <span 
                                key={cover.name}
                                className='grid-cell'>
                                
                               <label htmlFor={`${cover.name}`}>
                                    {/* <input 
                                        type='radio'
                                        id={`${cover.name}`}
                                        name='book-cover-select'
                                        className='book-radio-selector' />  */}
                                    
                                    <img 
                                        name={`${i}—${cover.name}`}
                                        alt='CLUB_BOOK-COVER'
                                        className='club-image'
                                        onClick={handleBookCoverSelect}
                                        src={require(`./img/${i}.png`).default} />
                                </label>
                                <p style={{ marginTop: '3rem', }}>{cover.name}</p>
                            </span>
                        ))}
                    </BookGrid>

                    <AppButton 
                        onClick={onSubmit}
                        style={{ width: '23rem', margin: '7rem auto 0 auto' }} >Create Club!</AppButton>
                </FormContainer>
                
            </MainContent>
        </motion.div>
    )
}


CreateClub_proto.propTypes = {
    createClub: PropTypes.func.isRequired,
    sendClubMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    createClub: state.clubs.createClub,
    sendClubMessage: state.clubs.sendClubMessage,
})

const CreateClub = connect(mapStateToProps, { sendClubMessage, createClub, })(CreateClub_proto)
export { CreateClub }
