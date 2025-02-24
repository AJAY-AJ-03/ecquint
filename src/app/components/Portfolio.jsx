import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[rgb(19,19,24)] text-gray-200">
      {/* Header */}
      <header className=" text-white py-6 text-center text-3xl font-bold shadow-md">
        Portfolio & Case Studies
      </header>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
        {[{
          title: "Scalable E-commerce Platform",
          description: "We developed a scalable e-commerce platform to help a retail business streamline operations, integrate secure payment gateways, and enhance customer experience.",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
        }, {
          title: "Cloud Migration for Finance",
          description: "Optimized system performance and reduced operational costs by transitioning a financial services company to a secure cloud infrastructure.",
          image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        }, {
          title: "Healthcare Cybersecurity",
          description: "Implemented robust cybersecurity enhancements to protect sensitive patient data while ensuring compliance with HIPAA and industry standards.",
          image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }].map((item, index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden text-center p-4">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold my-3 text-white">{item.title}</h2>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Thought Leadership Section */}
      <section className="bg-[rgb(19,19,24)] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Insights & Thought Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: "AI in Business Innovation",
              description: "Discover how AI is transforming business landscapes and unlocking new opportunities.",
              icon: "🤖"
            }, {
              title: "Best Practices for Cloud Security",
              description: "Protect your cloud infrastructure with our expert security insights.",
              icon: "☁️"
            }, {
              title: "Future-Proof IT Strategy",
              description: "Learn the key strategies for building scalable and robust IT systems.",
              icon: "🚀"
            }].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700"
          >

            {/* className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105" */}
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;