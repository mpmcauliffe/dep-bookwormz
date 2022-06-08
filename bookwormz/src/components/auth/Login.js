import { Buffer, FormContainer, } from '../../components'
import { FaUser, FaAt, FaLockOpen, FaLock, } from 'react-icons/fa'


export const Login = () => {
    return (
        <FormContainer toggleInputs={true}>
            <div className='update-info'>
                <div>
                    <input 
                        required
                        type='email'
                        name='email'
                        // value={email}
                        placeholder='Please enter your email' />
                    <FaAt size={25} style={{  }} />
                </div>

                <div>
                    <input 
                        required
                        type='password'
                        name='password'
                        // value={password}
                        placeholder='Please enter a password' />
                    <FaLock size={25} style={{  }} />
                </div>
            </div>
            
            
        </FormContainer>
    )
}
