'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCardSkeleton from '@/components/products/product-card-skeleton';
import 'swiper/css';

type Props = {};

const SliderSkeleton = () => {
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
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
      <SwiperSlide className="!w-auto mr-4">
        <ProductCardSkeleton />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSkeleton;
