//import { useState } from 'react'

import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import HeaderMain from './components/HeaderMain.jsx'
import HeaderLast from './components/HeaderLast.jsx'
import FoodFact from './components/FoodFact.jsx'
import * as React from 'react'
import {Routes , Route} from 'react-router-dom'
import HomePage from './components/pages/Login.jsx'
// Import all of Bootstrap’s CSS

import './index.css'
function App() {
  

    //const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
    <Header/>
    <HeaderMain/> 
    <HeaderLast/>
    <FoodFact/>
     
   {/*   <Routes>
      <Route path= "/" element={<Home/>}/>
     </Routes>
      */}
    </>
  )
}

export default App
