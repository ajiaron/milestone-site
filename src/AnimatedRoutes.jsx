import React, {useState, useContext} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import Demo from './components/Demo'

function AnimatedRoutes() {
    const location = useLocation()
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Demo />} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes