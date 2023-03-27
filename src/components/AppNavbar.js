import React, {useState, useEffect} from 'react'
import './AppNavbar.css'

function AppNavbar(props) {
  function showPage() {
    console.log(props.from)
  }
  return (
    <>
    <div className={(props.from)==="feed"?"top-header-feed":"top-header"}>
    {props.title ? (
        <div className="nav-wrapper flex-row-vcenter-hstart">
               <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/j2pfzeam6qs-91%3A4?alt=media&token=946b8e0b-e09c-4e87-80bd-54b48926b2d0"
              alt="Not Found"
              className="top-arrow-toggle"
            />
          <p className={"top-brand-toggled"}>{props.title}</p>
          </div>):(
          <div className="nav-wrapper flex-row-vcenter-hstart">
          <p className="top-brand">milestone</p>
        </div>)}
      </div>
      </>
  )
}

export default AppNavbar