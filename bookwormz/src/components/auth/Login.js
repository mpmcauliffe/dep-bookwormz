import { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory, } from 'react-router-dom'
import { loginUser, } from '../../redux/actions/authActions'
import { AuthButton, Buffer, FormContainer, } from '../../components'
import { FaAt, FaLock, } from 'react-icons/fa'


export const Login_proto = ({ loginUser, }) => {
    const [formInfo, setFormInfo] = useState({
        email: 'ozzy@bear.com',
        password: '123456',
    })
    const { email, password, } = formInfo

    const history = useHistory()

    const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        loginUser(history, formInfo)
    }

    return (
        <FormContainer 
            onSubmit={onSubmit}
            toggleInputs={true}>
            <Buffer thickness={3} />
            {/*  */}
            

            <div className='update-info'>
                <div>
                    <input 
                        required
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        placeholder='Email' />
                    <FaAt size={25} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        placeholder='Password' />
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


Login_proto.propTypes = {
    loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ })

const Login = connect(mapStateToProps, { loginUser, })(Login_proto)
export { Login }
