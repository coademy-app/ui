import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const blogPosts = [
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 1",
    title: "Mastering the Art of Minimalism",
    description:
      "Discover the transformative power of minimalism and how it can simplify your life.",
  },
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 2",
    title: "The Power of Mindfulness",
    description:
      "Unlock the transformative benefits of mindfulness and learn to live in the present moment.",
  },
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 3",
    title: "Unleashing Your Creative Potential",
    description:
      "Discover practical strategies to unlock your creative superpowers and thrive.",
  },
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 4",
    title: "The Art of Effective Communication",
    description:
      "Enhance your interpersonal skills and learn to communicate with clarity and impact.",
  },
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 5",
    title: "The Science of Happiness",
    description:
      "Explore the latest research on happiness and learn how to cultivate a more fulfilling life.",
  },
  {
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blog Post 6",
    title: "The Future of Remote Work",
    description:
      "Explore the trends and insights shaping the future of remote work and flexible lifestyles.",
  },
];

const Blog = () => {
  return (
    <section id="blogs" className="py-16 lg:py-20 px-4 md:px-16">
      <div className="mx-auto px-10 md:px-0 text-gray-900">
        <div className="max-w-2xl text-center md:mx-auto">
          <h1 className="text-center tracking-tighter mb-4 text-3xl font-bold">
            Check out our Blogs
          </h1>
        </div>
        <div className="relative mt-12 flex justify-center">
          <div
            className="absolute m-auto blur-[160px] max-w-sm h-40 top-12 inset-x-0"
            
          />
          <div className="relative w-full max-w-screen-lg">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {blogPosts.map((post, index) => (
                  <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3 p-4">
                    <div className="bg-white rounded-lg border border-black p-4">
                      <a href="#" className="block">
                        <img
                          src={post.image}
                          alt={post.alt}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-black mb-2">
                            {post.title}
                          </h3>
                          <p className="line-clamp-2 text-gray-900">
                            {post.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
