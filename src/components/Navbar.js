import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {BiMenu} from 'react-icons/bi'
import './Navbar.css'

export default function Navbar(props) {

    useEffect(()=> {
        if (props.inView) {
            console.log(props.inView)
        }
    }, [props.inView])

    return (
        <div className={"navigation-clear"}>
       
            <div className={"navigation-content-clear"}>
                <a href={'#home'} className={'home-link'}>
                    <p className={(props.inView === 'home')?"navigation-text-landing":"navigation-text-home"}>
                        Home
                    </p>
                </a>
                <a href={'#overview'} className={'demo-link'}>
                    <p className={(props.inView === 'overview')?"navigation-text":(props.inView === 'home')?
                    "navigation-text-projects":"navigation-text-mid"}>
                        Overview
                    </p>
                </a>
                <a href={'#contact'} className={'contact-link'}>
                    <p className={(props.inView === 'contact')?"navigation-text-contact":"navigation-text-main"}>   
                        Contact
                    </p>
                </a>
             
            </div>
        </div>
    )
}
