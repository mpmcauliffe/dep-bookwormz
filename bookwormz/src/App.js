import React, { useEffect, } from 'react'
import { Route, Switch, 
    BrowserRouter as Router, } from 'react-router-dom'
import { AnimatePresence, } from 'framer-motion'

import { Provider } from 'react-redux'
import store from './redux/store/store'

import { Books, Dashboard, Clubs, Landing, 
    UserAuth, UserAccount, } from './pages'
import { AnchorButton, MessageBoard, Navbar, SecureRoute, } from './components'
import setAuthToken from './utils/setAuthToken'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


if (localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {
    useEffect(() => { M.AutoInit() }, [  ])
    

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <MessageBoard />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Landing} />

                        <Route
                            exact
                            path='/userauth'
                            component={UserAuth} />

                        <SecureRoute 
                            exact
                            path='/dashboard'
                            component={Dashboard} />

                        <SecureRoute
                            exact
                            path='/books'
                            component={Books} />

                        <SecureRoute
                            exact
                            path='/clubs'
                            component={Clubs} />

                        <SecureRoute
                            exact
                            path='/useraccount'
                            component={UserAccount} />
                    </Switch>
                </AnimatePresence>
                <AnchorButton />
            </Router>
        </Provider>
        
    )
}


export default App
