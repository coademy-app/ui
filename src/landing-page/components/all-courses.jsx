

const  AllCourses =  () => {
  const courses = [
      {
          title: "Website Development",
          description: "Our website development service offers end-to-end solutions for creating and launching professional and visually appealing websites.",
          features: [
              "Computers",
              "Health",
              "Reference"
          ]
      },
      {
          title: "Social Media Marketing",
          description: "Our social media marketing service helps businesses establish a strong online presence and engage with their target audience effectively.",
          features: [
              "Computers",
              "Health",
              "Reference"
          ]
      },
      {
          title: "Content Writing and Copywriting",
          description: "Our content writing and copywriting service offers high-quality and engaging content that captivates your audience and drives conversions.",
          features: [
              "Computers",
              "Health",
              "Reference"
          ]
      }
  ];

  return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 ">
                      Brand new
                  </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                      <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                          <defs>
                              <pattern id="fdca20a0-aeb4-4caf-ba1b-4351eee42363" x="0" y="0" width=".135" height=".30">
                                  <circle cx="1" cy="1" r=".7"></circle>
                              </pattern>
                          </defs>
                          <rect fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)" width="52" height="24"></rect>
                      </svg>
                      <span className="relative">All</span>
                  </span>
                  courses and the details
              </h2>
              <p className="text-base text-gray-700 md:text-lg">Features of each course:</p>
          </div>

          <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
              {courses.map((course, index) => (
                  <div key={index} className="flex flex-col sm:flex-row bg-[#eeeeee] border border-black p-[15px] rounded-3xl">
                      <div className="sm:mr-4">
                          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
                              <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                  <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                              </svg>
                          </div>
                      </div>
                      <div>
                          <h6 className="mb-2 font-semibold text-lg leading-5">{course.title}:</h6>
                          <p className="mb-3 text-sm text-gray-900">{course.description}</p>
                          <ul className="mb-4 -ml-1 space-y-2">
                              {course.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                      <span className="mr-1">
                                          <svg className="w-5 h-5 mt-px text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                                              <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                          </svg>
                                      </span>
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                          <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800">
                              Learn more
                          </a>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};


export default AllCourses