'use client';

import { toast } from 'sonner';
import { ProductType } from '@/types/types';
import { addItemToCart } from '@/libs/actions';

type Props = {
  product: ProductType;
};

const AddToCartButton = ({ product }: Props) => {
  return (
    <button
      className="button mt-4"
      onClick={async () => {
        await addItemToCart({
          productId: product?.id ?? '',
          quantity: 1,
        });
        toast.success('Product added to cart');
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
