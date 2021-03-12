import styled from 'styled-components'
import { Link, } from 'react-router-dom'


export const HeaderLink = styled(Link)`
    margin-top: .3rem; 
    color: ${p => p.theme.ruby};
    span { font-size: 2rem; }
`
