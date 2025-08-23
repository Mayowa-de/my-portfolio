import React from "react";

export default function Contact() {
  return (
    <div className="sm:mt-[50px] mt-[50px] md:ml-2 items-center mb-10 lg:w-3/5 md:w-full justify-center mx-3" data-aos='fade-up'>
      <div className="flex flex-col ">
      <div className="text-black flex id='contact' dark:text-white">
        <h1 className="text-3xl font-bold mb-5">Contact Me</h1>
      </div>
      <div className="flex flex-col gap-5 w-full" data-aos='fade-up'>
        <div className="bg-white shadow-xl flex w-full  h-[70px]  items-center p-4 ">
          <input
            id="floating-input"
            className="block w-full  p-4 pt-4 pb-2.5 px-2.5 text-black bg-slate-300 border-0 focus:outline-blue-600 items-center focus:border-blue-600 peer appearance-none"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="floating-input"
            className="absolute text-2xl duration-300 transform translate-y-2 scale-75 top-2 z-10 origin-[0] bg-slate-300 px-2 
            peer-focus:px-2 peer-placeholder-shown:top-1 text-gray-500 peer-focus:bg-slate-300
            :peer-placeholder-shown:translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-6"
          >
            Name
          </label>
        </div>
        <div className="bg-white shadow-xl flex  h-[70px]  items-center p-4 relative">
          <input
            id="floating-input"
            className="block w-full   p-4 pt-4 pb-2.5 px-2.5 text-black bg-slate-300 border-0 focus:outline-blue-600 items-center focus:border-blue-600 peer appearance-none"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="floating-input"
            className="absolute text-2xl duration-300 transform
        -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-slate-300 px-2
        peer-focus:px-2 peer-placeholder-shown:top-1 text-gray-500 peer-focus:bg-slate-300
        peer-placeholder-shown:translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-6"
          >
            Email
          </label>
        </div>
        <div className="bg-white shadow-xl flex  h-[70px]  items-center p-4 relative">
          <input
            id="floating-input"
            className="block w-full  p-4 pt-4 pb-2.5 px-2.5 text-black bg-slate-300 border-0 focus:outline-blue-600 items-center focus:border-blue-600 peer appearance-none"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="floating-input"
            className="absolute text-2xl duration-300 transform
        -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-slate-300 px-2
        peer-focus:px-2 peer-placeholder-shown:top-1 text-gray-500 peer-focus:bg-slate-300
        peer-placeholder-shown:translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-6"
          >
            Subject
          </label>
        </div>
        <div className="bg-white shadow-xl flex  h-[200px]  items-center p-4 relative">
          <input
            id="floating-input"
            className="block w-full h-full  p-4 pt-4 pb-2.5 px-2.5 text-black bg-slate-300 border-0 focus:outline-blue-600 items-center focus:border-blue-600 peer appearance-none"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="floating-input"
            className="absolute text-2xl duration-300 transform
        -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-slate-300 px-2
        peer-focus:px-2 peer-placeholder-shown:top-1 text-gray-500 peer-focus:bg-slate-300
        peer-placeholder-shown:translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-6"
          >
            Message
          </label>
        </div>
        <button className="w-full h-[50px] border-0 bg-indigo-600 text-white">
          Send Message
        </button>
      </div>
      </div>
    </div>
  );
}
