import { useState, } from 'react'
import { AuthButton, Buffer, FormContainer, } from '../../components'
import { FaAt, FaLock, } from 'react-icons/fa'


export const Login = () => {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: '',
    })
    const { email, password, } = formInfo

    const onChange = e => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
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
