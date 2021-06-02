import React, { useState, } from 'react'
import PropTypes from 'prop-types'
import { UnboundForm } from './Comments.comp'
import { Buffer, } from '../../../components'

export const MakeComment = ({ userProfile, displayName, }) => {

    const [subject, setSubject] = useState('')
    const [newComment, setNewComment] = useState('')

    const handleNewCommentSubmit = () => {}

    return (
        <UnboundForm>
            <section className='top-bar'>
                {/* <div className='dummy-image' /> */}
                
                <img  
                    alt='IMG_self' 
                    className='image'
                    src={`${userProfile}`} />

                <div className='identity'>
                    <div />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>{displayName}</p>
                        <p className='content'>Today's Date Here</p>
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


MakeComment.propTypes = {
    userProfile: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
}
