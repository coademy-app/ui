import { useState, useEffect } from "react";
import DrawerDialog from "./drawer-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/ui/star-rating";

const WebDevCourse = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 9)),
  ); // Initialize to 9 days from now
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = startDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  const handleDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  return (
    <>
      <section id="webdev" className="py-24 lg:py-20 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 bg-gray-900 p-5 rounded-lg text-white">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image of web development course"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-10 md:p-10 justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex md:items-center justify-between md:flex-row flex-col">
                  <h1 className="text-3xl tracking-tighter font-bold">
                    Web Development Course
                  </h1>
                  <StarRating rating={5} />
                </div>
                <div>
                  <p className="text-sm tracking-tighter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi accusamus non aspernatur vel repellat ullam, dolorem
                    incidunt, totam at maxime sapiente error minus numquam
                    repellendus optio ea quisquam. Blanditiis, sapiente.
                  </p>
                  <div className="mt-4 text-base">
                    Next course starts in{" "}
                    <span className="font-bold tracking-tighter">
                      {remainingTime.days} days {remainingTime.hours} :{" "}
                      {remainingTime.minutes} : {remainingTime.seconds}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3 flex-col md:flex-row md:items-center mt-auto">
                <div className="flex space-x-2">
                  <Badge className="bg-white text-black hover:bg-gray-200">
                    Web
                  </Badge>
                  <Badge className="bg-white text-black hover:bg-gray-200">
                    MERN
                  </Badge>
                  <Badge className="bg-white text-black hover:bg-gray-200">
                    Development
                  </Badge>
                </div>
                <DrawerDialog
                  triggerButton={
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Learn More
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevCourse;
