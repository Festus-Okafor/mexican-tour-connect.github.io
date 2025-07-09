//import { useState } from 'react'

import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import HeaderMain from './components/HeaderMain.jsx'
import HeaderLast from './components/HeaderLast.jsx'

import * as React from 'react'
//import {Routes , useLocation} from 'react-router-dom'
import HomePage from './components/pages/HomePage.jsx'
// Import all of Bootstrap’s CSS

import './index.css'
function App() {
  

   // const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
    <Header/>
    <HeaderMain/> 
    <HeaderLast/>
    
    </>
  )
}

export default App
