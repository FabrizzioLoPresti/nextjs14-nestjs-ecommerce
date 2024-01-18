import { Suspense } from 'react';
import ProductInfo from '@/components/products/product-info';
import ProductInfoSkeleton from '@/components/products/product-info-skeleton';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ params: { id } }: Props) => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row gap-12">
      <Suspense fallback={<ProductInfoSkeleton />}>
        <ProductInfo id={id} />
      </Suspense>
    </section>
  );
};

export default ProductPage;
