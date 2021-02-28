import React, { Fragment, useState, useEffect, } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLogoLg, NavLogoSm, NavMenuLeft, 
    ShadeScreen, SideMenu, } from './Navbar.comp'
import M from 'materialize-css/dist/js/materialize.min.js'  
import './active.css'    


const Navbar_proto = ({ isAuthenticated, bookMessage, }) => {
    const location = useLocation()
    console.log(`%cPATH: %c${location.pathname}`, 'font-weight: bold', 'color: green')

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

    useEffect(() => {
        if(bookMessage.message.length > 1) {
            M.toast({ 
                html: `${bookMessage.message}`, 
                classes: `${bookMessage.style}`, 
                displayLength: bookMessage.timeDisplay 
            })
        }
    }, [bookMessage])



    if (!isAuthenticated) { return null }

    return (
        <Fragment>
            <ShadeScreen 
                onClick={toggleMenu}
                showScreen={isMenuVisible} />
            <SideMenu 
                onClick={toggleMenu}
                showMenu={isMenuVisible}>
                
                <ul className='nav-items nav-item'>
                    <li><Link to='/useraccount'>
                        Account&nbsp;&nbsp;<i className='far fa-user secondary-content' /></Link></li>

                    <li><Link to='/userauth'>
                        Logout&nbsp;&nbsp;<i className='fas fa-sign-out-alt secondary-content' /></Link></li>
                </ul>
            </SideMenu>

            <nav className='grey darken-3'  id='top'>
                <div className='nav-wrapper'>
                <Link 
                    to='/dashboard'>
                    <NavLogoLg 
                        alt='BKW_LOGO'
                        className='right brand-logo'
                        src={require(`./img/bkw-sm_light.png`).default} />    
                    <NavLogoSm 
                        alt='BKW_LOGO'
                        className='right brand-logo'
                        src={require(`./img/bkw-abbr_light.png`).default} />
                </Link>
                
                <NavMenuLeft className='left '>
                    <li><a
                        href='#!' //data-target='burger-menu'
                        onClick={toggleMenu}
                        className='sidenav-trigger show-on-large'>
                    <i className='fas fa-bars' /></a></li>
                
                    <li><Link 
                        to='/clubs'>
                            <i className='fas fa-users' />
                            <span>&nbsp;&nbsp;Clubs</span></Link>
                            <div /></li>
                    <li><Link 
                        to='/books'>
                            <i className='fas fa-book' />
                            <span>&nbsp;&nbsp;Books</span></Link></li>

                    <li><Link 
                        to='/dashboard'>
                            <i className='fas fa-tachometer-alt' />
                            <span>&nbsp;&nbsp;Dashboard</span></Link></li>
                </NavMenuLeft>
                </div>
            </nav>
        </Fragment>
    )
}


Navbar_proto.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    bookMessage: PropTypes.object,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    bookMessage: state.books.bookMessage,
})

const Navbar = connect(mapStateToProps, { })(Navbar_proto)
export { Navbar }
