import { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory, } from 'react-router-dom'
import { AuthButton, Buffer, FormContainer, } from '../../components'
import { registerUser, } from '../../redux/actions/authActions'
import { FaUser, FaAt, FaLock, } from 'react-icons/fa'
import M from 'materialize-css/dist/js/materialize.min.js' 


const Register_proto = ({ registerUser, }) => {
    const [formInfo, setFormInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        password2: '',
    })
    // const [isFormComplete, setIsFormComplete] = useState(false)
    const { displayName, email, password, password2, } = formInfo

    const history = useHistory()

    const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        
    const onSubmit = e => {
        e.preventDefault()

        // checks
        const warningClasses = 'red accent-4 rounded'
        
        // eslint-disable-next-line
        const reg = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/ 
        if (!reg.test(email)) {
            M.toast({ html: 'Please enter a valid email.', classes: warningClasses, })
            return
        }
        if (password.length < 6) {
            M.toast({ html: 'Password must be a minimum of 6 characters.', classes: warningClasses, })
            return
        }
        if (password !== password2) {
            M.toast({ html: 'Passwords do not match!', classes: warningClasses, })
            return
        }

        registerUser(history, formInfo)
    }

    return (
        <FormContainer
            onSubmit={onSubmit}
            toggleInputs={true}>
            <Buffer thickness={3} />

            <div className='update-info'>
                <div>
                    <input 
                        required
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={onChange}
                        placeholder='Please enter a screen name' />
                        
                    <FaUser size={25} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        placeholder='Please enter your email' />
                    <FaAt size={25} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        placeholder='Please enter a password' />
                    <FaLock size={25} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                        placeholder='Please confirm your password' />
                    <FaLock size={25} style={{  }} />
                </div>
            </div>
            <Buffer thickness={6} />
            
            <AuthButton 
                toggle={true}
                onClick={onSubmit}>
                Submit
            </AuthButton>
        </FormContainer>
    )
}


Register_proto.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ })

const Register = connect(mapStateToProps, { registerUser, })(Register_proto)
export { Register }
