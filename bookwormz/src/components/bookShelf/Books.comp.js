import styled, { keyframes, } from 'styled-components'


const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const BookStack = styled.section`
    height: ${p => p.isBookShelfOpen ? `auto` : 0};
    min-height: ${p => p.isBookShelfOpen ? `${p.openHeight}rem` : 0}; 
    margin-top: 7rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .3rem;

    overflow-y: hidden; /* to prevent 2nd scroll bar from appearing upon book opening */

    /* transform-origin: top center;
    transform: ${p => p.isBookShelfOpen ? 'scaleY(1)' : 'scaleY(0)'};
    transition: transform 100ms; */

    transition: min-height 500ms;

    @media(min-width: 980px) { grid-gap: .5rem; }
`

export const BookCover = styled.div`
    /* SIZE & POSITION; */
    height: ${p => p.isBookOpen ? '103rem' : '16rem'};
    padding: .5rem;
    overflow-y: hidden; /* to prevent 2nd scroll bar from appearing upon book opening */

    /* INTERNAL DYNAMICS */
    display: grid;
    grid-template-rows: ${p => p.isBookOpen ? '1fr 5fr' : '1fr'};
    grid-template-columns: 12rem 2fr;
    grid-gap: .3rem;

    /* COLORS */
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 77%);
    border: .1rem solid #dedede;
    border-radius: 1rem;

    /* ANIMATION & EFFECTS */
    cursor: pointer;
    transition: height 500ms;
    transition-timing-function: cubic-bezier(1,0,.01,1);

    opacity: 1;
    animation: ${fadeIn} 500ms;

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
export const CascadeArrowContainer = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const CascadeArrow = styled.i`
    margin: 3rem 1rem 0 0;
    color: ${p => p.theme.primary};
    cursor: pointer;

    transform: ${p => p.isBookShelfOpen ? 'rotate(180deg)' : ''};
    transform-origin: bottom center;
    transition: transform 500ms linear;

    @media (min-width: 601px) { margin: 0 0 0 0; }
`
