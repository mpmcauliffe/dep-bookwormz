import { createGlobalStyle, } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    body {
        font-family: "aileron",sans-serif;
        overflow-x: hidden;
        padding-bottom: 25rem;
    }
    h1 {
        font-size: 6rem;
        font-weight: 600;
    }
    p {
        font-size: 1.5rem;
    }
    .toast {
        font-size: 2rem !important;
        color: #fff;
    }
    #toast-container {
         top: 6rem !important;
         left: 5rem !important;
    }
`

// top: auto !important;
//         right: auto !important;
//         bottom: 10%;
//         left:7%; 
