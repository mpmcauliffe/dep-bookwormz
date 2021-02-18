import styled from 'styled-components'


export const BookStack = styled.section`
    /* width: 100%; */
    margin-top: 7rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .3rem;

    @media(min-width: 980px) { 
        /* grid-template-columns: 1fr 1fr; */
        grid-gap: .5rem; 
    }
    /* @media(min-width: 1140px) { 
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1.5rem; 
    } */
`
export const BookCover = styled.div`
    /* width: 100%; */
    height: 16rem;
    padding: .5rem;

    display: grid;
    grid-template-columns: 12rem 2fr;
    grid-gap: .3rem;

    /* background: ${p => p.theme.lightSilver}; */
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 77%);
    border-top: .1rem solid ${p => p.theme.lightSilver};
    border-bottom: .1rem solid ${p => p.theme.silver};

    cursor: pointer;

    .right-cell {
        display: grid;
        grid-template-rows: 5rem 7rem 4rem;
    }
    .cover { height: 14.6rem; width: 10rem; }
    .title { font-size: 1.6rem; margin: 0; }
    .subtitle { font-size: 1.4rem margin: .5rem 0; }
    .author { font-size: 1.2rem; margin: .5rem 0; }

    @media(min-width: 601px) {
        .title { font-size: 2.2rem; }
        .subtitle { font-size: 1.9rem; }
        .author { font-size: 1.7rem }
    }

    @media(min-width: 1140px) { 
        height: 21rem; 
        grid-template-columns: 15rem 2fr;
        .right-cell { grid-template-rows: 7rem 8rem 6rem; }
        .cover { height: 18.6rem; width: 13rem; }    
        .title { font-size: 2.6rem; }
        .subtitle { font-size: 2.3rem; }
        .author { font-size: 1.9rem }
    }
`
