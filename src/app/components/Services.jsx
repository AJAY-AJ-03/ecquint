import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-16   text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">Our Services</h1>
        <p className=" mt-2 text-lg ">Innovative solutions tailored to your business needs</p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Web & Mobile App Development */}
        <div className="flex flex-col md:flex-row items-center mb-[10rem] gap-8 ">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[30rem] h-[20rem]">
              <img
                src="/media/web_mob.jpg"
                alt="Mobile Development"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-2xl font-semibold ">Web & Mobile App Development</h2>
            <p className=" mt-4 text-lg leading-relaxed text-justify">
              At <b className="font-black">Ecquint IT Solutions</b>, we offer a comprehensive suite of IT services designed to support businesses in achieving their strategic goals. Our <b className="font-black">software development</b> services provide custom-built applications that enhance efficiency and performance, ensuring seamless integration with existing systems. We also specialize in <b className="font-black">web and mobile application development</b>, creating user-friendly, feature-rich digital experiences that drive engagement and growth.
            </p>
          </div>
        </div>

        {/* Cloud Computing */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 mb-[10rem] gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[30rem] h-[20rem]">
              <img
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Cloud Computing"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-2xl font-semibold ">Cloud Computing</h2>
            <p className=" mt-4 text-lg leading-relaxed text-justify">
              For businesses looking to embrace cloud technology, our <b className="font-black">cloud computing solutions</b> provide secure, scalable, and cost-effective infrastructure management, enabling seamless migration and operational efficiency. In today’s digital landscape, security is paramount, which is why our <b className="font-black">cybersecurity and risk management services</b> help businesses safeguard their data, prevent cyber threats, and ensure compliance with industry regulations.
            </p>
          </div>
        </div>

        {/* IT consulting  */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8 mb-[10rem]">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[30rem] h-[20rem]">
              <img
                src="https://img.freepik.com/free-photo/people-working-html-codes_23-2150038851.jpg?ga=GA1.1.1935615609.1740207926&semt=ais_hybrid"
                alt="Mobile Development"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-2xl font-semibold ">IT consulting </h2>
            <p className=" mt-4 text-lg leading-relaxed text-justify">
            Our IT consulting and digital transformation services provide strategic guidance to businesses, helping them adopt emerging technologies to enhance productivity and competitiveness. By leveraging cutting-edge solutions, we enable organizations to streamline operations, drive innovation, and respond effectively to market demands. Whether it's cloud migration, AI integration, process automation, or data-driven decision-making, our experts work closely with businesses to create tailored digital strategies that ensure long-term success.            </p>
          </div>
        </div>

        {/* managed IT services*/}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[30rem] h-[20rem]">
              <img
                src="https://img.freepik.com/free-photo/teamwork-team-collaboration-connection-gear-organisation_53876-21147.jpg?ga=GA1.1.1935615609.1740207926&semt=ais_hybrid"
                alt=" managed IT services"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-2xl font-semibold ">Managed IT Services</h2>
            <p className=" mt-4 text-lg leading-relaxed text-justify">
            We also offer managed IT services, ensuring 24/7 monitoring, maintenance, and technical support to keep business operations running smoothly. Our managed IT services encompass a full suite of IT solutions, including real-time network monitoring, proactive threat detection, system performance optimization, and regular software updates.
            </p>
            <p  className=" mt-4 text-lg leading-relaxed text-justify">We specialize in providing businesses with a seamless IT experience by implementing robust backup solutions, disaster recovery planning, and end-to-end IT infrastructure management.</p>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Services;