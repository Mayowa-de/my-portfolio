import React from 'react'

export default function Detail() {
  return (
    <div className=' text-white  w-full lg:w-3/5 lg:pl-4 justify-center md:pl-0 pl-2 items-center ' data-aos='fade-up'>
        <div className=" flex-col flex gap-5  md:flex-row   ">
          <div className="flex-col  leading-7" data-aos='fade-up'>
          <label className='flex gap-2 text-black dark:text-white md:text-base'>
            <span className='text-indigo-500'>Names:</span>Ojomu Mayowa
          </label>
          <label className='flex gap-2 text-black dark:text-white md:text-base'>
            <span className='text-indigo-500'>Degree:</span>Bachelor
          </label>
          <label className='flex gap-2 text-black md:text-base dark:text-white'>
            <p><span className='text-indigo-500 ' > Phone:</span> +234 9077 37171</p>
          </label>
          <label className='flex gap-2 text-black dark:text-white md:text-base'>
            <p className='text-indigo-500'>Address:</p>4, Omolabake off Odogunyo,Ikorodu Lagos.
          </label>
          </div>
          <div className='sm:flex-col sm:flex leading-7' data-aos='fade-up'>
          <label className='flex gap-2 text-black dark:text-white text-base'>
            <span className='text-indigo-500'>Experience:</span>5 years
          </label>
          <label className='flex gap-2 text-black dark:text-white text-base'>
            <span className='text-indigo-500'>Email:</span>Ojomumayowa@gmail.com
          </label>
          </div>
          </div>
        </div>
  )
}
