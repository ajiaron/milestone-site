import React, {useState, useEffect, useRef} from 'react';
import emailjs, { send } from '@emailjs/browser';
import { Link } from "react-router-dom";
import './ContactForm.css'

function ContactForm() {
    const formRef = useRef();
    function handlePress (e) {
        e.preventDefault()
        console.log('yup')
    }
    const sendEmail = (e) => {
        //e.preventDefault();
        emailjs.sendForm('service_f5zcpn5', 'template_juzig7f', formRef.current, 'dwGHXJ200qKFoQVQw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <form className="contact-form-screen" ref={formRef} onSubmit={(e)=> {sendEmail(e)}} name='contact' data-netlify='true'>
               <div className="contact-form-name">
                <p className='contact-form-text'>Your Name</p>
                <input className='contact-name-input' placeholder='Enter your name...' tyoe='text' name="user_name"/>
            </div>
            <div className="contact-form-email">
                <p className='contact-form-text'>Email Address</p>
                <input className='contact-name-input' placeholder='Enter your email address...' type='email' name="user_email"/>
            </div>
            <div className='contact-form-message'>
                 <p className='contact-form-text'>Feedback/Questions</p>
                 <textarea className='contact-message-input'
                  name='message'
                  placeholder='Enter any additinoal information you would like us to hear...'/>

            </div>
            <div className='contact-button-container'>
                <button className='send-button-wrapper' type='submit'>
                    <div className='contact-button'>
                        <p className='contact-button-text'>
                            Send
                        </p>
                    </div>
                </button>
                <Link className='link-button-wrapper' to ={'https://github.com/ajiaron'}>
                    <div className='contact-button-alt'>
                        <div className='git-logo'></div>
                        <p className='contact-button-text-alt'>
                            Github
                        </p>
                    </div>
                </Link>
            </div>
 
        </form>
    )
}
export default ContactForm