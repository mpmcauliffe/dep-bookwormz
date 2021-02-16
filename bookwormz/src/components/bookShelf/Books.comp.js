import styled from 'styled-components'


export const BookStack = styled.section`
    width: 100%;
    margin-top: 7rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .1rem;

    @media(min-width: 980px) { 
        grid-template-columns: 1fr 1fr;
        grid-gap: .7rem; 
    }
    /* @media(min-width: 1140px) { 
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1.5rem; 
    } */
`
export const BookCover = styled.div`
    width: 100%;
    height: 15rem;
    padding: .5rem;

    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: .3rem;

    background: ${p => p.theme.lightSilver};

    .cover { width: 70%; }
    .title { font-size: 3rem; margin: 0; }
    .author { font-size: 1.5rem; margin: .5rem 0; }

    @media(min-width: 1140px) { 
        height: 27rem; 
        grid-template-columns: 1fr 2fr;
        .cover { width: 80%; }    
    }
`
