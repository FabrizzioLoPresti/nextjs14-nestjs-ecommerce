import { Suspense } from 'react';
import Link from 'next/link';
import { IconEyeSearch } from '@tabler/icons-react';
import SliderServer from './slider-server';
import SliderSkeleton from './slider-skeleton';

type Props = {};

const Products = async (props: Props) => {
  return (
    <main className="screens my-24 flex flex-col">
      <h2 className="xl:text-center font-bold text-4xl xl:text-6xl mb-6">
        Our Products
      </h2>

      <div className="w-full">
        <Suspense fallback={<SliderSkeleton />}>
          <SliderServer />
        </Suspense>
      </div>

      <Link
        href={`/products`}
        className="button flex flex-row gap-x-2 items-center self-center mt-8"
      >
        <IconEyeSearch size={24} />
        See all products
      </Link>
    </main>
  );
};

export default Products;
