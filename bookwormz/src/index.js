import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, } from 'styled-components'
import { GlobalStyle, } from './global/AppStyles.comp'
import { Theme, } from './global/themes/themeLight'
import 'normalize.css'
import './global/font.css'


ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
