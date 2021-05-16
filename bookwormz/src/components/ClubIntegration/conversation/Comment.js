import React from 'react'
import { CommentBlock, } from './Comments.comp'


export const Comment = ({ comment }) => {
    const { commenterName, commenterProfile, subject, content, created, replyTo, replyToOrigin, } = comment

    console.log(comment.commenterProfile)

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
                    <div>
                        <p className='name'>{commenterName}</p>
                        <p className='content'>{created}</p>
                    </div>
                </div>
            </section>

            <section className='bottom-bar'>
                {subject ? <p className='content'>{subject}</p> : <p className='content'><em>No subject</em></p>}
                <p className='content'>{content}</p>
            </section>
        </CommentBlock>
    )
}
