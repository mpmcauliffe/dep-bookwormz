import { useState, } from 'react'
import PropTypes from 'prop-types'
import { ProfileImage } from '../../components'


export const Members = ({ member }) => {
    // eslint-disable-next-line
    const [isPublicProfile, setIsPublicProfile] = useState(!isNaN(member.profile.substring(0,1)))
    
    // console.log(member.profile);

    return (
        <div
            className='grid-cell'>

            {isPublicProfile
                ? <ProfileImage
                        alt='CLUB_MEMBER'
                        src={`${process.env.PUBLIC_URL}/profile/${member.profile}`} />   
                : <ProfileImage 
                        src={// eslint-disable-next-line
                            member.profile.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
                            ? `${member.profile}` 
                            : require(`../../assets/mock/${member.profile}.png`).default}    
                            alt='CLUB_MEMBER'/>}
                {member.chiefAdmin 
                    ? <p><i 
                        className='fas fa-user-shield'
                        style={{ color: '#c7c5c7', }} 
                    />&nbsp;&nbsp;{member.name}</p>
                    : <p>{member.name}</p>
                }
        </div>
    )
}

Members.propTypes = {
    member: PropTypes.object.isRequired,
}
