import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LandingContainer, } from './Landing.comp'
import { Login, Register, } from '../../../components'
import M from 'materialize-css/dist/js/materialize.min.js'


const Landing_proto = ({ isAuthenticated, error, history }) => {
    const [useLogin, setUseLogin]               = useState(true) 
    // const [formToggleText, setFormToggleText]   = useState('Already have and account? Login!')   

    if (isAuthenticated) {
        history.push('/dashboard')
    }

    if (error.length > 0) { 
        M.toast({ html: error, classes: 'red accent-4 rounded', displayLength: 9000 })
    }

    const handleToggleClick = () => setUseLogin(!useLogin)
    
    useEffect(() => { window.scroll(0, 0) }, [])

    return (
        <LandingContainer>
            <section className='container__header'>
                <img 
                    className='header'
                    alt='BookWormZ__img'
                    src={require(`./bkw-transparent.png`).default} />    
            </section>
            
            <section className='container__form'>
                {useLogin 
                    ? (<>
                            <h4 style={{ color: '#982233' }}>Login</h4>
                            <p 
                                onClick={handleToggleClick}
                                style={{ color: '#982233', 
                                        cursor: 'pointer',
                                        // marginTop: '6rem',
                                        textDecoration: 'underline', }}>
                                Use this dummy account or click here to create a new account.
                            </p>
                            <Login />
                        </>
                    ) : (<> 
                            <h4 style={{ color: '#982233', }}>Sign up</h4>
                            <p 
                                onClick={handleToggleClick}
                                style={{ color: '#982233', 
                                        cursor: 'pointer',
                                        // marginTop: '6rem',
                                        textDecoration: 'underline', }}>
                                Already have and account? Login!
                            </p>
                            <Register />
                        </>)}
            </section>
        </LandingContainer>
    )
}

Landing_proto.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
})

const Landing = connect(mapStateToProps, { })(Landing_proto)
export { Landing }
