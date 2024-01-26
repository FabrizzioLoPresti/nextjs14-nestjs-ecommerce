import { getServerSession } from 'next-auth';
import ProductCard from '@/components/products/product-card';
import { fetchProducts } from '@/libs/data';

type Props = {};

const ProductsList = async (props: Props) => {
  const session = await getServerSession();
  const products = await fetchProducts(1, 20);

  return (
    <div className="w-full grid lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} session={session} />
      ))}
    </div>
  );
};

export default ProductsList;
