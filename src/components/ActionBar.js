import React, { useState, useEffect } from 'react'
import CommentBox from './CommentBox'
import './ActionBar.css'
import {Link} from 'react-router-dom'
import {AiOutlineLike} from 'react-icons/ai'


function ActionBar(props) {
  const {comments, currentuser, postOwner, postId, likes, serverState, from} = props
  const [isLiked, setIsLiked] = useState(false)
  const [commentList, setCommentList] = useState(comments)

  const handleLiked = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className='actions-container'>
        <button className={`btn-like ${isLiked && 'liked'}`} onClick={ handleLiked }>
        <AiOutlineLike className={`outline-like-${isLiked ? 'liked':'icon '}`}/>
        </button>
         <CommentBox onSendComment={myComment=> 
         serverState ? setCommentList([...comments, myComment]) : setCommentList([...commentList, myComment])} 
         commentList={serverState?comments:commentList} username={currentuser} /* 'comments' when server is on, 'commentList' when off */
         date={new Date().toISOString().slice(0, 19).replace('T', ' ')}
         postKey={postId} postOwner={postOwner} from={props.from}
         />
        <button className='btn-milebook'>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k7zqsjrs1ks-21%3A25?alt=media&token=53a4b050-cfd5-4567-b0e2-7c60f0ae48ea"
          alt="Not Found"
          className="milestone-icon"
          />
        </button>
    </div>
  )
}

export default ActionBar