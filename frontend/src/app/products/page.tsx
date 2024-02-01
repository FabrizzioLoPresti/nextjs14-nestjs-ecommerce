import { Suspense } from 'react';
import ProductsList from '@/components/products/products-list';
import ProductsListSkeleton from '@/components/products/products-list-skeleton';
import Sidebar from '@/components/products/sidebar';

type Props = {
  searchParams: {
    sort: string;
    category: string;
  };
};

export default function ProductsPage({
  searchParams: { category, sort },
}: Props) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-4 lg:gap-x-24">
      <Sidebar />
      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductsList filters={{ category, sort }} />
      </Suspense>
    </div>
  );
}
