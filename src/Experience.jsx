import React from 'react'

export default function Experience() {
  return (
    <div className='lg: lg:w-3/5  mt-10 mb-12 font-sans max-w-full' data-aos='fade-up'>
        <h1 className="text-black dark:text-white text-4xl mb-10 font-bold ">Experience</h1>
        <div className="flex gap-9">
        <div className="text-white flex">
            <div className="border-2 border-opacity-50 border-black dark:border-white h-full flex mr-9" >
              </div>
          <div className='flex flex-col'>
        <div className="experience-right mb-5 relative justify-center">
          <div className='flex gap-3 -ml-10'>
          <div className='text-3xl text-black dark:text-white flex mt-4 gap-3'>&#8594;</div>
        <h4 className='text-black text-2xl mb-5 mt-5 dark:text-white'>Frontend Developer</h4>
        </div>
          <p className='text-gray-500 dark:text-white'>
            Soft Company | 2020 for 2 yrs help them design a scalable user interface and responsive design
          </p>
          </div>
          <div className="mb-5">
            <div className='flex gap-3 -ml-10'>
               <div className='text-3xl text-black dark:text-white items-center -mt-6 flex gap-3'>&#8594;</div>
          <h4 className='text-black dark:text-white text-2xl mb-5'>Backend Developer</h4>
          </div>
          <p className='text-gray-500 dark:text-white'>
            Soft Company | 2020 for 2 yrs help them design a scalable user interface and responsive design
          </p>
          </div>
          <div className="mb-5 ">
            <div className='flex gap-3 -ml-10'>
               <div className='text-3xl text-black dark:text-white -mt-1  flex gap-3'>&#8594;</div>
          <h4 className='text-black dark:text-white text-2xl mb-5'>Data Analyst</h4>
          </div>
          <p className='text-gray-500 dark:text-white'>
            Soft Company | 2020 for 2 yrs help them design a scalable user interface and responsive design
          </p>
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}
