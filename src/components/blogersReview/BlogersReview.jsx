import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import { EffectCreative, Autoplay } from "swiper";
import Bloger from "./Bloger";
const BlogersReview = ({ blogersData }) => {
  return (
    <>
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        loop={true}
        autoHeight={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCreative, Autoplay]}
        className={`mySwiper w-full md:w-[80%] blogers  cursor-pointer`}
      >
        {blogersData.map((bloger) => (
          <SwiperSlide
            className={`w-full blogers card-gradient rounded-xl`}
            key={bloger.name}
          >
            <Bloger bloger={bloger} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogersReview;
