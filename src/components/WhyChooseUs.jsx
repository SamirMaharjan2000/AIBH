import { testimonials } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init();
    }, []);
  return (
    <div className="mt-20 tracking-wide">
  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
    Why Choose <span className="text-red-500">Us</span>
  </h2>
  <div className="flex flex-wrap justify-center" data-aos="fade-up" data-aos-duration="300">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2">
        <div className="bg-neutral-900 rounded-md p-6 text-md border text-center items-center border-neutral-800 font-thin h-full flex flex-col">
          <div className="flex gap-4">
            <div>{testimonial.image}</div>
            <div>
              <h1 className=" font-semibold" >{testimonial.user}</h1>
              {/* <span className="text-sm font-bold italic text-neutral-600">{testimonial.company}</span> */}
            </div>
          </div>
          <p className="mt-4 flex-grow">{testimonial.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default WhyChooseUs;
