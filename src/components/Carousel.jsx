import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel(props) {
  const { carouselBottom, carouselTop, detailImages } = props;

  let images = carouselBottom || carouselTop || detailImages;

  if (images) {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
        }}
        pagination={!detailImages ? { clickable: true } : undefined}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="w-full h-full object-cover object-right-top"
                  src={item}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } else {
    return <div>Gösterilecek resim yok.</div>;
  }
}
