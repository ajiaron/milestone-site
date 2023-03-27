import React, {useState, useEffect, useRef} from "react"
import Navbar from "./Navbar";
import './Demo.scss';
import Profile from "./Profile";
import CreatePost from "./CreatePost";
import Feed from './Feed';
import { useInView } from 'react-intersection-observer';
import Milestones from './Milestones'
import Grouptag from './Grouptag'
import ContactForm from "./ContactForm";

function Demo() {
    const { ref:feedRef, inView:feedInView } = useInView({
      threshold:0,
      triggerOnce:false
    });
    const { ref:topRef, inView:topInView } = useInView({
      threshold:0,
      triggerOnce:false
    });
    const { ref:midRef, inView:midInView, entry } = useInView({
      threshold:0,
      triggerOnce:false
    });
    const { ref:bottomRef, inView:bottomInView } = useInView({
      threshold:0,
      triggerOnce:false
    });
    const { ref:contactRef, inView:contactInView } = useInView({
      threshold:0,
      triggerOnce:false
    });

    function onScrollUp() {
      const element = document.getElementById('feed')
      element.scrollTo({top:1300, behavior:'smooth'})  
    }
    function onScrollDown() {
      const element = document.getElementById('feed')
      element.scrollTo({top:0, behavior:'smooth'})  
    }
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=> {
      if (bottomInView && !scrolled) {
        setTimeout(function(){
          onScrollUp()
        }, 1000)
        setTimeout(function(){
          onScrollDown()
        }, 2000)
        setScrolled(true)
      }
    }, [bottomInView, scrolled])
   
    const [currentTime, setCurrentTime] = useState('')
    const [currentView, setCurrentView] = useState('home')
    useEffect(()=> {
      if (topInView) {
        setCurrentView('home')
      } 
      else if (contactInView) {
        setCurrentView('contact')
      }
      else {
        setCurrentView('overview')
      }
    }, [topInView, contactInView])
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
              <Navbar page={'demo'} inView={currentView}/>
            <div className="container">
              <section className="page-1" id='home'>
                <div className="hero-wrapper">
                  <div className="header-container">
                        <p className="header-greeting">Good </p>
                        <p className={currentTime}>{`${currentTime}`}! </p>
                        <p className="header-greeting"> Welcome to </p>
                      <div className="header-main-name">
                        <p className="header-name-title">Milestone.</p>
                      </div>
                      <div className="header-main-context">
                        <p className="header-subcontent-top">Turning goals into stories</p>
                        <p className="hyphen-top">—</p>
                        <p className="header-subcontent-top"> one mile at a time.</p>
                      </div>
                  </div>
                  <div className="context-wrapper">
                      <p className="hero-description">Our application is built for logging your everyday activities into collaborative {'&'} customizable stories, which we like to call </p>
                      <p className="description-emphasis"> "milestones."</p>
                      <p className="hero-description-lower-top">Currently available on TestFlight for external testing, with an email link. Join our milestone community!</p>
                  </div>
                </div>
                <div className={"screen-wrapper-top"} ref={topRef}>
                  
                    <div className={`profile-screen ${topInView?'profile-screen-active':''}`}>
                        <Profile/>
                        <div className="circle-wrapper">
                          <div className={`circle-cold ${topInView?'cold-top-active':''}`}></div>
                        </div>
                        <div className="circle-wrapper">
                          <div className={`circle-warm ${topInView?'warm-top-active':''}`}></div>
                        </div>
                    </div>
                </div>
              </section>

              {/* page 2 */}
              <section className="page-2" id='overview'>
              <div className={"screen-wrapper-mid"} ref={midRef}>
                    <div className={`milestone-screen ${midInView?'milestone-screen-active':''}`}>
                      <CreatePost/>
                      <div className="circle-wrapper">
                        <div className={`circle-cold-mid ${midInView?'cold-mid-active':''}`}></div>
                      </div>
                     <div className="circle-wrapper">
                      <div className={`circle-warm-mid ${midInView?'warm-mid-active':''}`}></div>
                    </div>
                    </div>
              
                  </div>
                <div className="hero-wrapper-mid">
                  <div className="header-container">
                      <p className="header-greeting-mid">Working on something lately? </p>
                      <div className="header-main-name">
                         <p className="header-name-title">Post about it.</p>
                      </div>
                      <div className="header-main-context-mid">
                      <p className="header-subcontent-top">From a small start to a strong finish</p>
                      <p className="hyphen">—</p>
                      <p className="header-subcontent">and everything in-between.</p>      
                      </div>
                  </div>
                  <div className="context-wrapper-mid">
                      <p className="hero-description-lower">Share your photos and clips of the things you need to do today. You'll be able to look back on all you've done, while appreciating the little things.
                
                      </p>
                      <p className="hero-description-lower">Tag a milestone you've been working on onto your post, or choose one made by a buddy.   </p>
                  </div>
                </div>
                 
              </section>

              {/* page 3 */}
              <section className="page-3" id='overview-2'> 
      
          
                  <div className="hero-wrapper-low">
                    <div className="header-container">
                        <p className="header-greeting-mid">Wondering what others are up to? </p>
                        <div className="header-main-name">         
                          <p className="header-name-title">Take a look.</p>
                        </div>
                        <div className="header-main-context-mid">
                          <p className="header-subcontent">Keep in touch with family, friends, and mentors through the milestones they're reaching.
                          </p>
                        </div>
                    </div>
                    <div className="context-wrapper-mid">
                        <p className="hero-description">Scroll through the recent posts of users who share your interests, or broaden your scope and see what interesting hobbies our community has to offer.
                        </p>
                        <p className="hero-description-lower">Your posts can be saved and archived, so you'll never forget a part of the story.   </p>
                    </div>

                </div>
                  <div className="screen-wrapper-bottom" ref={bottomRef}>
                    <div className={`feed-screen ${bottomInView?'feed-screen-active':''}`}>
                      <Feed/>
                      <div className="circle-wrapper">
                      <div className={`circle-cold-bottom ${bottomInView?'cold-bottom-active':''}`}></div>
                    </div>
                   <div className="circle-wrapper">
                      <div className={`circle-warm-bottom ${bottomInView?'warm-bottom-active':''}`}></div>
                   </div>
                    </div>     
                  </div>
              </section>

              {/* page 4*/}
              <section className="page-4" id='contact'>
              <div className="screen-wrapper-contact" ref={contactRef}>
                <div className={`contact-container ${(contactInView)?'contact-container-active':''}`}>
                  <ContactForm/>
                </div>
             
              </div>
              <div className="hero-wrapper-contact">
                  
                    <div className="header-container">
                        <p className="header-greeting-contact">Interested in seeing more? </p>
                        <div className="header-main-name">         
                          <p className="header-name-title">Contact us.</p>
                        </div>
                        <div className="header-main-context-contact">
                          <p className="header-subcontent">We'll get back to you as soon as we can.
                          </p>
                        </div>
                    </div>
                    <div className="context-wrapper-mid">
                        <p className="hero-description">Try our app by installing Testflight onto your iPhone, and request your access using the contact form to your left.
                        </p>
                      
                    </div>
                    
                </div>
              </section> 


            </div>
            </div>
    )
}
export default Demo
