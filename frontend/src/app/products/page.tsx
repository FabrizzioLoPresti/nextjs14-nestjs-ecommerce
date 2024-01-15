import ProductsList from '@/components/products/products-list';
import Sidebar from '@/components/products/sidebar';

type Props = {};

export default function ProductsPage({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-24">
      <Sidebar />
      <ProductsList />
    </div>
  );
}
