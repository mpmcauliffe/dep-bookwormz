import styled from 'styled-components'


export const MainContent = styled.main`
    width: 99vw;
    padding: 1rem;
    margin: 1rem auto;

    @media (min-width: 601px) { 
        width: 80vw;
        margin: 2rem auto; 
    }
`

export const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3.7rem; 
        color: ${p => p.theme.primary}; 
    }
    
    @media (min-width: 601px) { 
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        h1 { font-size: 6rem; } 
    }
`
