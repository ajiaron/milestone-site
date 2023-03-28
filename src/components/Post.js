import React, { useState,useEffect} from 'react'
import './Feed.css'
import './Post.css'
import {BiMessageSquareEdit} from 'react-icons/bi'
import ActionBar from './ActionBar'
import {Link} from 'react-router-dom'

export default function Post(props) {
  const [userComments, setUserComments] = useState([])
  const [serverState, setServerState] = useState(props.serverState)
    return (
        <>
        <li className={props.from.includes('/milestone')?'mile-post-item':
        (props.index === 5)?`post-item-last`:(props.index===0)?`post-item-first`:`post-item`}> 
        <div className="post-profile-wrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k7zqsjrs1ks-21%3A12?alt=media&token=bb4da667-8c03-4f1a-a6c8-5792831ebbea"
            alt="profilepic"
            className="profile-pic"
          />
          <div className='post-profile-header'>
          <div className="image-frames flex-col-hstart-vstart">
            <p className="user-name">{props.username}</p>
            <p className="post-date">Today at {props.time}</p>  {/* date == currentDate ? ('Today' : {props.date}) */}
          </div>
 
 
          
          </div>
        </div>

            <div className={`sample-image-wrapper`} onClick={()=> {console.log(props.index)}}>
    

      
            <div className={`post-${props.index}`}>
                <div className={`figure-${props.index}`}>
            

                </div>
              </div>

              {/*props.src? <img src={props.src} alt='samplepost' className='milestone-post-image'/>:''*/}
            </div>   
 
        <div className='actionbar-wrapper'>   
        
        <ActionBar comments={props.comments} 
          currentuser={props.currentUser}
          postOwner={props.username}
          postId={props.myKey} 
          likes={props.likes}
          serverState={serverState}
          from={props.from}
          />

      </div>
      <div className="caption-frame">
       
        <p className="caption-header">{props.text}</p>
        {(props.from.includes('/milestone'))?'':(props.from.includes('/posts'))?
        <button className="caption-button">View Milestones &amp; Groups</button>
        :
        <Link to={`#`}  state={{comments:serverState?userComments:props.comments, likes:props.likes, server:serverState}} 
         className="caption-context">View Milestones &amp; Groups</Link>
    }
        
      </div>

        </li>
 </>
    )
}
