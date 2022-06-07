import { Buffer, FormContainer, } from '../../components'
import { FaUser, FaAt, FaLockOpen, FaLock, } from 'react-icons/fa'


export const Register = () => {
    return (
        <FormContainer toggleInputs={true}>
            <div className='update-info'>
                <div>
                    <input 
                        required
                        type='text'
                        name='displayName'
                        // value={displayName}
                        placeholder='Please enter a screen name' />
                    <FaUser size={30} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='email'
                        name='email'
                        // value={email}
                        placeholder='Please enter your email' />
                    <FaAt size={30} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password'
                        // value={password}
                        placeholder='Please enter a password' />
                    <FaLockOpen size={30} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password2'
                        // value={password2}
                        placeholder='Please confirm your password' />
                    <FaLock size={30} style={{  }} />
                </div>
            </div>
            
            
        </FormContainer>
    )
}
