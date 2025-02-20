import Slider from "react-slick";
import Section from "./Section";
import { testimonialsData } from "../assets";

const Testimonials = () => {
  const setting = {
    dots: true,
    arrows: true, // Keep arrows enabled for larger screens
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true, // Keep arrows for large screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true, // Keep arrows for tablets and larger screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows on mobile devices
        },
      },
    ],
  };

  return (
    <Section id="testimonials">
      <div className="py-14 mb-10">
        <div className="container">
          <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
            <h1 className="uppercase font-semibold text-white">
              Our Testimonials
            </h1>
            <p className="font-semibold text-3xl text-white">
              What our customers have to say..
            </p>
          </div>

          <div>
            <Slider {...setting}>
              {testimonialsData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                      {/* Upper section */}
                      <div className="flex justify-start items-center gap-5">
                        {/* <img
                          src={item.img}
                          alt=""
                          className="w-16 h-16 rounded-full"
                        /> */}
                        <div>
                          <p className="text-xl font-bold text-white">
                            {item.name}
                          </p>
                          <p className="text-white">{item.name}</p>
                        </div>
                      </div>
                      {/* Bottom section */}
                      <div className="py-6 space-y-4">
                        <p className="text-sm text-white">{item.review}</p>
                        <p className="text-yellow-500">{item.stars}</p>{" "}
                        {/* Render dynamic stars */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
