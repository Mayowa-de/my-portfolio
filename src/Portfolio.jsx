import React from 'react'

import Ecommerce from './assets/ecommerce-1.png'
import Blog from './assets/blog-1.png'
export default function Portfolio() {
  return (
    <div className=' mb-12 md:mt-80 sm:mt-[1800px] xs:mt-[1400px] mt-[800px] justify-center lg:w-3/5 md:w-full items-center ' data-aos='fade-up'>
       <div className='md:w-full  flex flex-col md:grid-cols-2 '>
        <h1 className="text-black dark:text-white text-3xl font-bold  mb-10 text-right items-center flex">Portfolio</h1>
      <div className=" w-full   flex flex-col gap-5 md:grid md:grid-cols-2  border-0 ">
        <div className='bg-white card shadow-xl' data-aos='fade-up'>
      <img src={Ecommerce} className='rounded-sm border-0' alt="" />
      <div className='flex gap-7  px-4 mt-2 justify-between'>
      <h3 className=' md:text-2xl text-base font-bold text-black '>E-commerce Platform</h3>
      <div className=' flex gap-10 pr-4'>
      <a href='https://github.com/Mayowa-de' target='_blank'> <i className='bi bi-github md:text-2xl'></i></a>
        <a><i className='bi bi-arrow-up-right-square md:text-2xl text-base'></i></a>
        </div>
        </div>
        <div className='max-w-[100%] flex flex-col mb-10'>
      <p className='text-gray-500 w-full md:text-xl  md:text-left p-4 mb-5'>Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard</p>
      <div className='grid grid-cols-3 justify-center items-center gap-2  max-w-2xl px-4 mr-8 dark:text-black'>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>React</div>
      <div className='bg-slate-300 rounded-md px-2 max-w-xl h-[25px]  text-center text-2'>Node.js</div>
      <div className='bg-slate-300 rounded-md px-2 sm:w-xl w-[110px] h-[25px] text-center text-2'>PostgreSQL</div>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>Stripe</div>
      </div>
      </div>
      </div>
      <div className='bg-white card shadow-xl' data-aos='fade-up'>
      <img src={Blog} alt="" className='rounded-sm border-0' />
      <div className='flex px-4 gap-7  mt-2 justify-between'>
      <h3 className='p-2 font-bold text-black md:text-2xl text-base'>Blog Platform</h3>
      <div className=' flex gap-10 pr-4 mt-2'>
      <a href='https://github.com/Mayowa-de/my-blog_website' target='_blank'> <i className='bi bi-github md:text-2xl'></i></a>
        <a href='my-blog-website-tawny.vercel.app' target='_blank'><i className='bi bi-arrow-up-right-square md:text-2xl'></i></a>
        </div>
        </div>
        <div className='flex flex-col px-4 max-w-[100%] mb-10'>
      <p className='text-gray-500 p-2 w-full md:text-xl mb-5 md:text-left'>FullStack Blog Platform bringing trending and fun story on Tech and Travel</p>
      <div className='grid grid-cols-3 justify-center items-center gap-2 px-4 max-w-2xs dark:text-black'>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>React</div>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>Django</div>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>MySQL</div>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>Stripe</div>
      </div>
      </div>
      </div>
      <div className='bg-white card shadow-xl' data-aos='fade-up'>
      <img src={Ecommerce} alt=""  className='rounded-sm' />
      <div className='flex gap-7 mt-2  px-4 justify-between'>
      <h3 className='text-black md:text-2xl font-bold text-base'>To-do list website</h3>
      <div className=' flex gap-10 pr-4'>
      <a href='https://github.com/Mayowa-de' target='_blank'> <i className='bi bi-github md:text-2xl'></i></a>
        <a href='#'><i className='bi bi-arrow-up-right-square md:text-2xl'></i></a>
        </div>
        </div>
        <div className='flex flex-col gap-2 px-2 mb-10'>
      <p className='text-gray-500 w-full p-2 md:text-xl mb-5 md:text-left'>Collaborative task management tool with real time updates, team collaboration, and progress tracking</p>
      <div className='grid grid-cols-3 justify-center items-center gap-2 px-4 mr-8  max-w-2xs dark:text-black'>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>Nextjs</div>
      <div className='bg-slate-300 rounded-md px-2 w-xl h-[25px] text-center text-2'>Django</div>
      <div className='bg-slate-300 rounded-md px-2 w-[110px] sm:w-xl h-[25px] text-center text-2'>GraphQL</div>
      <div className='bg-slate-300 rounded-md px-2 sm:w-xl w-[110px] h-[25px] text-center text-2'>Socket.io</div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
