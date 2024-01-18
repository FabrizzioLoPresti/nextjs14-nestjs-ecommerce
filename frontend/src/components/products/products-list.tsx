import ProductCard from '@/components/products/product-card';
import { ProductType } from '@/types/types';
import { fetchProducts } from '@/libs/data';

type Props = {};

const ProductsList = async (props: Props) => {
  const products: ProductType[] = await fetchProducts(1, 20);

  return (
    <div className="w-full grid lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
