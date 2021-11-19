import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LandingContainer, } from './Landing.comp'
import M from 'materialize-css/dist/js/materialize.min.js'


const Landing_proto = ({ isAuthenticated, error, history }) => {


    if (isAuthenticated) {
        history.push('/dashboard')
    }

    if (error.length > 0) { 
        M.toast({ html: error, classes: 'red accent-4 rounded', displayLength: 9000 })
    }
    
    useEffect(() => { window.scroll(0, 0) }, [])

    return (
        <LandingContainer>
            <section className='container__header'>
                <img 
                    className='header'
                    alt='BookWormZ__img'
                    src={require(`./bkw-transparent.png`).default} />
            </section>
            
            <section className='container__links'>
                <a  href='http://localhost:5000/auth/google' 
                    // href='https://bookwormz-api.herokuapp.com/auth/google' 
                    className='link__btn link__btn-google'>
                    <i className='fab fa-google left fa-1x'>
                        </i>&nbsp;&nbsp;&nbsp; Log in with Google
                </a>

                <a  href='http://localhost:5000/auth/google' 
                    // href='https://bookwormz-api.herokuapp.com/auth/google' 
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
