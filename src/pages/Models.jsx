import BM from "../assets/bm.svg";
import { partners, models } from "../constants";
// import { DevicePhoneMobileIcon, EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/solid';
import 'aos/dist/aos.css';
import React , { useEffect } from "react";
import AOS from 'aos';
// import CardComponent from "../components/ui/Card-hover";
import { HoverEffect } from '../components/ui/Card-hover';
import Consult_Logo from "../assets/consultant.svg"
import Strat_Logo from "../assets/strategy.svg"
import Tech_Logo from "../assets/technology.svg"
import Typed from "typed.js";

const Models = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const el = React.useRef(null);

  React.useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['A business model describes how a company creates, delivers, and captures value.'],
    typeSpeed: 50,
  });

  return () => {
    typed.destroy();
  };
}, []);



  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] mt-[-20px] bg-neutral-500 rounded-lg">
  <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4 lg:ml-20">
    <h1 className="text-4xl font-bold leading-snug tracking-tight text-white text-center ">
      Business Models <br />
      <span ref={el} className="text-xl font-regular text-white bg-clip-text">
              {" "} Great Ideas
      </span>
    </h1>
    
  </div>
  <div className="w-full md:w-1/2">
    <img src={BM} alt="Illustration" className="w-full h-auto max-w-lg mx-auto object-cover" />
  </div>
</div>


      
      


      <div className="text-center my-10 mt-40">
        <h2 className="text-3xl sm:text-5xl font-bold text-red-500">
          Business Models
        </h2>
      </div>

    

    {/* <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-center gap-5 my-10 px-20">
      {models.map((model, index) => (
        <CardComponent key={index} features={model.features} title={model.title} />
      ))}
    </div> */}
    
    <div>
      <HoverEffect items={models}  className="custom-class" />
    </div>



    <div>
    <div className="text-center mt-40 mb-20">
        <h2 className="text-3xl font-bold text-white">
          Trusted by <span className="text-red-600">200+</span> customers worldwide
        </h2>
      </div>

      <section aria-labelledby="partners" className="place-items-center flex flex-row flex-wrap gap-20 mb-20">
        <div className="grid gap-4">
          <h2 id="partners" className="text-4xl font-bold text-red-600">Our Partners</h2>
          <p className="w-full max-w-lg">We’ve partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn’t lock you in.</p>
        </div>
          <div className="p-4 bg-white shadow-md dark:shadow-xl rounded-md grid grid-cols-3 gap-10 justify-center items-center text-black ml-5">
            
            <div className="flex flex-col items-center justify-center">
            <img src={Consult_Logo} alt="Consult Logo" className="h-16 w-16" />
            <p>Consultant</p>
            </div>
            <div className="flex flex-col items-center justify-center">
            <img src={Strat_Logo} alt="Consult Logo" className="h-16 w-16" />
            <p>Strategic Partners</p>
            </div>
            <div className="flex flex-col items-center justify-center">
            <img src={Tech_Logo} alt="Consult Logo" className="h-16 w-16 rounded-[40px]" />
            <p>Technology Partners</p>
            </div>
            </div>
    </section>
    </div>
    </>
    
    

  );
}

export default Models;

{/* <div className="flex flex-wrap justify-center gap-5 my-10 opacity-70">
        {partners.map((partner, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2 flex">
            <div className="bg-neutral-700 rounded-md p-6 border border-neutral-900 text-white text-center flex flex-col items-center h-full cursor-pointer">
              <img src={partner.logo} alt={partner.name} className="h-10 w-10 mb-3" />
              <h3 className="font-bold text-white">{partner.user}</h3>
              <p className="flex-grow text-white">{partner.text}</p>  {/* Ensures that this paragraph takes up any extra space pushing siblings to align */}
      //       </div>
      //     </div>
      //   ))}
      // </div> */}