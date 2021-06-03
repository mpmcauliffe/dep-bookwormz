import React, { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { Link as ScrollLink, 
//     animateScroll as scroll } from 'react-scroll'
import { CommentBlock, } from './Comments.comp'


//const dummyDate = () => Date().now
//<i class="fas fa-trash"></i>
export const Comment_proto = ({ comment, isCheifAdmin, }) => {
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div>
                            {replyToOrigin 
                                && <p className='origin'>{replyToOrigin}</p>}
                            <p className='origin'>Thread originator: some name</p>
                            {/*  */}
                            {replyTo 
                                && <p className='reply'>{replyTo}</p>}
                            <p className='origin'>Reply to: some name</p>
                            {/*  */}
                        </div>
                        {/*  */}
                        {isCheifAdmin
                            && <i 
                                className='fas fa-trash fa-2x'
                                style={{ opacity: .1, cursor: 'pointer', }} />
                        }
                        
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


Comment_proto.propTypes = {
    isCheifAdmin: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isCheifAdmin: state.clubs.isCheifAdmin,
})

const Comment = connect(mapStateToProps, {  })(Comment_proto)
export { Comment }
