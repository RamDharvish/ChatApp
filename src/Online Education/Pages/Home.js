import React, { Fragment } from 'react'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/Hero-Section/HeroSection'
import Company from '../Components/Company-section/Company'
import AboutUs from '../Components/About-us/AboutUs'
import Courses from '../Components/Courses-section/Courses'
import ChooseUs from '../Components/Choose-us/ChooseUs'
import Features from '../Components/Feature-section/Features'
import FreeCourse from '../Components/Free-course-section/FreeCourses'
import Testimonials from '../Components/Testimonial/Testmonial'
import Newsletter from '../Components/Newsletter/NewsLetter'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <Company/>
      <AboutUs/>
      <Courses/>
      <ChooseUs/>
      <Features/>
      <FreeCourse/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </Fragment>
  )
}

export default Home