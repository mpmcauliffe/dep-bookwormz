import styled from 'styled-components'


export const CommentBlock = styled.div`
    padding: 1rem;
    /* background: #fff7f7; */
    background: ${p => p.color};
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
        height: ${p => p.isReplyOpen ? '50rem' : '5rem'}
    }
    .image { height: 8rem; width: 8rem; border-radius: 50%; }
    .name { font-size: 1.4rem; font-weight: 600; }
    .reply { font-size: 1.2rem; margin-top: -.2rem; }
    .origin { font-size: 1rem; margin-top: .2rem; }
    .content { font-size: 1.4rem; }
    .reply-button { 
        text-align: right;
        cursor: pointer; 
    }
`

export const InputBlock = styled.div`
    background: #f7f7f7;
`
