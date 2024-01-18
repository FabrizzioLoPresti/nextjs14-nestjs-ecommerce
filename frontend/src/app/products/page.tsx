import { Suspense } from 'react';
import ProductsList from '@/components/products/products-list';
import ProductsListSkeleton from '@/components/products/products-list-skeleton';
import Sidebar from '@/components/products/sidebar';

type Props = {};

export default function ProductsPage({}: Props) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-y-4 lg:gap-x-24">
      <Sidebar />
      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
