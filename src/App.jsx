import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Profile from  './Profile/Profile'
import Toggle from './toggle.jsx'
import About from './About/About.jsx'
import Detail from './Detail.jsx'
import Work from './Work.jsx'
import Skill from './Skill.jsx'
import Experience from './Experience.jsx'
import Newsletter from './Newsletter.jsx'
import Services from './Services.jsx'
import Portfolio from './Portfolio.jsx'
import Loop from './Loop/Loop.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

export default function App() {
    useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true
    })
  },[])
  return (
    <div className='dark:bg-black bg-white gap-7 flex flex-col  mx-3 justify-center '>
    <Profile/>
    <div className="flex flex-col  md:mx-5 p-3  md:items-end md:flex md:justify-end  justify-center  ">
     <Toggle/>
     <About/>
     <Detail/>
     <Work/>
     <Skill/>
     <Experience/>
     <Newsletter/>
     <Services/>
     <Portfolio/>
     <Loop/>
     <Contact/>
     <Footer/>
     </div>
     </div>
  )
}

