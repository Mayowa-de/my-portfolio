import React from "react";
import { useEffect, useState } from "react";
import MyPic from "../assets/MyPic.jpg";
import "./Profile.css";

const Typewriter=({words, speed=150})=>{
  const [text, setText]=useState('')
  const [wordIndex, setWordIndex]=useState(0)
  const[charIndex, setCharIndex]=useState(0);

  useEffect(()=>{
      const interval= setInterval(()=>{
          const currentWord= words[wordIndex];
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);

          if(charIndex === currentWord.length){
              clearInterval(interval);
              setTimeout(()=>{
                  setCharIndex(0)
                  setWordIndex((prev)=>(prev + 1)% words.length)
              },1000)
          }
      },speed)
      return()=> clearInterval(interval);
  }, [charIndex, wordIndex]);
  return<h3>{text}<span id="cursor">|</span></h3>
}
export default function Profile() {
   const handleDownload=()=>{
    const fileUrl='/CV.pdf';
    const link =document.createElement('a')
    link.href=fileUrl
    link.download='CV.pdf'
    link.click()
   }
  return (
    <div className=" md:mt-20 md:top-0 lg:mt-0 mt-16 mb-12  lg:w-1/3 p-2 rounded-md mx-5 sm:mx-10 justify-center items-center sm:flex-col md:relative lg:fixed">
      <div className="md:w-full md:mx-3 card bg-white border-gray-400 shadow-lg   flex flex-col">
      <div className="sm:top-0 mt-1 p-0 m-0 top-30 ">
      <img src={MyPic} alt="Profile pic" className="w-full h-96 object-cover mb-5 " />
      </div>
      <h2 className="text-indigo-600  font-bold md:text-2xl text-xl mb-5 text-center font-mono" >Mayowa Daniel</h2>
      <h3 className="text-black md:text-2xl font-sans text-xl font-bold mb-7 text-center"><Typewriter margin-top='20rem' words={['Software developer', 'Frontend developer','Backend developer','Data Analyst']}></Typewriter></h3>
      <div className="link flex gap-5 mb-5 items-center justify-center max-w-full no-underline">
        <div className="bg-gray-600 w-12 h-10 items-center justify-center flex hover:bg-indigo-600 no-underline">
          <a href='https://m.facebook.com' target="_blank" >
            <i className="bi bi-facebook text-2xl items-center text-white"></i>
          </a>
        </div>
        <div className="bg-gray-600 w-12 h-10 justify-center items-center flex hover:bg-indigo-600">
          <a href="https://github.com/Mayowa-de" target="_blank">
            <i class="bi bi-github text-2xl text-white"></i>
          </a>
        </div>
        <div className="bg-gray-600 w-12 h-10 justify-center items-center flex  hover:bg-indigo-600 ">
          <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" target="_blank">
            <i class="bi bi-linkedin text-2xl text-white"></i>
          </a>
        </div>
        <div className="bg-gray-600 hover:bg-indigo-500 w-12 h-10 justify-center items-center flex">
          <a>
            <i class="bi bi-instagram text-2xl text-white "></i>
          </a>
        </div>
      </div>

      <div className=" mb-3 flex w-1/2  no-underline ">
          <button onClick={handleDownload} type="btn" className=" btn font-merriweather border-2 border-opacity-50 bg-transparent border-b-0 border-l-0 hover:border-indigo-600 w-full  sm:w-100 h-12 border-black md:text-2xl  text-sm text-black font-bold md:font-medium hover:text-indigo-600 cursor-pointer" download>
            Download CV
          </button>
          <button type="btn" className="btn font-merriweather  border-2  object-fill border-opacity-50 bg-transparent border-r-0 border-b-0 hover:border-indigo-600 border-black w-full h-12 text-sm md:text-2xl text-black md:font-medium font-bold cursor-pointer hover:text-indigo-600" download>
             Contact Me
          </button>
          </div>
      </div>
    </div>
  );
}

