import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Partners from './Partners'
import TrustedBy from './TrustedBy'
// import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import StrategicPath from './StrategicPath'
import Services from './Services'
import AwardsSection from './AwardsSection'
import MediaMentionsSection from './MediaMentionsSection'
import FeatureWork from './FeatureWork'
 
import WhyChooseUs from './WhyChooseUs'
import OurPartners from './OurPartners'
import Faqs from './Faqs'
import Blogs from './Blogs'
import Footer from './Footer'
import FeaturedLogos from './FeaturedLogos'
 

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
        <FeaturedLogos />
        <AwardsSection />
        {/* <MediaMentionsSection /> */}
        <WhyChooseUs />
        <OurPartners />
        <Faqs />
        <Blogs />
        <Footer />
       
   </>
  )
}

export default Home