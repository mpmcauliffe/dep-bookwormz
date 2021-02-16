import styled from 'styled-components'


export const BookStack = styled.section`
    /* width: 100%; */
    margin-top: 7rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5rem;

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
    /* width: 100%; */
    height: 15rem;
    padding: .2rem;

    display: grid;
    grid-template-columns: 12rem 2fr;
    grid-gap: .3rem;

    /* background: ${p => p.theme.lightSilver}; */
    background: radial-gradient(circle, rgba(233,233,233,1) 0%, rgba(199,197,199,1) 77%);
    border-top: .1rem solid ${p => p.theme.lightSilver};
    border-bottom: .1rem solid ${p => p.theme.silver};

    cursor: pointer;

    .right-cell {
        display: grid;
        grid-template-rows: 3fr 1fr 1fr;
    }
    .cover { height: 14.6rem; width: 10rem; }
    .title { font-size: 3rem; margin: 0; }
    .subtitle { margin: .5rem 0; }
    .author { font-size: 1.5rem; margin: .5rem 0; }

    @media(min-width: 1140px) { 
        height: 19rem; 
        grid-template-columns: 15rem 2fr;
        .right-cell { grid-template-rows: 4fr 1fr 1fr; }
        .cover { height: 18.6rem; width: 13rem; }    
    }
`
