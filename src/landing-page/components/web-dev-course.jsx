import React from 'react';
import DrawerDialog from './drawer-dialog';
import { Button } from '@/components/ui/button';

const content = {
  title: "Web Development Course",
  description: `
   <p><strong>Course Duration: 7 months</strong></p>
  <p><strong>Sessions Duration: 200+ hrs</strong></p>
  <p>Features:</p>
  <ul>
    <li>Weekly Assignments/Quizzes: Regular assessments to track your progress.</li>
    <li>1-1 Counselling: Personalized guidance to help you excel.</li>
    <li>Workshops: Hands-on learning sessions to reinforce concepts.</li>
    <li>Doubt Sessions: Clear your queries with dedicated doubt-solving classes.</li>
    <li>Capstone Project: Apply your learning in a comprehensive final project.</li>
    <li>Career Guidance: Expert advice to shape your career path.</li>
    <li>Placement Opportunities: Get assistance with internship opportunities.</li>
    <li>Price: INR 18,900</li>
    <li>No Cost EMI Option Available: INR 2,700 per month</li>
  </ul>
  `,
  buttonText: "View Details",
  imageAlt: "chart",
  imageSrc: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

const WebDevCourse = () => {
  return (
    <>
      <section id="webdev" className="py-16 lg:py-20 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8 ">
          <div className="flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
            <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                {content.title}
              </h2>
              {/* <p className="text-gray-600"> */}
             
                {/* {content.description}
              </p> */}
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: content.description }}></div>
              <div className="pt-1">
                <DrawerDialog triggerButton={<Button variant="default" size="sm">{content.buttonText}</Button>} />
              </div>
            </div>
            <div className="flex-none w-full md:max-w-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-10"></div>
              <img
                alt={content.imageAlt}
                src={content.imageSrc}
                width={632}
                height={285}
                decoding="async"
                data-nimg={1}
                className="w-full shadow-lg rounded-lg border transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevCourse;
