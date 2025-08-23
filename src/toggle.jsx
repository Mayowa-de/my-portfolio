import React, { useEffect, useState } from 'react'

export default function test() {
  const [Theme, setTheme] =useState(false)
   
  useEffect(()=>{
    if(Theme){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    
  },[Theme])

  return (
    <div className='absolute top-1   justify-center items-end p-2 flex  mt-1'>
      <button onClick={()=> setTheme(!Theme)}
        className='border rounded-xl  flex gap-5 p-4 pt-6 pb-6 justify-center btn  w-full bg-transparent'>
          {Theme ? (
          <i className='bi bi-moon-fill text-4xl text-blue-600'></i>
          ):(
            <i className='bi bi-sun-fill text-4xl text-yellow-400'></i>
          )}
        </button>
  
    </div>
  )
}
