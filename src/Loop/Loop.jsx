import React from 'react'
import './Loop.css'
import Image1 from '../assets/Htmlogo.jpeg'
import Image2 from '../assets/Jslogo.jpeg'
import Image3 from '../assets/python logo.jpeg'
import Image4 from '../assets/MySQL.jpeg'
import Image5 from '../assets/mongoLogo.jpeg'
import Image6 from '../assets/reactLogo.jpeg'
import Image7 from '../assets/bootstrapLogo.jpg'
import Image8 from '../assets/cssLogo.jpeg'
export default function Loop() {
        const images=[
          Image1,
          Image2,
          Image3,Image4,Image5,Image6,Image7,Image8
         
        ]
// duplicate images for seamless looping
const doubleImages= [...images, ...images]
  return (
    <div className='overflow-hidden py-4  max-w-full md:w-full flex lg:ml-96'>
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
