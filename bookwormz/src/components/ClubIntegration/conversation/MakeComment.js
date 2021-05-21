import React, { Fragment, useState, } from 'react'
import { Buffer, } from '../../../components'

export const MakeComment = () => {

    const [subject, setSubject] = useState('')
    const [newComment, setNewComment] = useState('')

    const handleNewCommentSubmit = () => {}

    return (
        <Fragment>
            <section className='top-bar'>
                <div className='dummy-image' />

                <div className='identity'>
                    <div />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>Your Name Here</p>
                        <p className='content'>Today's Date Here</p>
                    </div>
                </div>
            </section>

            <section className='input-bar'>
                <div>
                    {/** <i className='fas fa-pen-alt fa-2x' />*/}
                    <Buffer thickness={7} />
                    <input
                        placeholder='Subject' />
                    <Buffer thickness={5} />
                </div>
                <textarea className='input-area new-comment-input' />
                <Buffer thickness={9} />
                <button 
                    className='input-submit'
                    onClick={handleNewCommentSubmit}>Submit</button>
            </section>
        </Fragment>
    )
}
