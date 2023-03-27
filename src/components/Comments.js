import './Comments.css'
import React from 'react'

function Comments({submission, username}) {
  return (
    <li className='comment-item'>
      <div className='comment-wrapper'>
        <div className='comment-owner'>{username}:  </div>
        <div className='comment-content'>
          <p className='comment-context'>{submission.comment}</p>
        </div>
      </div>
    </li>
  )
}

export default Comments