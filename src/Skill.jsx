import React, { useEffect, useState } from 'react'

export default function Skill() {
    const [progresses, setProgresses]= useState({})

    useEffect(()=>{
      const timer= setTimeout(()=>{
        const divs = document.querySelectorAll('div[data-progress]')
        if(divs.length ===0) return

        divs.forEach((div)=>{
          const progressKey= div.dataset.progress
          const progressTarget = parseInt(div.dataset.progress || '0', 10)
          if(!isNaN(progressTarget) && progressTarget >= 0){
            setProgresses((prev)=>({
              ...prev,
              [progressKey]: 0,
            }))

            let start=0
            const end =Math.min(progressTarget, 100)
            const increment = Math.ceil(end/10)

            const interval = setInterval(()=>{
              setProgresses((prev)=>{
                const current =prev[progressKey] || 0;
                const nextProgress = current + increment >= end ? end : current + increment
                return{
                  ...prev,
                  [progressKey]:nextProgress,
                }
              })
            },200)
            return ()=>clearInterval(interval)
          }
        })
      }, 0)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div className='mb-12 mt-12 flex justify-center w-full md:w-full lg:w-3/5' data-aos='fade-up'>
      <div className="flex flex-col gap-5 w-full  lg:ml-2">
        <div>
      <h1 className="text-3xl text-black dark:text-white font-bold font-sans">Skills</h1>
     </div>
      <div className="flex-col pr-10 flex gap-5 ">
      <div className="skills text-black dark:text-white flex flex-row justify-between items-center">
        <h3  className='font-medium font-sans'>HTML</h3>
        <div className='ml-15'>
          <span  className='justify-end font-sans'>90%</span>
          </div>
          </div>
          <div  className="h-2 bg-gray-300 dark:bg-white w-full flex transition-all duration-1000 ease-linear">
          <div data-progress="90" style={{width: `${progresses['90'] || 0}%`}} className="border-4 border-green-600 w-[90%]">
          </div>
        </div>

      <div className="skills1 text-black dark:text-white flex flex-row justify-between items-center">
        <h3 className='font-medium font-sans'>CSS</h3>
        <div className="ml-15">
          <span className='justify-end font-sans'>80%</span>
          </div>
        </div>
        <div data-progress='80' className="h-2 bg-gray-300 dark:bg-white w-full flex">
          <div style={{width: `${progresses['80'] || 0}%`}} className="border-4 border-sky-600 w-[80%]">
          </div>
      </div>
      <div className="text-black dark:text-white flex flex-row justify-between items-center">
        <h3 className='font-medium font-sans'>JAVASCRIPT</h3>
          <div className="ml-15">
          <span className='justify-end font-sans'>75%</span>
          </div>
        </div>
        <div data-progress='75' className="h-2 bg-gray-300 dark:bg-white w-full flex">
          <div style={{width: `${progresses['75'] || 0}%`}} className="border-4 border-teal-500 w-[75%]">
          </div>
      </div>
      <div className="text-black dark:text-white flex flex-row justify-between items-center">
        <h3 className='font-medium font-sans'>PYTHON</h3>
          <div className="ml-15">
          <span className='justify-end font-sans'>70%</span>
          </div>
        </div>
        <div data-progress='70' className="h-2 bg-gray-300 w-full flex dark:bg-white">
          <div style={{width: `${progresses['70'] || 0}%`}} className="border-4 border-green-400 w-[70%] animate-move">
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}
