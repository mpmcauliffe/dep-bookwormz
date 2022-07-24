import React, { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams, } from 'react-router-dom'
import { UnboundForm } from './Comments.comp'
import { Buffer, } from '../../../components'
import { createComment } from '../../../redux/actions/commentActions'

export const MakeComment_proto = ({ createComment, userProfile, displayName, }) => {

    const [subject, setSubject]         = useState('')
    const [newComment, setNewComment]   = useState('')

    const { clubId }                    = useParams()

    const handleNewCommentSubmit = () => createComment(displayName, userProfile, subject, newComment, clubId)
console.log(userProfile);
    return (
        <UnboundForm>
            <section className='top-bar'>
                {/* */}
                {!isNaN(userProfile.substring(0,1))
                    ? <img 
                        alt='IMG_self'
                        className='image'
                        src={`${process.env.PUBLIC_URL}/profile/${userProfile}`} />
                    : <img  
                        alt='IMG_self' 
                        className='image'
                        src={`${userProfile}`} />}
                

                <div className='identity'>
                    <div />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>{displayName}</p>
                        {/* <p className='content'>Today's Date Here</p> */}
                    </div>
                </div>
            </section>

            <section className='input-bar'>
                <div>
                    {/** <i className='fas fa-pen-alt fa-2x' />*/}
                    <Buffer thickness={7} />
                    <input
                        value={subject}
                        placeholder='Subject'
                        className='subject-input'
                        onChange={e => setSubject(e.target.value)} />
                    <Buffer thickness={5} />
                </div>
                
                <textarea
                    value={newComment} 
                    className='input-area new-comment-input'
                    onChange={e => setNewComment(e.target.value)} />
                <Buffer thickness={9} />

                <button 
                    className='input-submit new-submit'
                    onClick={handleNewCommentSubmit}>Submit</button>
            </section>
        </UnboundForm>
    )
}


MakeComment_proto.propTypes = {
    userProfile: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    createComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    createComment: state.comments.createComment,
})

const MakeComment = connect(mapStateToProps, { createComment, })(MakeComment_proto)
export { MakeComment }
