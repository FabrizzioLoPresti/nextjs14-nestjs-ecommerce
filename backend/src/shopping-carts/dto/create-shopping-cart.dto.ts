export class CreateShoppingCartDto {
  user_id: string;
  shopping_cart_details: {
    product_id: string;
    quantity: number;
  }[];
}
