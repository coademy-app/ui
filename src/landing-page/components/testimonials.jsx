import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import starYellow from "../../assets/star-yellow.svg";
import starBlack from "../../assets/star-black.svg";

const testimonialsData = [
  {
    quote:
      "We've been using Mailgo for almost a year now and have nothing but great things to say. It's super easy to set up campaigns and its reporting features are incredibly detailed.",
    name: "Mark Zuckerberg",
    title: "Founder of Meta",
    imageAlt: "Mark Zuckerberg",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
  {
    quote:
      "Mailgo has been a great addition to our email marketing strategy. It's so user-friendly, yet powerful and effective. I'm able to quickly create beautiful emails.",
    name: "Guillermo Rauch",
    title: "Founder of Vercel",
    imageAlt: "Guillermo Rauch",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 4,
  },
  {
    quote:
      "I highly recommend Mailgo for anyone looking for an easy-to-use and reliable email marketing tool! It's simple to use and has been a great help.",
    name: "Sidi Jeddou",
    title: "Founder of Float UI",
    imageAlt: "Sidi Jeddou",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
  {
    quote:
      "I've been using Mailgo for the past few months and I'm extremely impressed. The user interface is very intuitive, and I love the automated features.",
    name: "Ghazbel",
    title: "Founder of forceY",
    imageAlt: "Ghazbel",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 4,
  },
  {
    quote:
      "Mailgo is the best email marketing tool I've ever used. It's incredibly simple and intuitive to use, yet it offers a wide range of features and options.",
    name: "Ana Khan",
    title: "Founder of Larax",
    imageAlt: "Ana Khan",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
  {
    quote:
      "Mailgo is definitely the way to go when it comes to email marketing + I highly recommend it as an email marketing tool with AI support.",
    name: "Ahmed Khasem",
    title: "Founder of Let’s Code",
    imageAlt: "Ahmed Khasem",
    imageSrc:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stars: 5,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const yellowStars = rating;
    const blackStars = totalStars - yellowStars;
    const stars = [];

    for (let i = 0; i < yellowStars; i++) {
      stars.push(
        <img
          key={`star-yellow-${i}`}
          src={starYellow}
          alt="Yellow Star"
          className="w-4 h-4 object-cover"
        />,
      );
    }

    for (let i = 0; i < blackStars; i++) {
      stars.push(
        <img
          key={`star-black-${i}`}
          src={starBlack}
          alt="Black Star"
          className="w-4 h-4 object-cover"
        />,
      );
    }

    return stars;
  };

  return (
    <section
      id="testimonials"
      className="bg-gray-900 py-16 lg:py-24  px-4 md:px-16"
    >
      <div className="max-w-screen-xl mx-auto px-10 md:px-8 text-white ">
        <div className="max-w-2xl text-center md:mx-auto">
          <h2 className="text-white text-3xl font-semibold sm:text-4xl">
            Coademy is loved by the best founders around the world
          </h2>
        </div>
        <div className="relative mt-12 flex justify-center">
          <div
            className="absolute m-auto blur-[160px] max-w-sm h-40 top-12 inset-x-0"
            style={{
              background:
                "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
            }}
          />
          <div className="relative w-full max-w-screen-lg">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card
                        className="p-4 rounded-xl border border-black"
                        style={{
                          background: "#FFFFFF",
                          backgroundImage:
                            "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)",
                        }}
                      >
                        <CardContent className="flex flex-col justify-between gap-y-6 h-full">
                          <figure>
                            <blockquote className="line-clamp-2">
                              <p>{testimonial.quote}</p>
                            </blockquote>
                            <div className="flex items-center gap-x-4 mt-6">
                              <img
                                alt={testimonial.imageAlt}
                                srcSet={testimonial.imageSrc}
                                src={testimonial.imageSrc}
                                width={128}
                                height={128}
                                decoding="async"
                                data-nimg={1}
                                className="w-14 h-14 rounded-full object-cover"
                                loading="lazy"
                                style={{ color: "transparent" }}
                              />
                              <div>
                                <span className="block text-gray-900 font-semibold">
                                  {testimonial.name}
                                </span>
                                <span className="block text-sm mt-0.5">
                                  {testimonial.title}
                                </span>
                                <div className="flex mt-0.5">
                                  {renderStars(testimonial.stars)}
                                </div>
                              </div>
                            </div>
                          </figure>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
