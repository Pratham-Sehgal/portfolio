import React, { useEffect, useRef } from "react";
import pdf from "../pdf/ResumePS.pdf"
import hero from './data/hero.json'
import Typed from "typed.js";


function Home() {
  const typedRef=useRef(null)
  useEffect(() => {
    const options={
      strings:["Welcome to my portfolio","my name is pratham","i m full stack developer","thanks for visiting"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed=new Typed(typedRef.current,options)
    return () => {
    typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right"
      data-aos-duration="1000">
          <h1 ref={typedRef}>
          </h1>
          {/* btn-outline-warning  : use for making the button glow like warning */}
          <a href={pdf} download="resume.pdf" className="btn my-3 btn-outline-warning">
            Download Resume
          </a>
        </div>
        <div className="right">
        <div className="img"
        data-aos="fade-up-left"
        data-aos-duration="1000">
        <img src={`/assets/${hero.imgSrc}`} alt="" /> 
        </div>
        </div>
        
        
      </div>
    </>
  );
}

export default Home;
