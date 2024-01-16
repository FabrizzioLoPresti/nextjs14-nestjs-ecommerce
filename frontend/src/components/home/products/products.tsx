import Link from 'next/link';
import { IconEyeSearch } from '@tabler/icons-react';
import { ProductType } from '@/types/types';
import Slider from './slider';

type Props = {};

const fetchProducts = async () => {
  // Loading and Error Pages
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const data = await res.json();
  return data;
};

const Products = async (props: Props) => {
  const products: ProductType[] = await fetchProducts();

  return (
    <main className="screens my-24 flex flex-col">
      <h2 className="xl:text-center font-bold text-4xl xl:text-6xl mb-6">
        Our Products
      </h2>

      <div className="w-full">
        <Slider products={products} />
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
