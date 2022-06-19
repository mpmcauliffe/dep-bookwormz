import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


const ButtonGradient = ({ alertButton }) => {
    if (alertButton) {
        return css`
            background: transparent;
            color: #ad1f1f;
            border-style: solid;
            border-width: .3rem;
            border-image: linear-gradient(180deg rgba(215,27,27,1),rgba(194,27,27,1),rgba(173,31,31,1)) 1;
            /* border: .1rem solid #ad1f1f;
            border-top: .1rem solid #f96161;
            border-bottom: .1rem solid #380c0c;
            background: radial-gradient(circle, 
                rgba(215,27,27,1) 35%, rgba(194,27,27,1) 79%, rgba(173,31,31,1) 100%); */
        `
    }
    return css`
        background: transparent;
        color: #1a4617;
        border-style: solid;
        border-width: .3rem;
        border-image: linear-gradient(180deg, rgba(41,111,35,1),rgba(41,111,35,1),rgba(26,70,23,1)) 1;
        /* border: .1rem solid #1a4617;
         border-top: .1rem solid #4ad040;
        border-bottom: .1rem solid #10280f;
        background: radial-gradient(circle, 
            rgba(41,111,35,1) 35%, rgba(34,93,29,1) 79%, rgba(26,70,23,1) 100%); */
    `
}

export const AppButton = styled.button`
    height: 1rem;
    width: 22rem;
    margin: 0 auto;
    padding: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 400;
    text-decoration: none;
    text-align: left;
    color: #fafafa;

    border: none;
    cursor: pointer;

    ${ButtonGradient}

    @media (min-width: 601px) {
        height: 1.5rem;
        /* width: 15rem; */
        padding: 2rem;
        font-size: 2.2rem;
    }
`


AppButton.propTypes = {
    alertButton: PropTypes.bool,
}
