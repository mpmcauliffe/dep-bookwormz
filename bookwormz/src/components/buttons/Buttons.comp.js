import styled from 'styled-components'


export const GreenButton = styled.button`
    height: 1rem;
    width: 13rem;
    padding: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 300;
    text-decoration: none;
    text-align: left;
    color: #fafafa;

    border: none;
    cursor: pointer;
    /* background: radial-gradient(circle, rgba(74,208,64,1) 35%, rgba(64,176,55,1) 79%, rgba(55,148,47,1) 100%); */
    background: radial-gradient(circle, rgba(41,111,35,1) 35%, rgba(27,74,24,1) 79%, rgba(20,51,18,1) 100%);
    border-top: .1rem solid #4ad040;
    border-bottom: .1rem solid #10280f;

    @media (min-width: 601px) {
        height: 1.5rem;
        width: 15rem;
        padding: 2rem;
        font-size: 2.2rem;
    }
`
