import React from 'react'
import { AppButton } from '../../../components'


export const MemberButton = () => {
    const handleJoinGroup = () => {
        console.log('join group')
    }

    return (
        <AppButton
            onClick={handleJoinGroup} >Join Club</AppButton>
    )
}
