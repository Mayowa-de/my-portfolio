import React, { useEffect, useState, useRef} from 'react'


export default function Work() {
   const [counters, setCounters] = useState({})

   useEffect(()=>{
    const h2s =document.querySelectorAll('h2[data-target]');
    h2s.forEach((h2)=>{
      const target = parseInt(h2.dataset.target, 10)
      if(!isNaN(target) && target >0){
        setCounters((prev)=>({
          ...prev,
          [h2.dataset.target]: 0, 
        }));
        let start =0
        const end =target
        if(start === end) return

        const increment = Math.ceil(end/100);
        const timer =setInterval(()=>{
          setCounters((prev)=>{
            const current = prev[h2.dataset.target] || 0;
            const nextCount = current + increment >= end ? end : current + increment;
            return{
              ...prev,
              [h2.dataset.target]: nextCount,
            }
          })
        }, 20)
        return ()=>clearInterval(timer)
      }
    })
   }, [])
  return (
    <div className='gap-5 flex justify-center w-full md:w-full lg:w-3/5 md:ml-2  flex-col  mt-10  font-sans' data-aos='fade-up'>
      <div className="md:flex gap-5 flex-col flex md:flex-row ">
        <div  className="bg-indigo-600 card flex shadow-xl rounded-none md:w-2/3 items-center justify-center p-7 " data-aos='fade-up'>
          <div>
          <h2  data-target="5" className=" text-5xl md:text-4xl text-white dark:text-black font-medium">
            {counters["5"] || 0}
          </h2>
          </div>
          <div className="bg-('#3B82F6') text-gray-400  text-center">
            <p className="md:text-xl text-2xl">Years of</p>
            <h5 className=' font-medium text-2xl'>Experience</h5>
          </div>
        </div>
        <div  className="bg-indigo-600 card rounded-none md:w-2/3 p-12 justify-center items-center shadow-xl" data-aos='fade-up'>
          <div >
          <h2 data-target="100" className="text-5xl md:text-4xl text-white dark:text-black font-medium">
          {counters["100"] || 0}
          </h2>
          </div>
          <div className="texts1 text-gray-400 text-center">
            <p className="md:text-xl text-2xl">Happy</p>
            <h5 className=' font-medium text-2xl'>Clients</h5>
          </div>
        </div>
        <div  className="bg-indigo-600 card p-11 rounded-none justify-center items-center md:w-2/3 shadow-xl" data-aos='fade-up'>
          <div >
          <h2 data-target="200" className="text-5xl md:text-4xl text-white dark:text-black font-medium">
          {counters["200"] || 0}
          </h2>
          </div>
          <div className=" text-gray-400 text-center">
            <p className="md:text-xl text-2xl">Complete</p>
            <h5 className=' text-2xl font-medium'>Projects</h5>
          </div>
        </div>
        </div>
           <hr className=' text-slate-400 h-2 md:w-xl'/>
    </div>
  )

  }