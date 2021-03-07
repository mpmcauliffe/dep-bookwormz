import styled from 'styled-components'


export const FormContainer = styled.form`
    max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
    opacity: ${p => p.toggleInputs ? 1 : 0};
    transition: max-height 500ms;
    transition: opacity 500ms;
    transition-timing-function: cubic-bezier(1,0,.01,1);

    overflow-y: ${p => p.createClub ? 'hidden' : 'auto'};

    div {
        max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
        transition: max-height 500ms;
    }

    div hr {border-top: 1px dotted #aaa; }
    .update-info div { display: flex; }
    .update-info input {
        width: 80vw;
        margin: 2rem auto;
        font-size: 2rem;
        color: ${p => p.theme.primary} !important;

        padding: 0 0 1rem 5rem !important;
        border-bottom: .1rem solid ${p => p.theme.silver} !important;

        &:focus { 
            border-bottom: .3rem solid ${p => p.theme.ruby} !important; 
            box-shadow: none !important;
        }
        &::placeholder { color: ${p => p.theme.primary} }
    }
    .update-info i {
        position: absolute;
        margin: 2rem 2rem 0 0;
        color: ${p => p.theme.silver};
    }
    input:focus + i { color: ${p => p.theme.ruby}; }

    @media (min-width: 601px) { .update-info input { width: 70vw; } }
    @media (min-width: 981px) { .update-info input { width: 60vw; }  }
    @media (min-width: 1441px) { .update-info input { width: 40vw; } }
`
