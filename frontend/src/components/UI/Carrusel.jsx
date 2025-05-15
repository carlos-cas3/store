import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  const images = [
      "../../assets/city1.png",
      "../../assets/city2.png",
      "../../assets/city3.png",
  ];

  return (
    <div className="w-full overflow-hidden ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500}}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-150" // ajusta la altura
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
