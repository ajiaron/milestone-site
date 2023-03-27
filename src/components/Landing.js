import React, {useState, useEffect} from "react"
import Navbar from "./Navbar";
import './Landing.css';
import './Demo.scss'

export default function Landing() {
  const [currentTime, setCurrentTime] = useState('')
  useEffect(()=> {
    var time = new Date().getHours()
    if (time >=5 && time < 12) {
      setCurrentTime('Morning')
    } 
    else if (time >= 12 && time < 18) {
      setCurrentTime('Afternoon')
    }
    else if (time >= 18 && time < 22) {
      setCurrentTime('Evening')
    }
    else {
      setCurrentTime("Night")
    }
  }, [])
  return (
    <div className="main-content">
      <Navbar page={"landing"} inView={false}/>
      <div className="content-wrapper">

          <img
            src="../assets/gradiant-upper.png"
            alt="background"
            className="background-right"
          />

        <div className="hero-container">
          <div className="header-container">
            <p className="header-text">Good </p>
            <p className={currentTime}>{`${currentTime}`}</p>
            <p className="header-text">! My name is </p>
     
              <div className="header-main-name">
               <p className="header-name-text">Aaron Jiang</p>
              </div>
            <div className="header-main-context">
            <p className="header-subtext">Current Computer Science Major @ UC Davis</p>
            </div>
          </div>
      
          <div className="context-container">
            <p className="hero-description">Focused in the fields of Software Engineering, Frontend {'&'} Backend Development, and Data Aggregation.
            </p>
            <p className="hero-description">Eager to build both mobile and web-based projects with novelty and familiarity.</p>
          </div>
        </div>
            <img
            src="../assets/curve1.png"
            alt="ring"
            className="vector-right"
            id = "vector"
          />
           <img
            src="../assets/curve2.png"
            alt="ring"
            className="vector-left"
            id = "vector"
          />
      
            <img
              src="../assets/curve3.png"
              alt="ring"
              className="vector-middle"
              id = "vector"
            />
            <div className="top-stack">
                <img
                  src="../assets/EllipseLine.png"
                  alt="ring"
                  className="ring-center"
                  id = "ringlinemid"
                />
                <img
                  src="../assets/EllipseBlue.png"
                  alt="ring"
                  className="ring-outer"
                  id = "ring"
                />
              </div>
            <div className="middle-stack">
              <img
                src="../assets/EllipseLine2.png"
                alt="ring"
                className="ring-top"
                id = "ringline"
              />
                <img
                src="../assets/EllipseYellow.png"
                alt="ring"
                className="ring-middle"
                id = "ring"
              />
          </div>
          <div className="bottom-stack">
              <img
              src="../assets/EllipseLine3.png"
              alt="ring"
              className="ring-bottom"
              id = "ringlinebot"
            />
              <img
              src="../assets/EllipseRed.png"
              alt="ring"
              className="ring-inner"
              id = "ring"
            />
          </div>
    

        <img
            src="../assets/gradiant-left.png"
            alt="background"
            className="background-left"
        />

      </div>
    </div>
  );
}

