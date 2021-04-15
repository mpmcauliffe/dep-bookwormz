import styled from 'styled-components'


export const StandarGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    row-gap: 3rem;
    column-gap: 2rem;
    align-items: center;
    margin-top: 2rem;

    .grid-cell {
        display: grid;
        place-items: center;
    }
    .club-image {
        height: 27rem;
        width: 18rem;
        box-shadow: 9px 15px 10px -6px rgba(0,0,0,0.66);
        cursor: pointer;
        &:hover {
            transform: scale(1.04);
            transition: transform 300ms;
        }
    }
`
export const BiGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(41rem, 1fr))

    /* div {
        display: grid;
        grid-template-columns: 1fr;
    } */
`

export const ClubHeaderGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
    padding: .5rem;

    img { margin: 0 auto; }

    .info-cell {
        grid-template-rows: 3fr 1fr;
    }

    @media (min-width: 481px) {
        grid-template-columns: 1fr 3fr;
        img { margin: 0; }
    }
`
