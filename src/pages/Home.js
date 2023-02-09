import React from 'react'
import Footer from '../components/Footer'
import Middlenav from '../components/Middlenav'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
    
        <Navbar/>
        <Middlenav/>
        <Slider/>
        <Product/>
        <Footer/>
    </>
  )
}

export default Home