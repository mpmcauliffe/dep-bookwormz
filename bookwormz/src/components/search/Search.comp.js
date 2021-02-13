import styled from 'styled-components'


export const SearchContainer = styled.div`
    width: 100%;
    margin-top: 1rem;

    display: flex;
    color: ${p => p.theme.primary};

    i {
        position: absolute;
        margin-right: 2rem;
        color: ${p => p.theme.silver};
    }

    .input-bar {
        font-size: 3rem !important;
        /* padding-bottom: 1rem !important; */
        padding: 0 0 1rem 4rem !important;
        border-bottom: .1rem solid ${p => p.theme.silver} !important;

        &:focus { 
            border-bottom: .3rem solid ${p => p.theme.ruby} !important; 
            box-shadow: none !important;
        } 
    }
    input:focus + i { color: ${p => p.theme.ruby}; }

    /* @media (min-width: 601px) {
        width: 60%;
    } */
`

export const SearchForm = styled.form`
    width: 100%;
    
    @media (min-width: 601px) {
        width: 60%;
    }
`
