import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AppButton } from '../../../components'
import { joinClub, } from '../../../redux/actions/clubActions'


const MemberButton_proto = ({ isUserAMember, }) => {
    const handleMemberButtonCLick = () => {
        console.log('join group')
    }

    return (
        <AppButton
            onClick={handleMemberButtonCLick} >Join Club</AppButton>
    )
}

MemberButton_proto.propTypes = {
    isUserAMember: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isUserAMember: state.clubs.isUserAMember,
})


const MemberButton = connect(mapStateToProps, {  })(MemberButton_proto)
export { MemberButton }
