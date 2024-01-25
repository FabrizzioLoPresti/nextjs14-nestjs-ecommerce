'use client';

import Image from 'next/image';
import { Select, SelectItem } from '@nextui-org/react';
import { toast } from 'sonner';
import { IconTrash } from '@tabler/icons-react';
import { ShoppingCartDetailType } from '@/types/types';
import { addItemToCart, removeItemFromCart } from '@/libs/actions';

type Props = {
  item: ShoppingCartDetailType;
};

const quantities = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
  {
    label: '6',
    value: 6,
  },
  {
    label: '7',
    value: 7,
  },
  {
    label: '8',
    value: 8,
  },
  {
    label: '9',
    value: 9,
  },
  {
    label: '10',
    value: 10,
  },
];

const ItemCart = ({ item }: Props) => {
  return (
    <div key={item.id} className="flex flex-row gap-x-6 px-4 py-6">
      <Image
        src="/img/grid/voice_assistants.webp"
        alt="Product Image"
        width={200}
        height={200}
      />

      <div>
        <h2 className="text-xl">{item.Products.name}</h2>
        <p className="font-bold">${item.Products.list_price}</p>
        <div className="flex flex-row items-center gap-x-6 mt-2">
          <Select
            label="Select a quantity"
            className="w-80"
            defaultSelectedKeys={[item.quantity.toString()]}
            onChange={async (e) =>
              await addItemToCart({
                productId: item.Products.id ?? '',
                quantity: parseInt(e.target.value),
              })
            }
          >
            {quantities.map((q) => (
              <SelectItem key={q.value} value={q.value}>
                {q.label}
              </SelectItem>
            ))}
          </Select>
          <button
            className="button"
            onClick={async () => {
              await removeItemFromCart({
                productId: item.Products.id ?? '',
              });

              toast.error('Product removed from cart');
            }}
          >
            <IconTrash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
