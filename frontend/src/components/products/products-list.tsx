import ProductCard from '@/components/products/product-card';
import { ProductType } from '@/types/types';

type Props = {};

const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  });
  const data = await res.json();
  return data;
};

const ProductsList = async (props: Props) => {
  const products: ProductType[] = await fetchProducts();

  return (
    <div className="w-full grid lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
