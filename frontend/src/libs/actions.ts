'use server'

import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { toast } from "sonner";

export const addItemToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) => {
  const session = await getServerSession();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shopping-carts/add-product?email=${session?.user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, quantity }),
    });
    const data = await response.json();

    if (response.ok) revalidateTag('shopping-cart');

    toast('Product added to cart')

    return data;
  } catch (error) {
    console.log(error);
  }
}

export const removeItemFromCart = async ({
  productId,
}: {
  productId: string;
}) => {
  const session = await getServerSession();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shopping-carts/remove-product?email=${session?.user.email}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();

    if (response.ok) revalidateTag('shopping-cart');

    return data;
  } catch (error) {
    console.log(error);
  }
}