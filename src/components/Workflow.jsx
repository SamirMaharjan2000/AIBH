import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Workflow = () => {
  useEffect(() => {
    AOS.init();
    }, []);
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Find out More  {" "}
        <span className="bg-gradient-to-r from-red-500 to-yellow-800 text-transparent bg-clip-text">
          Features.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-8" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
