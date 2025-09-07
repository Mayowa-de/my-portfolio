import React from 'react'

export default function Footer() {
  return (
    <div className='md:mx-2  justify-center flex :flex-col md:w-full w-full md:justify-end'>
        <div className='bg-slate-300 md:w- lg:w-[60%]  text-gray-200 p-2 text-center'>
      <div className='mt-10 flex justify-center  text-center'>
        <div className='bg-gray-700 border-2 w-12 h-10 hover:border-indigo-500 justify-center items-center flex'>
            <a href='https://m.facebook.com' target='_blank'><i className='bi bi-facebook text-2xl'></i></a>
        </div>
        <div className='bg-gray-700 border-2 w-12 h-10 hover:border-indigo-500 justify-center items-center flex'>
            <a href='https://github.com/Mayowa-de' target='_blank'><i className='bi bi-github text-2xl'></i></a>
        </div>
        <div className='bg-gray-700 border-2 w-12 h-10 hover:border-indigo-500 justify-center items-center flex'>
            <a href='' target='_blank'><i className='bi bi-linkedin text-2xl'></i></a>
        </div>
        <div className='bg-gray-700 border-2 w-12 h-10 hover:border-indigo-500 justify-center items-center flex'>
            <a><i className='bi bi-instagram text-2xl'></i></a>
        </div>
      </div>
      <div className='text-black justify-center items-center flex flex-col'>
      <div className='flex gap-7 mt-2'>
        <p className='text-3 text-black dark:text-black'>Privacy</p>
        <p className='text-3 text-black dark:text-black'>Terms</p>
        <p className='text-3 text-black dark:text-black'>FAQs</p>
        <p className='text-3 text-black dark:text-black'>Help</p>
      </div>
      <div className='flex mt-2 mb-10'>
          <p className='sm:text-3 text-2'>&copy; All Right Reserved Designed by Mayortech</p>
      </div>
      </div>
      </div>
    </div>
  )
}
