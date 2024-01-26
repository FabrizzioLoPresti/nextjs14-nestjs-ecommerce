import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { fetchShoppingCart } from '@/libs/data';
import ItemCart from '@/components/dashboard/item-cart';

type Props = {};

export default async function DashboardPage({}: Props) {
  const session = await getServerSession();
  const shoppingCart = await fetchShoppingCart(session?.user?.email ?? '');

  if (!session) {
    redirect('/');
  }

  return (
    <div>
      <p className="text-xl">Hi {session?.user?.name ?? 'there'}!</p>
      <h1 className="text-3xl mt-4">Shopping Cart</h1>
      {shoppingCart.ShoppingCartDetails &&
      shoppingCart.ShoppingCartDetails.length > 0 ? (
        shoppingCart.ShoppingCartDetails.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))
      ) : (
        <p className="text-xl">Your cart is empty</p>
      )}
    </div>
  );
}
