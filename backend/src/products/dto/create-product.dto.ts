export class CreateProductDto {
  name: string;
  description?: string;
  images_url: string[];
  list_price: number;
  stock: number;
  category_id: string;
}
