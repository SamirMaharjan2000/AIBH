import { CheckCircle2 } from "lucide-react";
import { servicesOptions } from "../constants";  // Removed trailing comma for clean syntax
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/contactus'); // Abstracted for potential reuse and clear function definition

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services We Provide
      </h2>
      <div className="flex flex-wrap -mx-2">
        {servicesOptions.map((option, index) => (
          <div key={index} className="px-2 w-full sm:w-1/2 lg:w-1/2 ">
            <div className="p-10 border border-neutral-700 rounded-xl lg:h-[60vh] lg:mt-5">
              <p className="text-4xl mb-6 text-white text-transparent bg-clip-text">
                {option.title}
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mr-2">{option.price}</span>
                <span className="text-neutral-400">/Month</span>
              </p> */}
              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mt-8">
                    <CheckCircle2 size={24} className="text-white" /> {/* Use size and color for better UI */}
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleNavigate}
                className="mt-20 w-full h-12 p-5 text-xl border rounded-lg hover:bg-red-600 border-red-500 transition-colors duration-200"
              >
                INQUIRE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
