import ProductCard from '@/components/products/product-card';

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <div className="w-full grid lg:grid-cols-3 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsList;
