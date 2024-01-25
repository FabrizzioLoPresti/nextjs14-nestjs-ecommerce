export class CreateShoppingCartDto {
  id?: string;
  user_id: string;
  shopping_cart_details: {
    id?: string;
    shopping_cart_id?: string;
    product_id: string;
    quantity: number;
  }[];
}
