"use client"
import Image from "next/image";
import { FaLightbulb, FaShieldAlt, FaExpandArrowsAlt, FaCog, FaCheckCircle } from 'react-icons/fa';


const AboutUs = () => {
  const pillars = [
    { title: 'Innovation', icon: <FaLightbulb />, description: 'Harnessing the latest advancements in technology to drive business transformation.' },
    { title: 'Security', icon: <FaShieldAlt />, description: 'Implementing robust cybersecurity solutions to protect data and infrastructure.' },
    { title: 'Scalability', icon: <FaExpandArrowsAlt />, description: 'Delivering IT solutions that grow with your business, ensuring future readiness.' },
    { title: 'Efficiency', icon: <FaCog />, description: 'Optimizing operations through seamless technology integration.' },
    { title: 'Reliability', icon: <FaCheckCircle />, description: 'Providing consistent, high-performance IT solutions businesses can trust.' }
  ];
  return (
    <section id="about" className="bg-[rgb(19,19,24)] min-h-screen mt-[100px] ">
      <div className="flex px-[100px]">
        <h1 className="text-4xl font-bold mb-9 text-white leading-tight">About Us</h1>
      </div>

      <div className="bg-[rgb(19,19,24)]  flex items-center">

        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">

          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Empowering Businesses Through Innovation & Technology
            </h1>
            <p className="mt-4 text-lg text-white leading-relaxed max-w-lg">
              At <span className="font-semibold text-blue-600">Ecquint IT Solutions</span>, we go beyond being just an IT service provider.
              We are your strategic technology partner, dedicated to driving digital transformation.
              Our expertise spans software development, cloud computing, cybersecurity, and IT consulting—helping businesses optimize operations, enhance security, and scale effectively in a dynamic digital world.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <Image
              src="https://www.efloz.com/_next/static/media/Untitled_design_4.e99bb29c.svg"
              alt="Technology Illustration"
              width={600}
              height={600}
              className="w-full max-w-lg"
            />
          </div>

        </div>
      </div>
      <div className="h-[300px] flex items-center justify-start px-[110px]">
        <div className="space-y-6 max-w-xl">
          {/* First Card */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r  to-red-500 rounded-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/119/119958.png" alt="Settings Icon" className="w-[100px] h-[50px]" />
            </div>
            <div>
              {/* <h3 className="text-lg font-bold">Say goodbye to inefficiencies</h3> */}
              <p className="text-white w-[450px]">
                "Ec" represents enterprise-class solutions designed to empower businesses with cutting-edge technology.
              </p>
            </div>
          </div>


          {/* Second Card */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r  to-red-500 rounded-lg">
              <img src="https://cdn-icons-png.flaticon.com/512/119/119958.png" alt="Settings Icon" className="w-[100px] h-[50px]" />
            </div>
            <div>
              {/* <h3 className="text-lg font-bold">Say goodbye to inefficiencies</h3> */}
              <p className="text-white w-[450px]">
                "Quint" is derived from "Quintessence," symbolizing excellence, innovation, and reliability—the essential elements of superior IT services.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex w-[1000px] items-center px-[70px]">
        <div className="bg-[rgb(19,19,24)] rounded-2xl p-8 max-w-3xl text-justify ">
          <h3 className="text-2xl font-semibold text-white leading-relaxed">
            Together,
            <span className="text-blue-600 font-bold"> Ecquint</span> represents
            <span className="italic"> "The Quintessence of Innovation & Technology"</span>—a commitment to delivering
            <span className="text-blue-500 font-medium"> future-ready IT solutions</span> that drive
            <span className="text-green-600 font-medium"> long-term business success.</span>
          </h3>
        </div>
      </div>

      <section className="bg-[tranparent] text-gray-900 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl text-white font-extrabold mb-6">The Five Pillars of Our Success</h2>
        <p className="text-lg text-white mb-12">
          Inspired by the Latin root of "Quint" (meaning five), our approach is built on five core principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-300 hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-500 text-5xl mb-5">{pillar.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    </section>

  );
};

export default AboutUs;
