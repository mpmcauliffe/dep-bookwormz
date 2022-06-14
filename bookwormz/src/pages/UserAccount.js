import React, { useState, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion, } from 'framer-motion'
import { pageTransition, pageVariants, } from './zAnimation'
import { HeaderSection, MainContent, AppButton, FormContainer, ProfileImage,
    UserInfoContainer, } from '../components'
import { getUserInfo, updateUserInfo, revertUserInfo, 
    deleteUserAccount, } from '../redux/actions/accountActions'
import { logout } from '../redux/actions/authActions'


export const UserAccount_proto = ({ 
    getUserInfo, updateUserInfo, revertUserInfo, deleteUserAccount, logout,
    displayName, image, }) => {

    const history                               = useHistory()

    const [userInfo, setUserInfo]               = useState({
        portrait: '',
        newDisplayName: '',
    })
    const [toggleInputs, setToggleInputs]       = useState(false)

    const toggleChangeInputs = () => setToggleInputs(!toggleInputs)

    const onSubmit = e => {
        e.preventDefault()

        // eslint-disable-next-line
        const isURL = userInfo.portrait.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        if (!isURL && userInfo.portrait.length > 0) {
            console.log(`%cPORTRAIT VALUE %c${userInfo.portrait} %cNOT A URL`, 'font-weight: bold', 'color: red', 'font-weight: bold')
            return 
        }
        if (userInfo.portrait.length < 1 && userInfo.newDisplayName.length < 1) {
            return
        }
        updateUserInfo(userInfo)

        setUserInfo({ portrait: '', newDisplayName: '' })
    }

    const handleRevertClick = () => revertUserInfo()

    const handleAccountDelete = () => {
        deleteUserAccount()
        logout(history)
    }

    useEffect(() => {
        if (!image || !displayName) {
            getUserInfo() 
        }  
        getUserInfo()

        window.scroll(0, 0)
        console.log(image);
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
                        src={`profile/${image}`}
                        alt='IMG_self'
                        // src={isNaN(image.substring(0,1)) ? require(`${image}`).default : require(`../assets/profile/${image}.svg`).defualt} 
                        />
                    
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
    logout: PropTypes.func.isRequired,
    displayName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    displayName: state.account.displayName,
    image: state.account.image,
})

const UserAccount = connect(mapStateToProps, 
    { getUserInfo, updateUserInfo, revertUserInfo, deleteUserAccount, logout, })
    (UserAccount_proto)
export { UserAccount }
