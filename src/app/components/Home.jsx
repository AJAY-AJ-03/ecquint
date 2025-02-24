import React from "react";

const HomePage = () => {
  return (
    <section className="relative bg-[rgb(19,19,24)] h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6804084/pexels-photo-6804084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-fixed"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-screen px-6 md:px-20 text-white overflow-y-auto space-y-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ecquint IT Solutions
          </h1>
          <p className="mt-4 text-lg">
            At Ecquint IT Solutions, we specialize in delivering cutting-edge
            technology solutions that empower businesses to scale, innovate,
            and thrive in the digital landscape. With expertise in software
            development, cloud computing, cybersecurity, and IT consulting, we
            help organizations optimize their operations and enhance security.
          </p>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg">
            Our tailored solutions ensure that businesses remain competitive in
            an ever-evolving technological environment. Whether you're looking
            to develop custom software, secure your IT infrastructure, or
            migrate to the cloud, our team of experts is here to support you
            every step of the way.
          </p>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg">
            Partner with us to transform your IT capabilities and drive success
            in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
