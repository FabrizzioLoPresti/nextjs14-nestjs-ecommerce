-- DropForeignKey
ALTER TABLE "ShoppingCartDetails" DROP CONSTRAINT "ShoppingCartDetails_shopping_cart_id_fkey";

-- AddForeignKey
ALTER TABLE "ShoppingCartDetails" ADD CONSTRAINT "ShoppingCartDetails_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "ShoppingCarts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
