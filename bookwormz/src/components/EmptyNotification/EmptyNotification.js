import React from 'react'
import styled, {css} from 'styled-components'


const background = ({ library }) => {
    // if (library) { 
    //     return css` 
    //         background: radial-gradient(
    //             circle, rgba(98,39,160,1) 35%, rgba(83,35,134,1) 79%, rgba(69,31,108,1) 100%);
    //         .trigger { color: #ffb74d; } 
    //     ` 
    // }

    if (library) {
        return css`
            background: radial-gradient(circle, rgba(66,66,66,1) 62%, rgba(27,27,27,1) 100%);
            .trigger { color: #ffb74d; }     
        `
    }
    return css` 
        background: radial-gradient(circle, rgba(66,66,66,1) 62%, rgba(27,27,27,1) 100%);
        .trigger { color: #81d4fa }
    `
}

const MessageContainer = styled.div`
    height: 9rem;
    width: 100%;
    margin-top: 9rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    color: ${p => p.theme.shell};
    ${background}

    .trigger {
        cursor: pointer;
    }

    @media (min-width: 769px) {
        height: 5rem;
        flex-direction: row;
        font-size: 2.3rem;
    }

`

export const EmptyNotification = props => {
    return (
        <MessageContainer library={props.library}>
            {props.children}
        </MessageContainer>
    )
}

