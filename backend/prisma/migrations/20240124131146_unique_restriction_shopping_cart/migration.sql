/*
  Warnings:

  - A unique constraint covering the columns `[shopping_cart_id,product_id]` on the table `ShoppingCartDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShoppingCartDetails_shopping_cart_id_product_id_key" ON "ShoppingCartDetails"("shopping_cart_id", "product_id");
