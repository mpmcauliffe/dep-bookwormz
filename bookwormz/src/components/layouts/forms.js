import styled, { css } from 'styled-components'


const CreateClub = ({ createClub }) => {
    if (createClub) {
        return css`
            width: 89%;
            margin: 0 auto;
            overflow-y: hidden;

            @media (min-width: 601px) {
                .update-info input { width: 100%; }
                margin: 2rem auto 5rem auto;
            }
        `
        
    }

    return css`
        max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
        opacity: ${p => p.toggleInputs ? 1 : 0};
        transition: max-height 500ms;
        transition: opacity 500ms;
        transition-timing-function: cubic-bezier(1,0,.01,1);
        div {
            max-height: ${p => p.toggleInputs ? '60.2rem' : '1rem'};
            transition: max-height 500ms;
        }
    `
}

export const FormContainer = styled.form`
   

    div hr { border-top: 1px dotted #aaa; }
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

    .description-block {
        font-size: 2rem;
        textarea { 
            height: 18rem; 
            margin: 2rem 0 5rem 0;
        }
        textarea:focus { outline: none !important; border: .2rem solid ${p => p.theme.ruby} !important; }
    }
    .form-icon { color: ${p => p.theme.silver}; }
    .grid-label { font-size: 2rem; }
    
    @media (min-width: 601px) { .update-info input { width: 70vw; } }
    @media (min-width: 981px) { .update-info input { width: 60vw; }  }
    @media (min-width: 1441px) { .update-info input { width: 40vw; } }
    
    ${CreateClub}
`
