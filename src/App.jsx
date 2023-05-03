import React from 'react'

import './App.css'
import Navber from './components/Navber/Navber'
import Header from './contanier/Header/Header'
import Menu from './contanier/SpecialMenu/SpecialMenu'
import Chef from './contanier/Chef/Chef'
import Gallery from './contanier/Gallery/Gallery'
import Findus from './contanier/Findus/Findus'
import Footer from './contanier/Footer/Footer'
import AboutUs from './contanier/AboutUs/AboutUs'
import SpecialMenu from './contanier/SpecialMenu/SpecialMenu'

function App() {


  return (
    <>
    <Navber></Navber>
    <Header></Header>
    <AboutUs></AboutUs>
    <SpecialMenu></SpecialMenu>
    <Chef></Chef>
    <Gallery></Gallery>
    <Findus></Findus>
    <Footer></Footer>     
    </>
  )
}

export default App
