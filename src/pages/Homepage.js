import React from 'react'
import Footer from '../components/Footer'

import Header from '../components/homepage/HeaderHomepage'
import HowDoesItWork from '../components/homepage/HowDoesItWork'
import HowSecurity from '../components/homepage/HowSecurity'
import Newsletter from '../components/homepage/Newsletter'
import SlideShow from '../components/homepage/SlideShow'
import WhatIsUnderseen from '../components/homepage/WhatIsUnderseen'
import WhyUnderseen from '../components/homepage/WhyUnderseen'

function Homepage() {
  return (
    <div>
      <Header />

      <SlideShow />
      <WhatIsUnderseen />
      <WhyUnderseen />
      <HowDoesItWork />
      <HowSecurity />

      <div className="" style={{height: "10vh"}}></div>
      {/* <Newsletter /> */}

      {/* <Footer /> */}
    </div>
  )
}

export default Homepage