import React from "react";
import PlacementPartners from "./placement-partners";
import HeroImage from "../../assets/images/hero-image.webp"
const Hero = () => {
  return (
    <section id="home" className="relative bg-white mt-24  md:py-16 py-16  overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8  ">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 md:pr-12 lg:pr-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Building Skills, <br className="hidden lg:inline" />
            Shaping Futures
            </h1>
            <p className="text-lg text-gray-600 mb-6">
            Join us on a transformative journey where practical skills meet real-world applications. 
            Our expert-led courses in web development provide you with the tools and knowledge to excel 
            in the tech industry. Start today and take the first step towards a successful career in technology.

            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
  <img
    src={HeroImage}
    className="rounded-lg shadow-lg"
    alt="Hero Image"
    width="100%"
    height="auto"
  />
</div>
        </div>
      </div>
      {/* <PlacementPartners /> */}
    </section>
  );
};

export default Hero;
