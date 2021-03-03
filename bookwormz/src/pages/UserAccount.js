import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, AppButton, } from '../components'
import { getUserInfo, } from '../redux/actions/accountActions'


const UserInfoContainer = styled.section`
    /* height: 80vh; */
    margin-top: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* overflow-y: hidden; */

    div { 
        width: 100%;
        margin: 3rem 0 3rem 0; 
    }
    h3 { 
        margin-top: -1rem;
        text-align: center; 
    }
    p { 
        text-align: center;
        cursor: pointer; 
    }
`
const FormContainer = styled.form`
    /* height: ${p => p.toggleInputs ? '60.2rem' : '0'}; */
    opacity: ${p => p.toggleInputs ? 1 : 0};
    transition: opacity 5s;

    div hr {border-top: 1px dotted #aaa; }
        .update-info div { display: flex; }
        .update-info input {
            width: 90vw;
            margin: 2rem auto;
            font-size: 2rem;
            color: ${p => p.theme.primary} !important;

            padding: 0 0 1rem 5rem !important;
            border-bottom: .1rem solid ${p => p.theme.silver} !important;

            &:focus { 
                border-bottom: .3rem solid ${p => p.theme.ruby} !important; 
                box-shadow: none !important;
            }
            &::placeholder { color: ${p => p.theme.primary} }
    }
    .update-info i {
        position: absolute;
        margin: 2rem 2rem 0 0;
        color: ${p => p.theme.silver};
    }
    input:focus + i { color: ${p => p.theme.ruby}; }

    @media (min-width: 601px) { .update-info input { width: 78vw; } }
    @media (min-width: 981px) { .update-info input { width: 60vw; }  }
    @media (min-width: 1441px) { .update-info input { width: 40vw; } }
`
const ProfileImage = styled.img`
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
`

export const UserAccount_proto = ({ getUserInfo, displayName, image, }) => {
    const [toggleInputs, setToggleInputs] = useState(false)

    const toggleChangeInputs = () => setToggleInputs(!toggleInputs)

    const onSubmit = e => console.log('submit!')

    useEffect(() => { getUserInfo() })


    return (
        <motion.div
            exit={pageVariants.out} 
            animate={pageVariants.in} 
            initial={pageVariants.ini} 
            variants={pageVariants} 
            transition={pageTransition}>
            
            <MainContent>
                <HeaderSection>
                    <h4>Your Account</h4>
                </HeaderSection>

                <UserInfoContainer>
                    <ProfileImage 
                        src={`${image}`} 
                        alt='IMG_self'/>
                    
                    <div>
                        <p><em>display name</em></p>
                        <h3>{displayName}</h3>
                    </div>
                    <p 
                        onClick={toggleChangeInputs}
                        style={{ color: '#aa00aa' }}>
                    Edit</p>
                    <FormContainer 
                        onSubmit={onSubmit}
                        toggleInputs={toggleInputs}>
                        <div>
                            
                            <div 
                                className='update-info'>
                                <div>
                                    <input 
                                        type='text'
                                        placeholder='New portrait URL' />
                                    <i className='fas fa-portrait fa-3x' />
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        placeholder='New display name' />
                                    <i className='fas fa-signature fa-3x' />
                                </div>
                            </div>
                            <AppButton 
                                onClick={onSubmit}
                                style={{ margin: '7rem 0 0 0' }} >Submit</AppButton>
                            <hr/>
                        </div>
                    </FormContainer>
                </UserInfoContainer>
            </MainContent>
        </motion.div>
    )
}


UserAccount_proto.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    image: state.account.image,
})

const UserAccount = connect(mapStateToProps, { getUserInfo, })(UserAccount_proto)
export { UserAccount }

// <i className='fas fa-signature' />
// <i className='fas fa-portrait' />
