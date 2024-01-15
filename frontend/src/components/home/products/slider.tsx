'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '@/components/products/product-card';
import 'swiper/css';
import { ProductType } from '@/types/types';

type Props = {
  products: ProductType[];
};

const Slider = ({ products }: Props) => {
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
      {products.map((product) => (
        <SwiperSlide key={product.id} className="!w-auto mr-4">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
