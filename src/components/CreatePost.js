import './CreatePost.css'
import React, { useState, useEffect, useContext, useCallback } from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import Milestones from './Milestones'

import {BsChevronDown} from 'react-icons/bs'
import ToggleSwitch from './ToggleSwitch'

function CreatePost() {
  const [latestPost, setLatestPost] = useState(0)
  const [limit, setLimit] = useState('create')
  let [milestones, setMilestones] = useState([])
  const [milestoneForm, setMilestoneForm] = useState([])
  const [server, setServer] = useState(false)
  const [commentToggle, setCommentToggle] = useState(true)
  const [likesToggle, setLikesToggle] = useState(true)
  const [linksToggle, setLinksToggle] = useState(true)
  const [expand, setExpand] = useState(false)
  const postInfo = {
    id: latestPost,
    username: "johnnyapples",
    text: 'Add a description...',
    context: 'Currently developing a post...',
    date:new Date().toISOString().slice(0, 19).replace('T', ' '), 
    likes:0
  }
  const [postData, setPostData] = useState(postInfo)

  function toggleExpand() {
    setExpand(!expand)
    console.log(expand)
  }
  function postDataPublish(e) {
    console.log('yessir')
  }

  const fetchStones = useCallback(()=> {
      fetch('../../assets/milestones.json', {
        method:'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setMilestones(data)
        console.log('fetched from local')
      }) 
    }, [])

  function handleClick() {
    console.log(milestoneForm)
    console.log(postData)
  }
  const fetchPosts = useCallback(()=> {     /* gets data when server is not running */
        fetch('../../assets/posts.json', {
          method:'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
        })
        .then(response => response.json())
        .then(data => {
          setPostData({...postData, id:parseInt(data.reduce((prev,curr) => (parseInt(prev.id) > parseInt(curr.id)) ? prev : curr).id) + 1})

        }) 
      }, [postData])

  useEffect(()=> {
      fetchStones()
  }, [fetchStones])

  useEffect(()=> {
    fetchPosts()
  }, [fetchPosts])

    return (  
   
        <div className='create-post-content'>
        <AppNavbar title='Create Post' from={'createpost'}/>
          <div className='create-post-wrapper'>
          <div className="post-description-container flex-col">
            <p className="description-text">DESCRIPTION</p>
            <div className="post-description-wrapper flex-row">
              <div className="description-input-area">
                <textarea className="description-input" placeholder='Add a desciption...'
                onChange={(event)=>{setPostData({...postData, text:event.target.value})}}
                ></textarea>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vl0mb6lpx3-208%3A3147?alt=media&token=fa86e560-22c7-4a9e-9811-7bdbe66b3938"
                alt="Not Found"
                className="post-image-preview"
              />
            </div>
          </div>
          <div className='select-milestone-container'>
            <div className='expand-select-milestone'>
              <p className="select-milestone-text">SELECT A MILESTONE</p>

              <BsChevronDown className={(expand)?'down-arrow-toggled':'down-arrow'}/>
   
            </div>
 
              <ul className='select-milestone-log'>
              {[...milestones].reverse().map(stone => (
                <Milestones key={stone.idmilestones} myKey={stone.idmilestones}
                title={stone.title} entries={stone.entries} 
                streak={stone.streak} src={stone.src} from={limit} milestoneList={milestoneForm}
                onSendMilestone={selected=>setMilestoneForm([...milestoneForm, selected])} 
                onDeleteMilestone={selected=>setMilestoneForm(milestoneForm.filter(e=>e.id !== selected.id))}
                post={latestPost} expand={expand}
                />
              ))}
              </ul>
  
          </div>
          <div className='toggle-switch-wrapper'>
            <div className="comment-switch-wrapper">
                <p className="switch-label">Comments</p>
                <ToggleSwitch label={"Comments"} onToggleSwitch={toggle=>setCommentToggle(toggle)}/>
            </div>
            <div className="likes-switch-wrapper">
                <p className="switch-label">Likes</p>
                <ToggleSwitch label={"Likes"} onToggleSwitch={toggle=>setLikesToggle(toggle)}/>
            </div>
            <div className="link-switch-wrapper">
                <p className="link-sharing-label">Link Sharing</p>
                <ToggleSwitch label={"Link Sharing"} onToggleSwitch={toggle=>setLinksToggle(toggle)}/>
            </div>
          </div>
            <div className="publish-save-wrapper flex-col-hstart-vstart">
              <button className="save-button" onClick={()=>handleClick()}>
                  <div className='save-button-container'>
                <p className="save-text">Save</p>
                </div>
              </button>
          
              <button className="publish-button" onClick={()=>postDataPublish()}>
                  <div className='publish-button-container'>
                <p className="publish-text">Publish</p>
                </div>
              </button>
     
            </div>
            </div>
            <Footer logged={true} from={'createpost'}/> 
        </div>

      )
}

export default CreatePost
