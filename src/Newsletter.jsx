import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex  mb-10 md:w-full  lg:w-3/5  font-sans justify-center items-center' data-aos="fade-up">
            <div className=' w-full  rounded-none card p-6  justify-center items-center flex flex-col gap-5  bg-indigo-500'>
        <h1 className='text-white md:text-3xl text-xl '>Subscibe To My Newsletter</h1>
      <div className=" flex justify-center md:w-2xl w-full md:h-12 h-10 mb-7">
        <input type="email" className="border-none w-full bg-white md:w-100 h-12 p-4 focus:outline-0 text-3" placeholder='Your Email Here' />
        <button  className="bg-green-600 btn  text-white font-bold h-12 rounded-none">Subscribe</button>
        </div>
        </div>
    </div>
  )
}
