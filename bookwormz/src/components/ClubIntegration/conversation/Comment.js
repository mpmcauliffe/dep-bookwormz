import React, { useState, } from 'react'
import { Link as ScrollLink, 
    animateScroll as scroll } from 'react-scroll'
import { CommentBlock, } from './Comments.comp'


//const dummyDate = () => Date().now

export const Comment = ({ comment }) => {
    const [makeReply, setMakeReply] = useState(false)
    const [replyContent, setReplyContent] = useState('')

    const handleReplyClick = () => setMakeReply(!makeReply)

    const handleReplySubmit = e => {

        console.log('submit')
    }

    const { _id, name, profile, subject, content, 
        created, replyTo, replyToOrigin, color, border, } = comment


    return (
        <CommentBlock 
            color={color}
            border={border}
            isReplyOpen={makeReply}
            isSubmitable={replyContent.length > 0 ? true : false}>
            <section 
                id={`${_id}`}
                className='top-bar'>
                <img  
                    alt='PROFILE_IMG'
                    className='image'
                    src={require(`../../../assets/mock/${profile}.png`).default} />

                <div className='identity'>
                    <div style={{ textAlign: 'right' }}>
                    
                            {replyToOrigin 
                                && <p className='origin'>{replyToOrigin}</p>}
                        
                        
                            {replyTo 
                                && <p className='reply'>{replyTo}</p>}
                        
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>{name}</p>
                        <p className='content'>{created}</p>
                    </div>
                </div>
            </section>

            <section className='bottom-bar'>
                {subject ? <p className='content'>Subject:&nbsp;&nbsp;{subject}</p> : <p className='content'><em>No subject</em></p>}
                <p className='content'>{content}</p>
            </section>

            <section className='input-bar'>
                <p  onClick={handleReplyClick}
                    className='content reply-button'>Reply</p>
                {/*  */}
                <span className='input-text content'>Replying to {name}</span>
                <textarea 
                    className='input-area'
                    onChange={e => setReplyContent(e.target.value)} />
                <button 
                    className='input-submit'
                    onClick={handleReplySubmit}>Submit</button>
            </section>

        </CommentBlock>
    )
}
