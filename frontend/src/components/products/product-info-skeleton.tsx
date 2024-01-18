import { Skeleton } from '@nextui-org/react';

type Props = {};

const ProductInfoSkeleton = (props: Props) => {
  return (
    <>
      <Skeleton className="flex rounded-md w-[320px] h-[210px] md:w-[575px] md:h-[380px] lg:w-[780px] lg:h-[220px] xl:w-[1000px] xl:h-[300px] 2xl:w-[1400px] 2xl:h-[425px]" />
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/6 rounded-lg" />
        <Skeleton className="h-3 w-5/6 rounded-lg" />
        <Skeleton className="h-3 w-2/6 rounded-lg" />
        <Skeleton className="h-3 w-1/6 rounded-lg" />
      </div>
    </>
  );
};

export default ProductInfoSkeleton;
