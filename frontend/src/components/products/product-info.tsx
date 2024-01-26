import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchProduct } from '@/libs/data';
import BreadcrumbCategory from '@/components/products/breadcrumb-category';
import AddToCartButton from './add-cart-button';

type Props = {
  id: string;
};

const ProductInfo = async ({ id }: Props) => {
  const product = await fetchProduct(id);

  if (!product.id) {
    return notFound();
  }

  return (
    <>
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
        <AddToCartButton product={product} />
      </div>
    </>
  );
};

export default ProductInfo;
