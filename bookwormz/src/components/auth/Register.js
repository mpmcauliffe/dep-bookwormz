import { useState, } from 'react'
import { AuthButton, Buffer, FormContainer, } from '../../components'
import { FaUser, FaAt, FaLock, } from 'react-icons/fa'
import M from 'materialize-css/dist/js/materialize.min.js' 


export const Register = () => {
    const [formInfo, setFormInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        password2: '',
    })
    
    // const [isFormComplete, setIsFormComplete] = useState(false)

    const { displayName, email, password, password2, } = formInfo

    const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
        

    const onSubmit = e => {
        e.preventDefault()

        const reg = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/ 
        && reg.test(email)
        
        if (password !== password2) {
            M.toast({ html: 'Passwords do not match!' })
            return
        }
    }

    return (
        <FormContainer
            action='submit' 
            toggleInputs={true}>
            <Buffer thickness={12} />
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
                onSubmit={onSubmit}>
                Submit
            </AuthButton>
        </FormContainer>
    )
}
