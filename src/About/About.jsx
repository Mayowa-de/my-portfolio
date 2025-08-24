import React from "react";


export default function About() {
  return (
    <div className="about1 max-w-full sm:w-full  lg:w-3/5 text-justify  md:mt-10 lg:items-end" >
      <div className="about1-left justify-center flex flex-col w-full lg:">
      <h1 className="section-title  text-black dark:text-white font-bold  text-3xl mb-10 ml-5 font-sans">About Me</h1>
      <div className=" flex  mx-4">
      <p className="text-gray-600  text-lg  dark:text-white text-justify mb-12 flex font-sans">
        As a multifaceted tech expert, I excel in frontend development, backend engineering, and data analysis.
        I craft seamless user experiences with HTML, CSS, JavaSvript, React, and Next.js, while building robust server-side 
        architectures with Django, Node.js, and Express. With a strong analytical mindset, I extract insights
        from complex data sets using Python, SQL, and data visualization libraries. My expertise drives business growth and optimization.
      </p>
      </div>
      </div>
    </div>
  );
}
