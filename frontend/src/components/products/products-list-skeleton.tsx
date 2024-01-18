import ProductCardSkeleton from './product-card-skeleton';

type Props = {};

const ProductsListSkeleton = (props: Props) => {
  return (
    <div className="w-full grid lg:grid-cols-3 gap-6">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};

export default ProductsListSkeleton;
