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
import Contact_us from '../components/contact/Contact_us'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Trust />
        <Category />
        <Service />
        <Project />
        <Testimonial />
        <Blog />
        <Contact />
        <Contact_us />
    </div>
  )
}

export default Home