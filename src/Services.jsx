import React, {useEffect, useState} from 'react'
import Portfolio from './assets/portfolio-3.jpg'
import Portfolio1 from './assets/portfolio-2.jpg'
import Portfolio2 from './assets/portfolio-4.jpg'
import Portfolio3 from './assets/portfolio.jpg'
import Ecommerce from './assets/ecommerce-1.png'
import Blog from './assets/blog-1.png'
export default function Services() {
  useEffect(()=>{
    const handleClick = (event)=>{

        if(window.innerWidth <= 768){
          const serviceItem=event.currentTarget;
          serviceItem.classList.toggle('active')
          document.querySelectorAll('.service-item').forEach((item)=>{

            if(item !== serviceItem){
              item.classList.remove('active')
            }
          })
        }
  }
  const serviceItems= document.querySelectorAll('.service-item')
  serviceItems.forEach((item)=>{
    item.addEventListener('click', handleClick)
  })

    return ()=>{
      serviceItems.forEach(item =>{
        item.removeEventListener('click', handleClick)
      })
    }
  },  [])
  return (
    <div className=' mb-24 mt-10 lg:w-3/5 md:w-full w-full font-sans  ' data-aos='fade-up'>
      <div className=" flex flex-col md:flex-col ">
      <h1 className="text-black dark:text-white text-3xl mb-10 font-bold ">Services</h1>
      <div className="rounded-sm max-w-[100%] md:h-50 h-40 border-0 flex-col flex md:grid md:grid-cols-2 gap-7">
        <div className=' justify-center flex relative'>
        <img src={Portfolio} className='rounded-sm w-full h-auto' alt="" data-aos='fade-up' />
        <div   className=' overlay absolute bg-gray-500/20 w-full h-full  opacity-0 hover:opacity-100 transition-all duration-300 top-18.6  flex justify-center items-center'>
        <p className=' text-2xl  text-white'>Web development</p>
        </div>
        </div>
        <div className='service-item justify-center flex relative'>
        <img src={Portfolio1} className='rounded-sm w-full h-auto' alt="" data-aos='fade-up'/>
        <div  className=' overlay absolute bg-gray-500/20 w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 top-18.6 flex justify-center items-center '>
        <p className='text-2xl  text-white'>App development</p>
        </div>
        </div>
        <div className='service-item justify-center flex relative'>
        <img src={Portfolio2} className='rounded-sm w-full h-auto' alt="" data-aos='fade-up' />
        <div  className='overlay absolute  w-full h-full bg-gray-500/20 opacity-0 hover:opacity-100 transition-all duration-300 top-88.3  flex justify-center items-center'>
        <p className=' text-2xl  text-white '>Data Analyst</p>
        </div>
        </div>
        <div className='service-item justify-center flex relative' >
        <img src={Portfolio3} className='rounded-sm w-full h-auto' alt="" data-aos='fade-up' />
      <div  className='overlay absolute bg-gray-500/20 w-full h-full  opacity-0 hover:opacity-100 transition-all duration-300 top-88.3  flex justify-center items-center '>
      <p className=' text-2xl flex  text-center text-white'>Software Engineer</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
