import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
     <Title subTitle='OUR PRODUCTS' title='What we Offer'/>
     <Programs/>
     <About setPlayState={setPlayState}/>
     <Title subTitle='Gallery' title='Campus photos'/>
     <Campus/>
     <Title subTitle='TESTIMONIALS' title='What customers say'/>
     <Testimonials/>
     <Title subTitle='CONTACTS' title='Get In Touch'/>
     <Contacts/>
     <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
