import React, { Suspense } from 'react'
const Hero = React.lazy(() => import('./components/hero'));
const Services = React.lazy(() => import('./components/services'));
const WebDevCourse = React.lazy(() => import('./components/web-dev-course'));
const Whychooseus = React.lazy(() => import('./components/why-us'));
const AllCourses = React.lazy(() => import('./components/all-courses'));
const Blog = React.lazy(() => import('./components/blog'));
const Testimonials = React.lazy(() => import('./components/testimonials'));
const Faqs = React.lazy(() => import('./components/faqs'));
const Footer = React.lazy(() => import('./components/footer'));
const LandingPageLazyLoading = () => {
  return (

   
    
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Services />
        <WebDevCourse />
        <Whychooseus />
        <AllCourses />
        <Blog />
        <Testimonials />
        <Faqs />
        <Footer />
  </Suspense>
 
  )
}

export default LandingPageLazyLoading