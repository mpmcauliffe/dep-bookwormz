import styled from 'styled-components'


const Button = styled.button`
    height: 6rem;
    width: 100%;

    background: transparent;
    border: ${p => p.isActive ? '.2rem solid rgb(152,34,51)' : '.2rem solid rgb(170,170,170)'};
    color: ${p => p.isActive ? '#982233' : '#aaa'};
    font-size: 2rem;

    cursor: pointer;
`

export const AuthButton = ({ children, toggle }) => {
    return (
        <Button isActive={toggle}>
            {children}
        </Button>
    )
}
