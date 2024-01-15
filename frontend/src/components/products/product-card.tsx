import Image from 'next/image';
import Link from 'next/link';
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingCart,
} from '@tabler/icons-react';

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <article className="w-fit max-w-[300px] min-h-[400px] max-h-[420px] flex flex-col justify-between bg-zinc-500 overflow-hidden rounded-md shadow-md mx-auto">
      <Link href="/products/1" className="block w-80 h-[460px] overflow-hidden">
        <Image
          src="/img/grid/voice_assistants.webp"
          alt="placeholder"
          width={320}
          height={320}
          className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </Link>
      <div className="p-4 flex flex-col gap-y-4 h-full justify-between">
        <Link href="/products/1">
          <h3 className="text-lg font-bold text-zinc-900 text-wrap border-l-2 pl-4 border-l-zinc-100">
            Product Name Name Name Name Name
          </h3>
        </Link>

        <div className="flex flex-row justify-between">
          <p className="text-zinc-300 font-bold">$123</p>
          <button>
            <IconHeart width={24} height={24} className="text-zinc-300" />
          </button>
        </div>
        <button className="button w-full flex flex-row gap-x-2 items-center justify-center">
          <IconShoppingCart width={24} height={24} />
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
