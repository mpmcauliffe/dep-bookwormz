import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, useHistory, } from 'react-router-dom'
import { Spinner, } from '../../components'


export const Club_proto = ({ currentClub, }) => {
    const history                       = useHistory()

    useEffect(() => {
        // function and currentClub
    }, [])


    if (!currentClub) { return <Spinner /> }
    
    return (
        <div>
            <h4>Club</h4>
        </div>
    )
}


Club_proto.propTypes = {
    currentClub: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub
})

const Club = connect(mapStateToProps, {  })(Club_proto)
export { Club }
