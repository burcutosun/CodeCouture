import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>
          <img
            className="w-full h-full object-cover object-right-top"
            src=".\assets\hero\shop-hero-1-product-slide-1.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="lg:w-full h-full object-cover object-right-top"
            src=".\assets\hero\shop-hero-1-product-slide-1.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
