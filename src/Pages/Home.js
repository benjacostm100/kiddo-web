import React from 'react'
import Content from '../componentes/Content'
import Footer from '../componentes/Footer'
import Carousel from '../componentes/Carousel'
import Navbar from '../componentes/Navbar'


const Home = () => {
  return (
    <div className='Home'>
        <Navbar></Navbar> 
        <Carousel></Carousel>
        <Content></Content>
        <Footer></Footer>

    </div>
  )
}

export default Home