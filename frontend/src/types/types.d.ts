export type ProductType = {
  id?: string;
  name: string;
  description?: string;
  images_url: string[];
  list_price: number;
  stock: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  Categories?: Category;
}

export type CategoryType = {
  id?: string;
  name: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}