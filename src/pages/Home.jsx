import React from 'react'
import Category from '../components/category/Category'
import Hero from '../components/hero/Hero'
import Project from '../components/home/Project'
import Navbar from '../components/navbar/Navbar'
import Service from '../components/service/Service'
import Trust from '../components/trust/Trust'
import Testimonial from '../components/testimonial/Testimonial'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import ContactUs from '../components/contact/ContactUs'
import Footer from '../components/footer/Footer'
import Player from '../components/player/Player'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Trust />
        <Player />
        <Category />
        <Service />
        <Project />
        <Testimonial />
        <Blog />
        <Contact />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home