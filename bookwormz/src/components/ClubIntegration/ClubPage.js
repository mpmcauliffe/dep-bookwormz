import React, { useEffect, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, useHistory, useParams, } from 'react-router-dom'
import { Spinner, } from '../../components'
import { getClub, } from '../../redux/actions/clubActions'


export const Club_proto = ({ getClub, currentClub, }) => {
    const history                       = useHistory()
    let { clubId }                      = useParams()
    
    console.log(currentClub)
    useEffect(() => {
        if (!currentClub) { getClub(clubId, history) }
    
    // eslint-disable-next-line
    }, [getClub, currentClub, clubId])


    if (!currentClub) { return <Spinner /> }
    
    return (
        <div>
            <h4>Club</h4>
        </div>
    )
}


Club_proto.propTypes = {
    getClub: PropTypes.func.isRequired,
    currentClub: PropTypes.object,
}

const mapStateToProps = state => ({
    currentClub: state.clubs.currentClub
})

const Club = connect(mapStateToProps, { getClub, })(Club_proto)
export { Club }
