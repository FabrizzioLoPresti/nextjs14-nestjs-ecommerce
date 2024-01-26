import { CategoryType, ProductType, ShoppingCartType } from "@/types/types";

export const fetchCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: 'no-cache',
    next: {
      tags: ['categories'],
    },
  });
  const data: CategoryType[] = await res.json();
  return data;
}

export const fetchProducts = async (page: number, pageSize: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}&pageZise=${pageSize}`,
    {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    },
  );
  const data: ProductType[] = await res.json();
  return data;
};

export const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  });
  const data: ProductType = await res.json();
  return data;
};

export const fetchShoppingCart = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shopping-carts?email=${email}`,
    {
      cache: 'no-cache',
      next: {
        tags: ['shopping-cart'],
      },
    },
  );
  const data: ShoppingCartType = await res.json();
  return data;
}