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
              Helping Startups Grow <br className="hidden lg:inline" />
              and Succeed
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="javascript:void(0)"
                className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-green-500"
              >
                Let's Get Started
              </a>
              <a
                href="javascript:void(0)"
                className="py-3 px-6 border border-gray-300 text-gray-700 font-semibold rounded-lg flex items-center transition duration-300 hover:text-gray-600 hover:bg-gray-100"
              >
                Get Access
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Over 200 successful deals
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
      <PlacementPartners />
    </section>
  );
};

export default Hero;
