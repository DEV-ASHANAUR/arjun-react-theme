import React from 'react'
import Category from '../components/category/Category'
import Hero from '../components/hero/Hero'
import Project from '../components/home/Project'
import Navbar from '../components/navbar/Navbar'
import Service from '../components/service/Service'
import Trust from '../components/trust/Trust'
import Testimonial from '../components/testimonial/Testimonial'
import Blog from '../components/blog/Blog'

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
    </div>
  )
}

export default Home