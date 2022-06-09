import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LandingContainer, } from './Landing.comp'
import { Buffer, Login, Register, } from '../../../components'
import M from 'materialize-css/dist/js/materialize.min.js'


const Landing_proto = ({ isAuthenticated, error, history }) => {
    const [useLogin, setUseLogin]               = useState(false) 
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
                    ? (
                        <>
                            <h4 style={{ color: '#982233' }}>Login</h4>
                            <p 
                                onClick={handleToggleClick}
                                style={{ color: '#982233', 
                                        cursor: 'pointer',
                                        // marginTop: '6rem',
                                        textDecoration: 'underline', }}>
                                Don't have an account? Sign up!
                            </p>
                            <Login />
                        </>
                    ) : <> 
                            
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
                        </>}
            </section>
            
            
            {/** <section className='container__links'> 
                <a  // href='http://localhost:5000/auth/google' 
                    href='https://bookwormz-api.herokuapp.com/auth/google' 
                    className='link__btn link__btn-google'>
                    <i className='fab fa-google left fa-1x'>
                        </i>&nbsp;&nbsp;&nbsp; Log in with Google
                </a>
               

                <a  // href='http://localhost:5000/auth/facebook' 
                    href='https://bookwormz-api.herokuapp.com/auth/facebook' 
                    className='link__btn link__btn-facebook'>
                    <i className='fab fa-facebook left fa-1x'>
                        </i>&nbsp;&nbsp;&nbsp; Log in with Facebook
                </a>

                <a  href='http://localhost:5000/auth/google' 
                    // href='https://bookwormz-api.herokuapp.com/auth/google' 
                    className='link__btn link__btn-twitter'>
                    <i className='fab fa-twitter left fa-1x'>
                        </i>&nbsp;&nbsp;&nbsp; Log in with Twitter
                </a>

                <a  href='http://localhost:5000/auth/google' 
                    // href='https://bookwormz-api.herokuapp.com/auth/google' 
                    className='link__btn link__btn-github'>
                    <i className='fab fa-github left fa-1x'>
                        </i>&nbsp;&nbsp;&nbsp; Log in with Github
                </a>
            </section>*/}
            
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
