import React, { Fragment, } from 'react'
import { Link, } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLogo, NavMenuLeft, } from './Navbar.comp'         


const Navbar_proto = ({ isAuthenticated, }) => {

    if (!isAuthenticated) { return null }

    return (
        <Fragment>
            <ul 
                id='burger-menu' 
                className='sidenav'
                style={{ width: '20rem', }} >
                <li><a href='#!'>
                    Account <i className='far fa-user secondary-content' /></a></li>
                <li><Link to='/userauth'>
                    Logout <i className='fas fa-sign-out-alt secondary-content' /></Link></li>
            </ul>

            <nav className='grey darken-3'>
                <div className='nav-wrapper'>
                <Link 
                    to='/dashboard'>
                    <NavLogo 
                        alt='BKW_LOGO'
                        className='right brand-logo'
                        src={window.innerWidth < 481 
                            ? require(`./img/bkw-abbr_light.png`).default
                            : require(`./img/bkw-sm_light.png`).default} />    
                </Link>
                
                <NavMenuLeft className='left '>
                    <li><a
                        className='sidenav-trigger show-on-large' 
                        href='#!' data-target='burger-menu'>
                    <i className='fas fa-bars' /></a></li>
                
                    <li><Link 
                        to='/Clubs'>
                            <i className='fas fa-users' />
                            <span>&nbsp;&nbsp;Clubs</span></Link></li>
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
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const Navbar = connect(mapStateToProps, { })(Navbar_proto)
export { Navbar }
