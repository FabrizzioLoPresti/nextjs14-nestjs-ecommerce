'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '@/components/products/product-card';
import 'swiper/css';

type Props = {};

const Slider = (props: Props) => {
  return (
    <Swiper
      className="mySwiper mt-2"
      slidesPerView="auto"
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5,
        disableOnInteraction: false,
      }}
      speed={2500}
      modules={[Autoplay]}
    >
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
