import styled from 'styled-components'


export const CommentBlock = styled.div`
    padding: 1rem;
    background: ${p => p.color};
    border: .2rem dashed #f7f7f7;
    border-radius: .5rem;
    
    .top-bar {
        height: 9rem;
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
    .identity {
        display: grid;
        grid-template-rows: 2fr;
    }
    .bottom-bar {
        display: grid;
        grid-template-rows: fit-content(4rem) fit-content(10rem);
    }
    .reply-bar {
        display: grid;
        height: ${p => p.isReplyOpen ? '20rem' : '5rem'};
        transition: height 750ms;
    }
    .image { height: 8rem; width: 8rem; border-radius: 50%; }
    .name { font-size: 1.4rem; font-weight: 600; }
    .reply { font-size: 1.2rem; margin-top: -.2rem; }
    .origin { font-size: 1rem; margin-top: .2rem; }
    .content { font-size: 1.4rem; }
    .reply-button { 
        text-align: right;
        color: ${p => p.theme.ruby};
        cursor: pointer; 
    }
    .input-area {
        height: 10rem;
        width: 100%;

        padding: 1.5rem;
        font-size: 1.6rem;
        background: #fafafa;
    }
`

export const InputBlock = styled.div`
    background: #f7f7f7;
`
