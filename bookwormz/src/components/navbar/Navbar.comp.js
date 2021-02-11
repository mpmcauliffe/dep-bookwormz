import styled from 'styled-components'


export const NavMenuLeft = styled.ul`
    li a {
        color: #e0e0e0; // #6b1f39;
        font-weight: 300;
        &:hover { background: transparent; }
    }

    li:first-of-type { margin: 0 0 1rem -2rem; }
    li:nth-child(2), li:nth-child(3) { margin-top: .6rem; } 
    span { visibility: hidden; }
    li:nth-child(4) { visibility: hidden; }

    @media (min-width: 601px) { 
        li:nth-child(2), li:nth-child(3) { margin-top: 0; }
        span { font-size: 1.9rem; visibility: visible; } 
        li:nth-child(2), li:nth-child(3), li:nth-child(4) { visibility: hidden; }
        li:first-of-type { margin: 0 -3.3rem 0 .3rem; }
    }

    @media (min-width: 769px) {
        li:first-of-type { margin: 0 -1rem 0 .3rem; }
    }
`
export const NavLogo = styled.img`
    height: 4.5rem;
    margin: .5rem 1rem 0 ;

    @media (min-width: 601px) { height: 6rem; margin-right: 3rem; }
`
