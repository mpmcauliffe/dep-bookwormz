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

    .book-radio-selector {
        height: 3rem;
        width: 3rem;
        border: .3rem solid pink;
    }
    .book-radio-selector:checked + .club-image {
        border: 2rem solid red;
    }
    [type="radio"]:not(:checked), [type="radio"]:checked {
        position: static;
        opacity: 1;
        pointer-events: all;
        border-radius: 0;
    }
    /* input[type=radio] { -webkit-appearance: radio; } */
    /* input[type=radio]:checked + label {
        border: 2rem solid red;
    }  */
    /* .grid-cell:hover > .club-image {} */
`
