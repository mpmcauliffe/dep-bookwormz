import styled, { keyframes, css } from 'styled-components'


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

const expandColumnsLarge = keyframes`
    from { grid-template-columns: 12rem 2fr; }
    to { grid-template-columns: 1fr 1fr; }
`
const expandPaddingLarge = keyframes`
    0% { padding-left: 0; }
    50% { padding-left: 20%; }
    100%: { padding-left: 0; }
`

export const BookCover = styled.div`
    /* SIZE & POSITION; */
    height: ${p => p.isBookOpen ? '103rem' : '16rem'};
    padding: .5rem;
    overflow-y: hidden; /* to prevent 2nd scroll bar from appearing upon book opening */

    /* INTERNAL DYNAMICS */
    display: grid;
    /* grid-template-columns: ${p => p.isBookOpen ? '1fr 2fr' : '12rem 2fr'}; */
    grid-template-rows: ${p => p.isBookOpen ? '1fr 5fr' : '1fr'};
    grid-template-columns: 12rem 2fr;
    grid-gap: .3rem;

    /* COLORS */
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 77%);
    border-top: .1rem solid #fcfcfc;
    border-bottom: .1rem solid ${p => p.theme.silver};

    /* ANIMATION & EFFECTS */
    cursor: pointer;
    transition: height 500ms;
    transition-timing-function: cubic-bezier(1,0,.01,1);

    /* CLASSES */
    .right-cell { display: grid; grid-template-rows: 5rem 4rem 5rem; }
    .cover { height: 14.6rem; width: 10rem; }
    .title { font-size: 1.6rem; margin: 0; }
    .subtitle { font-size: 1.4rem margin: .5rem 0; }
    .author { font-size: 1.4rem; margin: .5rem 0; }
    .body { 
        padding: .5rem 2rem;
        grid-column: 1 / 4; 
        pointer-events: ${p => p.isBookOpen ? 'all' : 'none'};
        opacity: ${p => p.isBookOpen ? 1 : 0};
        transition: opacity 600ms;
        transition-timing-function: cubic-bezier(1,0,.01,1);

        .info { font-size: 1.4rem; }
    }

    /* MEDIA QUERIES */
    @media(min-width: 601px) {
        height: ${p => p.isBookOpen ? '81rem' : '16rem'};
        .title { font-size: 2.2rem; }
        .subtitle { font-size: 1.9rem; }
        .author { font-size: 1.7rem }
    }

    @media(min-width: 1140px) { 
        height: ${p => p.isBookOpen ? '81rem' : '21rem'}; 
        grid-template-columns: 15rem 4fr;
        .right-cell { grid-template-rows: 7rem 8rem 6rem; }
        .cover { height: 18.6rem; width: 13rem; }    
        .title { font-size: 2.6rem; }
        .subtitle { font-size: 2.3rem; }
        .author { font-size: 1.9rem }
    }
`



// export const ModalShade = styled.div`
//     position: ${p => p.showModalShade ? 'fixed' : 'absolute'};
//     top: -10rem;
//     left: -1rem;
//     height: 200rem;
//     /* height: ${p => p.shadeHeight}; */
//     width: 105vw;
//     z-index: 20;
    
//     background: #000;  
//     pointer-events: ${p => p.showModalShade ? 'all' : 'none'};
//     opacity: ${p => p.showModalShade ? .95 : 0}; 
//     transition: opacity 500ms;
//     transition-timing-function: cubic-bezier(1,0,.01,1);
// `
/*export const BookModal = styled.div`
    position: ${p => p.showModal ? 'sticky' : 'absolute'};
    top: 0;
    right: ${p => p.showModal ? '5vw' : '-200vw'};
    z-index: 30;
    height: 100vh;
    width: 90vw;

    padding: 1rem 3rem 1rem 1rem;

    background: ${p => p.theme.silver};
    transition: right 1s;
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
`*/
