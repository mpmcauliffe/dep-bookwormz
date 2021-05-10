import styled from 'styled-components'


export const BasicTrigger = styled.button`
    margin-top: .3rem; 

    padding: 0;

    color: ${p => p.theme.ruby};
    border: none;
    background: transparent;
    font-size: 2rem;

    cursor: pointer;

    &:focus { background: transparent; }
`