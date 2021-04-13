import styled from 'styled-components'


export const MainContent = styled.main`
    width: 100vw;
    padding: 1rem 0;
    margin: 1rem auto;

    h3 { 
        margin: 3rem 0 -4rem 0; 
        font-weight: 300;
    }

    .subName { 
        font-weight: 400;
        margin-bottom: 10rem;
    }

    @media (min-width: 601px) { 
        width: 80vw;
        margin: 2rem auto; 
    }
`

export const HeaderSection = styled.section`
    display: flex;
    flex-direction: column;
    /* padding: 0 1rem; */

    h4 {
        font-size: 2.2rem; 
        font-weight: 600;
        color: ${p => p.theme.primary}; 
    }
    
    @media (min-width: 601px) { 
        padding: 0;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        /* h4 { font-size: 2.2rem; }  */
    }
`

export const UserInfoContainer = styled.section`
    margin-top: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div { 
        width: 100%;
        margin: 3rem 0 3rem 0; 
    }
    h3 { 
        margin-top: -1rem;
        text-align: center; 
    }
    p { 
        font-size: 1.8rem;
        text-align: center;
    }
`
