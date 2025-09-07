import React from 'react'
import './Loop.css'
import Image1 from '../assets/Logo6.png'
import Image2 from '../assets/Logo7.png'
import Image3 from '../assets/jslogo.jpeg'
import Image4 from '../assets/Logo3.png'
import Image5 from '../assets/Logo5.png'
import Image6 from '../assets/Logo4.png'
import Image7 from '../assets/Logo1.png'
import Image8 from '../assets/Logo2.png'
export default function Loop() {
        const images=[
          Image1,
          Image2,
          Image3,Image4,Image5,Image6,Image7,Image8
         
        ]
// duplicate images for seamless looping
const doubleImages= [...images, ...images]
  return (
    <div className='overflow-hidden py-4  max-w-full md:w-full lg:w-[60%] flex lg:ml-96'>
      <div className='flex animate-slide gap-2  md:items-end '>
      {doubleImages.map((src, index)=>(
        <img
        key={index}
        src={src}
        alt={`Slide ${index + 1}`}
        className='h-10 w-32 object-cover mx-2 rounded-lg shadow-md'
        />
      ))}
      </div>
    </div>
  )
}
