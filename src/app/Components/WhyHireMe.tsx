'use client';

import { useEffect, useState } from 'react';

export default function WhyHireMe() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`bg-gray-900 text-white py-20 px-6 text-center font-sans transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-3xl mx-auto bg-gray-900">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-white">Why</span>
          <span className="text-[#F6337C]"> Hire Me?</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
          I am a full-stack developer skilled in Java, Spring Boot, and React with real-world experience 
          building secure, scalable applications. I’ve contributed to production-level APIs and responsive 
          front-ends, backed by training and hands-on internships. I'm proactive, fast-learning, and ready 
          to deliver results from day one.
        </p>

        <a
          href="/assets/images/SHIVAYOGITCV.pdf"  
          className="inline-block bg-[#F6337C] text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#e1226c] transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
