import styled from 'styled-components'


export const CommentBlock = styled.div`
    padding: 1rem;
    background: ${p => p.theme.shell};
    border-radius: .5rem;
    
    .top-bar {
        height: 11rem;
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
    .identity {
        display: grid;
        grid-template-rows: 1fr 2fr;
    }
    .bottom-bar {
        display: grid;
        grid-template-rows: fit-content(4rem) fit-content(10rem);
    }
    .image { height: 8rem; width: 8rem; border-radius: 50%; }
    .name { font-size: 1.4rem; font-weight: 600; }
    .reply { font-size: 1.2rem; margin-top: -.2rem; }
    .origin { font-size: 1rem; margin-top: .2rem; }
    .content { font-size: 1.4rem; }
`
