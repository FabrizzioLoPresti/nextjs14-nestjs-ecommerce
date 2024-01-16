import Image from 'next/image';
import { ProductType } from '@/types/types';
import BreadcrumbCategory from '@/components/products/breadcrumb-category';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  });
  const data = await res.json();
  return data;
};

const ProductPage = async (props: Props) => {
  const product: ProductType = await fetchProduct(props.params.id);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row gap-12">
      <Image
        src="/img/grid/voice_assistants.webp"
        width={600}
        height={400}
        alt="Product"
        className="w-full lg:w-1/2 h-fit object-cover object-center"
      />

      <div>
        <BreadcrumbCategory category={product.Categories} />
        <h1 className="font-bold text-4xl mt-4">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-600">Price: ${product.list_price}</p>
        <button className="button mt-4">Add to cart</button>
      </div>
    </section>
  );
};

export default ProductPage;
