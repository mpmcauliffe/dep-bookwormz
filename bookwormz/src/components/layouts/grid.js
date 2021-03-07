import styled from 'styled-components'


export const BookGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;
    overflow-y: hidden;
    .grid-cell {
        display: grid;
        place-items: center;
        overflow-y: hidden;
    }
    .club-image {
        height: 27rem;
        width: 18rem;
    }
`
