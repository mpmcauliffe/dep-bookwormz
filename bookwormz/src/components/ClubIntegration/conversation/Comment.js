import React from 'react'
import { CommentBlock, } from './Comments.comp'


//const dummyDate = () => Date().now

export const Comment = ({ comment }) => {
    const { commenterName, commenterProfile, subject, content, created, replyTo, replyToOrigin, } = comment


    return (
        <CommentBlock>
            <section className='top-bar'>
                <img  
                    alt='PROFILE_IMG'
                    className='image'
                    src={require(`../../../assets/mock/${commenterProfile}.png`).default} />

                <div className='identity'>
                    <div style={{ textAlign: 'right' }}>
                        {replyToOrigin && <p className='origin'>{replyToOrigin}</p>}
                        {replyTo && <p className='reply'>{replyTo}</p>}
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
        </CommentBlock>
    )
}
