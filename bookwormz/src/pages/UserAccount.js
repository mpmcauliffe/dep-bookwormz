import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, AppButton, } from '../components'
import { getUserInfo, updateUserInfo, revertUserInfo, 
    deleteUserAccount, } from '../redux/actions/accountActions'


const UserInfoContainer = styled.section`
    margin-top: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div { 
        width: 100%;
        margin: 3rem 0 3rem 0; 
    }
    h3 { 
        margin-top: -1rem;
        text-align: center; 
    }
    p { 
        font-size: 1.8rem;
        text-align: center;
    }
`
const FormContainer = styled.form`
    max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
    opacity: ${p => p.toggleInputs ? 1 : 0};
    transition: max-height 500ms;
    transition: opacity 500ms;
    transition-timing-function: cubic-bezier(1,0,.01,1);

    div {
        max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
        transition: max-height 500ms;
    }

    div hr {border-top: 1px dotted #aaa; }
    .update-info div { display: flex; }
    .update-info input {
        width: 80vw;
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

    @media (min-width: 601px) { .update-info input { width: 70vw; } }
    @media (min-width: 981px) { .update-info input { width: 60vw; }  }
    @media (min-width: 1441px) { .update-info input { width: 40vw; } }
`
const ProfileImage = styled.img`
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
`

export const UserAccount_proto = ({ 
    getUserInfo, updateUserInfo, revertUserInfo, deleteUserAccount,
    displayName, image, }) => {

    const [userInfo, setUserInfo]               = useState({
        portrait: '',
        newDisplayName: '',
    })
    const [toggleInputs, setToggleInputs]       = useState(false)

    const toggleChangeInputs = () => setToggleInputs(!toggleInputs)

    const onSubmit = e => {
        e.preventDefault()

        const isURL = userInfo.portrait.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        if (!isURL && userInfo.portrait.length > 0) {
            console.log(`%cPORTRAIT VALUE %c${userInfo.portrait} %cNOT A URL`, 'font-weight: bold', 'color: red', 'font-weight: bold')
            return 
        }
        if (userInfo.portrait.length < 1 && userInfo.newDisplayName.length < 1) {
            return
        }
        updateUserInfo(userInfo)
    }

    const handleRevertClick = () => revertUserInfo()

    const handleAccountDelete = () => deleteUserAccount()

    useEffect(() => {
        if (!image || !displayName) {
            getUserInfo() 
        }  
    }, [getUserInfo, image, displayName])


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
                        style={{ color: '#982233', 
                                cursor: 'pointer',
                                textDecoration: 'underline', }}>
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
                                        name='portrait'
                                        placeholder='New portrait URL'
                                        value={userInfo.portrait}
                                        onChange={e => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })} />
                                    <i className='fas fa-portrait fa-3x' />
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='newDisplayName'
                                        placeholder='New display name'
                                        value={userInfo.newDisplayName}
                                        onChange={e => setUserInfo({ ...userInfo, [e.target.name]: e.target.value })} />
                                    <i className='fas fa-signature fa-3x' />
                                </div>
                            </div>
                            <AppButton 
                                onClick={onSubmit}
                                style={{ margin: '7rem 0 0 0' }} >Submit</AppButton>
                            <p 
                                onClick={handleRevertClick}
                                style={{ color: '#982233', 
                                        cursor: 'pointer',
                                        marginTop: '15rem',
                                        textDecoration: 'underline', }}>
                                Revert to original portrait and display name</p>
                        </div>
                    </FormContainer>
                </UserInfoContainer>
                <hr style={{ marginTop: '22rem',
                                border: '.2rem dotted #D71B2D' }} />
                <AppButton
                    alertButton={true}
                    onClick={handleAccountDelete}
                    style={{ height: '5rem', 
                                width: '24rem',
                                margin: '10rem auto 0 auto',
                                borderRadius: '5rem', }}>
                    Delete Account</AppButton>
            </MainContent>
        </motion.div>
    )
}


UserAccount_proto.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    updateUserInfo: PropTypes.func.isRequired,
    revertUserInfo: PropTypes.func.isRequired,
    deleteUserAccount: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    image: state.account.image,
})

const UserAccount = connect(mapStateToProps, 
    { getUserInfo, updateUserInfo, revertUserInfo, deleteUserAccount, })
    (UserAccount_proto)
export { UserAccount }
