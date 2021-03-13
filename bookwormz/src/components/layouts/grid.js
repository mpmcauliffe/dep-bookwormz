import styled from 'styled-components'


export const BookGrid = styled.section`
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

export const ClubHeaderGrid = styled.section`
    

`
