import styled from 'styled-components'


export const CommentBlock = styled.div`
    .top-bar {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
    .identity {
        display: grid;
        grid-template-rows: 1fr 2fr;
    }
    .bottom-bar {
        display: grid;
        grid-template-rows: fit-content(4rem) fit-content(10rem);
    }
    .image { height: 7rem; width: 7rem; border-radius: 50%; }
    .name { font-size: 1.2rem; font-weight: 600; }
    .reply { font-size: 1rem; }
    .origin { font-size: .8rem; }
    .content { font-size: 1.1rem; }
`
