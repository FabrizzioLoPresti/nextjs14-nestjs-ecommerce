import { redirect } from 'next/navigation';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { fetchShoppingCart } from '@/libs/data';
import { ShoppingCartType } from '@/types/types';
import ItemCart from '@/components/dashboard/item-cart';

type Props = {};

export default async function DashboardPage({}: Props) {
  const session = await getServerSession();
  const shoppingCart: ShoppingCartType = await fetchShoppingCart(
    'fabrizziolopresti1999@gmail.com',
  );

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <p className="">Hi {session?.user?.name ?? 'there'}!</p>
      <h1 className="text-2xl">Shopping Cart</h1>
      {shoppingCart.ShoppingCartDetails.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
    </div>
  );
}
