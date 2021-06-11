import React, { useState, } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams, } from 'react-router-dom'
import moment from 'moment'
import { CommentBlock, } from './Comments.comp'
import { postReply, deleteComment, } from '../../../redux/actions/commentActions'


export const Comment_proto = ({ postReply, deleteComment, 
    comment, isCheifAdmin, userId, locator, }) => {
    
    const [makeReply, setMakeReply] = useState(false)
    const [replyContent, setReplyContent] = useState('')

    const handleReplyClick = () => setMakeReply(!makeReply)

    const { clubId }                     = useParams()

    const { _id, memberId, name, profile, subject, content, 
        createdOn, replyTo, replyToOrigin, color, border, } = comment
    
    const handleReplySubmit = () => {
        const anchor = {
            anchorId: _id,
            anchorMemberId: memberId,
            anchorName: name,
            anchorProfile: profile,
            color,
            border,
        }
        const origin = {
            originMemberId: replyToOrigin[0],
            originName: replyToOrigin[1],
            originProfile: replyToOrigin[2],
            originAnchorId: replyToOrigin[3],
        }
        // console.log(origin)
        postReply(anchor, origin, replyContent, subject, clubId, locator)
        setReplyContent('')
        setMakeReply(false)
    }
    const handleDeleteClick = () => deleteComment(_id, replyToOrigin[3], clubId, locator)
    // console.log()


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
                    src={
                        profile.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
                        ? `${profile}`
                        : require(`../../../assets/mock/${profile}.png`).default} />

                <div className='identity'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div>
                            {replyToOrigin.length !== 0 
                                && <p className='origin'>Thread originator:&nbsp; {replyToOrigin[1]}</p>}
                            
                            {/* */}
                            {replyTo.length !== 0 
                                && <div className='reply-container'>
                                    <p className='reply'>Replying to&nbsp;{replyTo[1]}</p>
                                    <img
                                        alt='reply_to'
                                        className='reply-image'
                                        src={
                                            replyTo[2].match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
                                            ? `${replyTo[2]}`
                                            : require(`../../../assets/mock/${replyTo[2]}.png`).default} />
                                </div>}
                            
                            {/* */}
                        </div>
                        {/*  */}
                        {isCheifAdmin || userId === memberId
                            ? <i 
                                onClick={handleDeleteClick}
                                className='fas fa-trash fa-2x'
                                style={{ opacity: .2, cursor: 'pointer', }} />
                            : null }
                        
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='name'>{name}</p>
                        <p className='content'>{moment(createdOn).format('MMMM Do YYYY')}</p>
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
                    value={replyContent}
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
    postReply: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    isCheifAdmin: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    locator: PropTypes.number.isRequired,
    
}

const mapStateToProps = state => ({
    postReply: state.comments.postReply,
    deleteComment: state.comments.deleteComment,
    isCheifAdmin: state.clubs.isCheifAdmin,
    userId: state.account.userId,
})

const Comment = connect(mapStateToProps, { postReply, deleteComment, })(Comment_proto)
export { Comment }
