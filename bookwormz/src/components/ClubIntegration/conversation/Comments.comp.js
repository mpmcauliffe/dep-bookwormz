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
    .input-bar {
        display: grid;
        height: ${p => p.isReplyOpen || p.showInputBlock ? '25rem' : '5rem'};
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
        height: ${p => p.isReplyOpen || p.showInputBlock ? '10rem' : 0};
        width: 100%;

        padding: .5rem;
        font-size: 1.6rem;
        background: #fafafa;
    }
    .input-text, .input-area, .input-submit {
        opacity: ${p => p.isReplyOpen || p.showInputBlock ? 1 : 0};
        transition: all 500ms ease-out;
    }
    .input-submit {
        height: 4.5rem;
        
        font-size: 1.6rem;
        background: ${p => p.isSubmitable ? '#578c5e' : 'transparent'};;
        color: ${p => p.isSubmitable ? p.color : '#646464'};
        border: .1rem solid ${p => p.isSubmitable ? '#578c5e' : '#646464'};
        border-radius: .3rem;

        cursor: ${p => p.isSubmitable ? 'pointer' : 'default'};
    }
`

export const InputBlock = styled(CommentBlock)`
    height: ${p => p.showInputBlock ? '60rem' : 0};

    background: #f7f7f7;
    padding: ${p => p.showInputBlock ? '1rem' : 0};
    border: ${p => p.showInputBlock ? '2rem dashed #f7f7f7' : 0};
    /* border: 0; */
    opacity: ${p => p.showInputBlock ? 1 : 0};
    transition: all 500ms ease-out;

    .subject-input { &:focus { border-bottom: .2rem solid #578c5e; !important } } }

    .new-comment-input {
        height: 15rem;
        outline: none;
        &:focus { border: .2rem solid #578c5e; !important }
    }

    .new-submit { background: #578c5e; color: #f7f7f7; cursor: pointer; }

    .dummy-image { height: 8rem; width: 8rem; border-radius: 50%; background: lightblue; }
`

export const UnboundForm = styled.div``
