import React from "react";
import { useEffect } from "react";
// import yellow from "../assets/yellow.svg"
// import { FeatureCards} from './FeatureCards'
import { IoShieldHalfSharp , IoCartSharp , IoCheckmarkCircleOutline , IoBulbOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from "typed.js";
// import pega from '../assets/pega.svg'

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    }, []);
    
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Great Ideas'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
  return (
    <div className="flex flex-col items-center mt-6"  >
      
        <h1 className="App text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide opacity-100 lg:mt-40 " >
            Make Business With {" "} <br />
            <span ref={el} className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
              {" "} Great Ideas
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl lg:mb-60">
            <br />
            Empower your creativity and bring your ideas to life with us.Get started today and turn your imagination
            into immersive reality!
          </p>
        
        {/* <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a> */}
        {/* </div> */}
      
      
        
        {/* Feature Cards */}
        <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        Services Provided
      </h2>
      <div className="flex flex-wrap justify-center  ">
        
      {/* SEO Friendly */}
          <div  className="w-full sm:w-1/2 lg:w-max px-4 py-2 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-sm shadow-red-500 ">
            
              <div className="flex mt-2 items-start ">
              <IoShieldHalfSharp
                  className="w-16 mr-6 text-red-500 "
                 />
                <div>
                <p className="font-bold">SEO Friendly</p>
                  <span className="text-sm font-normal italic text-neutral-600">
                  We always provide a complete solution.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* SEO Friendly */}

          {/* Ecommerce Ready */}
          <div  className="w-full sm:w-1/2 lg:w-max px-4 py-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-sm shadow-red-500">
            
              <div className="flex mt-2 items-start ">
              <IoCartSharp
                  className="w-16 mr-6 text-red-500 "
                 />
                <div>
                <p className="font-bold">Ecommerce Ready</p>
                  <span className="text-sm font-normal italic text-neutral-600">
                  We always provide a complete solution.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Ecommerce Ready */}
          {/* Pixel Perfect */}
          <div  className="w-full sm:w-1/2 lg:w-max px-4 py-2 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-sm shadow-red-500">
            
              <div className="flex mt-2 items-start ">
              <IoCheckmarkCircleOutline
                  className="w-16 mr-6 text-red-500 "
                 />
                <div>
                <p className="font-bold" data-aos="fade-right" >Pixel Perfect</p>
                  <span className="text-sm font-normal italic text-neutral-600">
                  We always provide a complete solution.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Pixel Perfect */}

        {/* Great Ideas */}
          <div  className="w-full sm:w-1/2 lg:w-max px-4 py-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-sm shadow-red-500">
            
              <div className="flex mt-2 items-start ">
              <IoBulbOutline
                  className="w-16 mr-6 text-red-500 "
                 />
                <div>
                <p className="font-bold">Great Ideas</p>
                  <span className="text-sm font-normal italic text-neutral-600">
                  We always provide a complete solution.
                  </span>
                </div>
              </div>
            </div>
          </div>
        {/* Great Ideas */}
        </div>
      </div>
        {/* END */}




      </div>
  );
};

export default HeroSection;

