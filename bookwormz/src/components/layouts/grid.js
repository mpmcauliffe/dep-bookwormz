import styled from 'styled-components'


export const BookGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;

    .grid-cell {
        display: grid;
        place-items: center;
    }
    .club-image {
        height: 27rem;
        width: 18rem;
    }
`
