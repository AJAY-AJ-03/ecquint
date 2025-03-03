import React from "react";
import { FaRobot, FaCloud, FaRocket } from "react-icons/fa"; // Importing icons

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Scalable E-commerce Platform",
      description:
        "We developed a scalable e-commerce platform to help a retail business streamline operations, integrate secure payment gateways, and enhance customer experience.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    },
    {
      title: "Cloud Migration for Finance",
      description:
        "Optimized system performance and reduced operational costs by transitioning a financial services company to a secure cloud infrastructure.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Healthcare Cybersecurity",
      description:
        "Implemented robust cybersecurity enhancements to protect sensitive patient data while ensuring compliance with HIPAA and industry standards.",
      image:
        "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const insights = [
    {
      title: "AI in Business Innovation",
      description: "Discover how AI is transforming business landscapes and unlocking new opportunities.",
      icon: <FaRobot className="text-purple-500 w-12 h-12" />,
    },
    {
      title: "Best Practices for Cloud Security",
      description: "Protect your cloud infrastructure with our expert security insights.",
      icon: <FaCloud className="text-blue-500 w-12 h-12" />,
    },
    {
      title: "Future-Proof IT Strategy",
      description: "Learn the key strategies for building scalable and robust IT systems.",
      icon: <FaRocket className="text-green-500 w-12 h-12" />,
    },
  ];

  return (
    <div className="min-h-screen  text-gray-200">
      {/* Header */}
      <header className="text-white py-6 text-center text-3xl font-bold shadow-md">
        Portfolio & Case Studies
      </header>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-md" />
            <h2 className="text-xl font-semibold my-3 text-purple-700">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Thought Leadership Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Insights & Thought Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-[#F7F7F7] p-6 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:from-indigo-500 hover:to-blue-700 transform transition duration-300 hover:scale-105"
          >
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
