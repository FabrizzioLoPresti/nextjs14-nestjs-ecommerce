/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `ShoppingCarts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShoppingCarts_user_id_key" ON "ShoppingCarts"("user_id");
