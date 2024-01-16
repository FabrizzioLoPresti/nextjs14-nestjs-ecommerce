import Image from 'next/image';
import Link from 'next/link';
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from '@tabler/icons-react';
import { ProductType } from '@/types/types';

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <article className="w-fit max-w-[300px] h-[460px] flex flex-col justify-between bg-zinc-500 overflow-hidden rounded-md shadow-md mx-auto">
      <Link
        href={`/products/${product?.id}`}
        className="block w-80 h-[460px] overflow-hidden"
      >
        <Image
          src="/img/grid/voice_assistants.webp"
          alt="placeholder"
          width={320}
          height={320}
          className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </Link>
      <div className="p-4 flex flex-col gap-y-4 h-full justify-between">
        <Link href={`/products/${product?.id}`}>
          <h3 className="text-lg font-bold text-zinc-900 text-wrap border-l-2 pl-4 border-l-zinc-100">
            {product?.name}
          </h3>
        </Link>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row justify-between">
            <p className="text-zinc-300 font-bold">${product?.list_price}</p>
            <button>
              <IconHeart width={24} height={24} className="text-zinc-300" />
            </button>
          </div>
          <button className="button w-full flex flex-row gap-x-2 items-center justify-center">
            <IconShoppingCart width={24} height={24} />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
