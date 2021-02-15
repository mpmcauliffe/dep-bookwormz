import styled from 'styled-components'


export const BookStack = styled.section`
    width: 100%;
    margin-top: 7rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5rem;

    @media(min-width: 769px) { 
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem; 
    }
    @media(min-width: 1440px) { 
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1.5rem; 
    }
`
export const BookCover = styled.div`
    width: 100%;
    height: 27rem;
    padding: 0 1rem;

    background: ${p => p.theme.silver}
`
