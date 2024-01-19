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
  const data = await res.json();
  return data;
};

export const fetchProduct = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  });
  const data = await res.json();
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
  const data = await res.json();
  return data;
}