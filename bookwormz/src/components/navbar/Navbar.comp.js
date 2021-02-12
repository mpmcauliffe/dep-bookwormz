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

export const SideMenu = styled.div`
    position: ${p => p.showMenu ? 'fixed' : 'absolute'};
    left: ${p => p.showMenu ? 0 : '-60vw'};
    z-index: 10;
    height: 100vh;
    width: 50vw;

    padding: 1rem 3rem 1rem 1rem;

    background: ${p => p.theme.silver};
    transition: left 1s;
    transition-timing-function: cubic-bezier(1,0,.01,1);

    .nav-items {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .nav-item li a, .nav-item li i {
        font-size: 2.5rem;
        color: ${p => p.theme.primary};
    }

    @media (min-width: 601px) { width: 25vw; }
    @media (min-width: 1024px) { width: 15vw; }
`
export const ShadeScreen = styled.div`
    position: ${p => p.showScreen ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;

    overflow-y: hidden;
    
    background: #000;  
    pointer-events: ${p => p.showScreen ? 'all' : 'none'};
    opacity: ${p => p.showScreen ? .95 : 0}; 
    transition: opacity 500ms;
    transition-timing-function: cubic-bezier(1,0,.01,1);
`
