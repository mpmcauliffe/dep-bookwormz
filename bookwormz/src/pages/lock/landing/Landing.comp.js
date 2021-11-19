import styled, { keyframes, } from 'styled-components'


const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const LandingContainer = styled.div`
    opacity: 1;
    animation: ${fadeIn} 2s;

    .container__header {
        height: 333px;
        display: flex;
        flex-direction: column;
        justify-content:  space-evenly;
        align-items: center;
        /* border: 1px solid red; */
    }
    .header {
        width: 371px;
    }
    .header__subtitle {
        font-size: 30px;
        font-weight: 300;
        letter-spacing: 2px;
    }

    .container__links {
        height: 260px;
        margin-top: 39px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* border: 1px solid blue; */
    }
    .link__btn {
        height: 60px;
        width: 333px;
        margin-bottom: 16px;
        padding: 16px 29px;
        border-radius: 4px;

        display: flex;
        display: grid;
        grid-template-columns: 1fr 6fr;
        justify-content: center;
        align-items: center;
        
        font-size: 22px;
        font-weight: 300;
        text-decoration: none;
        text-align: left;
        color: #fafafa;
    }

    .link__btn-google {
        background: radial-gradient(circle, rgba(233,84,72,1) 35%, rgba(219,68,55,1) 79%, rgba(185,57,46,1) 100%);
        border-top: .1rem solid #e95448;
        border-bottom: .1rem solid #b9392e;
    }
    .link__btn-facebook {
        background: radial-gradient(circle, rgba(97,137,219,1) 35%, rgba(66,103,178,1) 79%, rgba(51,80,140,1) 100%);}
    .link__btn-twitter {
        background: radial-gradient(circle, rgba(55,179,255,1) 35%, rgba(29,161,242,1) 79%, rgba(27,148,222,1) 100%);}
    .link__btn-github {
        background: radial-gradient(circle, rgba(93,91,91, 1) 35%, rgba(63,61,61, 1) 79%, rgba(33,31,31, 1) 100%);}
`
