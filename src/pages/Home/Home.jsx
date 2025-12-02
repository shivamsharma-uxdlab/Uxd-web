import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Partners from './Partners'
import TrustedBy from './TrustedBy'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import StrategicPath from './StrategicPath'
import Services from './Services'
import AwardsSection from './AwardsSection'
import MediaMentionsSection from './MediaMentionsSection'
import FeatureWork from './FeatureWork'
 
import WhyChooseUs from './WhyChooseUs'
import OurPartners from './OurPartners'
 

const Home = () => {
  return (
   <>
   <Navbar />
   <Hero />
   {/* <Hero2 /> */}
   {/* <Partners /> */}
   {/* <Services /> */}
   {/* <WhyUs /> */}
   <Testimonials />
   <StrategicPath />
     {/* <Hero2 /> */}
      <TrustedBy />
       <FeatureWork />
      <Services />
        {/* <Partners /> */}
        <AwardsSection />
        {/* <MediaMentionsSection /> */}
        <WhyChooseUs />
        <OurPartners />
       
   </>
  )
}

export default Home