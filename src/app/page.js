import Slider from '@/components/AutomaticSlider'
import Header from '@/components/common/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Slider/>
      <Story />
      <Team />
      <Footer/>
    </div>
  )
}

export default page
