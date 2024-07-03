import React from 'react';
import EasyToUse from '../../assets/circle-nodes-solid.svg';
import AwesomeDesign from '../../assets/laptop-file-solid.svg';
import EasyToCustomize from '../../assets/sailboat-solid.svg';
import AnyTimeSupport from '../../assets/wand-magic-sparkles-solid.svg';

const features = [
  {
    icon: <img src={EasyToUse} alt="Easy To Use" className='w-1/2' />,
    title: 'Easy To Use',
    description: 'Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.',
  },
  {
    icon: <img src={AwesomeDesign} alt="Awesome Design"   className='w-1/2' />,
    title: 'Awesome Design',
    description: 'Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.',
  },
  {
    icon: <img src={EasyToCustomize} alt="Easy To Customize"   className='w-1/2' />,
    title: 'Easy To Customize',
    description: 'Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum tincidunt rutrum.',
  },
  {
    icon: <img src={AnyTimeSupport} alt="Any Time Support"  className='w-1/2'   />,
    title: 'Any Time Support',
    description: 'Lorem ipsum dolor sit amet sitim consectetur elit. Vestibulum t...',
  },
];

const Whychooseus = () => {
  return (
    <section id="about" className="py-20 dark:bg-dark lg:pt-[120px]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Why Choose Coademy?
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Features
              </h2>
              <p className="dark:text-dark-6 text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/4">
              <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                <div className="absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-white text-white border border-black ">
                  {feature.icon}
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                  {feature.title}
                </h3>
                <p className="dark:text-dark-6 text-base text-body-color">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
