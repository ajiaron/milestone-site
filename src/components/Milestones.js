import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Milestones.css'

function Milestones(props) {
  const {myKey, title, entries, streak, src, from, milestoneList, onSendMilestone, onDeleteMilestone, expand} = props
  const [selected, setSelected] = useState(false)
  const [renderCount, setRenderCount] = useState(0)
  const selectedStone = {
    id: myKey,
    key:myKey,
    title: title,
    entries: entries,
    streak: streak,
    src: src,
  };
  function selectStone() {
    if (from === 'create'|| from.includes('edit')) {
      if (selected && from === 'edit') {
        onDeleteMilestone(selectedStone)
      } else {
        onSendMilestone(selectedStone)
      }
      setSelected(!selected)
    }
  }
    return (
        <li className={(from.includes('profile'))?('personal-milestone-item'):(from.includes('milestonelist')||expand===true)?'full-milestone-item':'post-milestone-item'}>
        <div className={(selected?'selected-milestone-content':(from.includes('profile'))?
        'profile-milestone-content':'post-milestone-content')+' flex-col-hstart-vstart'} onClick={selectStone}>
          <div className="profile-milestone-item flex-row">
            <img
              src={src}
              alt="Not Found"
              className="hobbies-music"
            />
            <div className='milestone-item-context'>
            <p className="milestone-item-title">{title}</p>
            <p className="milestone-streak">
            {entries+1} days<span className="milestone-streak-context"> {streak}</span>
            </p>
            </div>
            
          </div>
        </div>
        </li>
      )
}

export default Milestones