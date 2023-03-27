import React from 'react'
import './Feed.css'
import Post from './Post'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import { useState, useEffect, useCallback } from 'react'


export default function Feed(props) {
    let [feedList, setFeedList] = useState([])
    const [server, setServer] = useState(false)
    const [postComments, setPostComments] = useState([])
    const [postTime, setPostTime] = useState(
      new Date().toLocaleString("en-US", {month:"short"})+' '+new Date().toLocaleString("en-US", { day : '2-digit'})
    )


    const fetchData = useCallback(()=> {     /* gets data when server is not running */
        fetch('../../assets/posts.json', {
          method:'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
        })
        .then(response => response.json())
        .then(data => {
          setFeedList(data)
        }) 
      }, [])
     
      useEffect(() =>{
          fetchData()
      }, [fetchData])

    return (
        <div className="content" id ="feed" >
     
          <AppNavbar server={server} from={'feed'}/>
       
            <ul className='feed-items'>
                {feedList.map(post => (
                    <Post key={post.id} 
                    myKey={post.id}
                    username={post.username} 
                    text={post.text} 
                    src={post.src}
                    time={postTime} 
                    context={post.context} 
                    comments={postComments}    /* might want to get rid of this */
                    likes={post.likes}
                    currentUser={'johnnyapples'}
                    serverState={server}
                    from={'/newfeed'}
                    index = {feedList.indexOf(post)}
                    />
                ))}
            </ul>
            <Footer logged={false} from={'feed'}/>
        </div> 
    
    );
    };