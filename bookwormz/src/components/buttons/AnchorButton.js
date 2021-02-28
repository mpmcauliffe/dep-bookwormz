import React from 'react'
import styled from 'styled-components'
import { Link as AnchorScroll } from 'react-scroll'


const AnchorButtonIcon = styled(AnchorScroll)`
    position: fixed;
    right: 1rem;
    bottom: 1rem;

    color: ${p => p.theme.primary};
    opacity: .3;
    cursor: pointer;
`

export const AnchorButton = () => {

    return (
        <AnchorButtonIcon
            to='top'
            smooth={true}
            duration= {500}>
        
            <i className='fas fa-arrow-circle-up fa-5x' />
        </AnchorButtonIcon>
    )
}
