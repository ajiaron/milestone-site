import React, {useState, useEffect, useCallback, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import {motion} from 'framer-motion'
import './Profile.css'
import Milestones from './Milestones'
import Grouptag from './Grouptag'


function Profile() {
  let [milestones, setMilestones] = useState([])
  let [groups, setGroups] = useState([])
  const [server, setServer] = useState(false)
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
    })
  }, [])
  const fetchGroups = useCallback(()=> {
    fetch('../../assets/groups.json', {
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }
    })
    .then(response => response.json())
    .then(data => {
      setGroups(data)
    }) 
  }, [])

  useEffect(() => {
      fetchGroups()
      fetchStones()
}, [fetchStones, fetchGroups])

  

  return (
      <div className='profile-page'>
      <AppNavbar title={`${'My Profile'}`} from={'profile'}/>
      <div className="profile-container flex-col-hcenter">
        <div className="profile-stats flex-col">
          <div className="profile-page-header flex-row">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/h1b9t5cw8uj-152%3A3?alt=media&token=00d30aad-2cb8-45e6-805a-380273c20a6e`}
              alt="profilepicture"
              className="profile-main-pic"
            />
            <div className="profile-user-wrapper flex-col">
              <p className="profile-handle">@{'johnnyapples'}</p>
              <p className="profile-fullname">{'Johnny Appleseed'}</p>
              <p className="profile-blurb">{'Keep the doctor away!'}</p>
            </div>

            <div className='settings-wrapper'>

              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/h1b9t5cw8uj-153%3A16?alt=media&token=207b8217-0873-4d5a-81e6-2f7a3fcf9e9b"
                alt="Not Found"
                className="settings-logo"
              />
              <div className='settings-notification-icon'/>
   
            </div>
           
          </div>
          <div className="milestone-container flex-col">
            <p className="profile-milestone-name">{'Johnny Appleseed'}</p>
            <div className="profile-milestone-insights flex-col-hend">
              <div className="milestone-insights-headers flex-row-vstart-hstart">
                <p className="milestone-insights-text">MILESTONES</p>
                <p className="milestone-insights-text">GROUPS</p>
                <p className="milestone-insights-friends">FRIENDS</p>
              </div>
              <div className="profile-socials flex-row">
                <p className="personal-milestone-count">4</p>
                <p className="personal-group-count">3</p>
                <p className="personal-friends-count">13</p>
              </div>
            </div>
          </div>
          <div className='milestone-text-wrapper'>
          <p className="text-header-milestones">Personal Milestones</p>

          <p className='milestone-list-expand'>+{milestones.length - 1} more</p>
  
          </div>
          <ul className='personal-milestone-list'>
            {milestones.map(stone => (
               <Milestones key={stone.idmilestones} myKey={stone.idmilestones} title={stone.title} entries={stone.entries} streak={stone.streak} src={stone.src} from={'profile'} milestoneList={[]} expand={false}/>
            ))}
             </ul>
          <p className="text-header-groups">Groups</p>
          <ul className='milestone-group-list'>
            {groups.map(group=> (
              <Grouptag key={group.id} title={group.title} 
               members={group.members} membercount={group.membercount} image={group.image} server={server}/>
            ))}
          </ul>
        </div>
      </div>
      <div className='bottom-space'> {' '} </div>
        <div className='post-footer'> 
       
        <Footer logged={true} from={'profile'}/> 
        </div>
      </div>
  )
}

export default Profile