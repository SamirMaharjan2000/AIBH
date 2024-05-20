import { IoShieldHalfSharp, IoCartSharp, IoCheckmarkCircleOutline, IoBulbOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// Reusable Card Component
const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex-1 bg-gray-800 overflow-hidden rounded-lg border border-yellow-700 shadow-lg shadow-yellow-400 mx-2 my-4">
    <div className="p-6">
      <ul className="text-gray-200">
        <li className="mb-3 flex items-center">
          <Icon className="w-6 h-6 text-yellow-500" />
          <div className="ml-3">
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

// Main Component
const FeaturesContainer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex mt-10 justify-center">
      <div className="py-12 px-4 z-10">
        <div className="w-4xl mx-auto" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className="flex justify-center items-stretch gap-20 w-[90vw] overflow-hidden">
            <FeatureCard
              Icon={IoShieldHalfSharp}
              title="SEO Friendly"
              description="We always provide a complete solution."
            />
            <FeatureCard
              Icon={IoCartSharp}
              title="Ecommerce Ready"
              description="We always provide a complete solution."
            />
            <FeatureCard
              Icon={IoCheckmarkCircleOutline}
              title="Pixel Perfect"
              description="We always provide a complete solution."
            />
            <FeatureCard
              Icon={IoBulbOutline}
              title="Great Ideas"
              description="We always provide a complete solution."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
