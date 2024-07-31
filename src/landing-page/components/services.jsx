import React from 'react';
const services = [
  {
    title: 'Education to Students',
    description: 'Comprehensive web development courses designed to equip students with industry-relevant skills.',
    icon: '📘',
  },
  {
    title: 'Web-App Services',
    description: ' Custom web application development to transform your business ideas into reality.',
    icon: '👩‍🏫',
  },
  {
    title: 'Hire Developers',
    description: 'Connect with top-tier developers to strengthen your team and achieve your project goals.',
    icon: '🎓',
  },
  {
    title: 'Collaboration with Educational Institutes',
    description: 'Partner with us to enhance your curriculum and provide students with real-world skills.',
    icon: '💻',
  },
];
const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-gray-100 rounded-lg">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 ">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <p className="text-gray-600 mb-12">Discover how we can help you achieve your learning and career goals.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
