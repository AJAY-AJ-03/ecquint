import React from "react";

const HomePage = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://s7d9.scene7.com/is/image/roberthalfintl/h5_1477775195_WhtNav:Large-1x?fmt=webp-alpha')] bg-cover bg-center"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="mt-12 relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Anything’s possible when you have the talent
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
        At Ecquint IT Solutions, we specialize in delivering cutting-edge technology solutions that empower businesses to scale, innovate, and thrive in the digital landscape. With expertise in software development, cloud computing, cybersecurity, and IT consulting, we help organizations optimize their operations and enhance security.
        </p>
        <p className="mt-4 text-lg max-w-2xl"> Our tailored solutions ensure that businesses remain competitive in an ever-evolving technological environment. Whether you're looking to develop custom software, secure your IT infrastructure, or migrate to the cloud, our team of experts is here to support you every step of the way.</p>
        {/* Buttons Section */}
        <div className="mt-8 w-full flex flex-col md:flex-row gap-4">
          {/* Job Seekers Section */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">FOR JOB SEEKERS</span>
            <a 
              href="#" 
              className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md text-center"
            >
              Find your next job
            </a>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[1px] bg-gray-400 h-12 mx-6"></div>

          {/* Business Section */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold">FOR BUSINESSES</span>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="#" 
                className="mt-2 px-6 py-3 border border-white text-white font-semibold rounded-full shadow-md text-center"
              >
                Preview candidates
              </a>
              <a 
                href="#" 
                className="mt-2 px-6 py-3 border border-white text-white font-semibold rounded-full shadow-md text-center"
              >
                Hire now
              </a>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default HomePage;
