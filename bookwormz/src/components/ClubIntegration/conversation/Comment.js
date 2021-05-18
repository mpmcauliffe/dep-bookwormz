import React from 'react'
import { Link as ScrollLink, 
    animateScroll as scroll } from 'react-scroll'
import { CommentBlock, } from './Comments.comp'


//const dummyDate = () => Date().now

export const Comment = ({ comment }) => {
    const { _id, commenterName, commenterProfile, subject, content, 
        created, replyTo, replyToOrigin, color, border, } = comment


    return (
        <CommentBlock 
            color={color}
            border={border}>
            <section 
                id={`${_id}`}
                className='top-bar'>
                <img  
                    alt='PROFILE_IMG'
                    className='image'
                    src={require(`../../../assets/mock/${commenterProfile}.png`).default} />

                <div className='identity'>
                    <div style={{ textAlign: 'right' }}>
                        <ScrollLink 
                            spy={true}
                            smooth={true}
                            containerId='commentContainer'
                            to={replyToOrigin ? replyToOrigin : ''}>
                            {replyToOrigin 
                                && <p className='origin'>{replyToOrigin}</p>}
                        </ScrollLink>
                        <ScrollLink
                            spy={true}
                            smooth={true} 
                            to={replyTo ? replyTo : ''}
                            containerId='commentContainer'>
                            {replyTo 
                                && <p className='reply'>{replyTo}</p>}
                        </ScrollLink>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>{commenterName}</p>
                        <p className='content'>{created}</p>
                    </div>
                </div>
            </section>

            <section className='bottom-bar'>
                {subject ? <p className='content'>Subject:&nbsp;&nbsp;{subject}</p> : <p className='content'><em>No subject</em></p>}
                <p className='content'>{content}</p>
            </section>

            <section className='reply-bar'>
                <p className='reply reply-button'>Reply</p>
            </section>

        </CommentBlock>
    )
}