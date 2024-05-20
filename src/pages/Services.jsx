import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Pricing from '../components/Pricing';

const Services = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Innovate. Integrate. Excel.'],
      typeSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <header className="mt-2 lg:mt-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-regular tracking-wide">
          Your IT Solutions Partner! <br />
          <span ref={el} className="bg-gradient-to-r from-red-500 to-yellow-800 text-transparent bg-clip-text"></span>
        </h1>
        <p className="mt-10 text-base md:text-lg lg:text-xl text-neutral-500 max-w-4xl">
          With bytes of brilliance, we sculpt the future, in every code, a promise nurtured.
        </p>
      </header>
      <div className="mt-10 lg:mt-28">
        <Pricing />
      </div>
    </section>
  );
}

export default Services;
