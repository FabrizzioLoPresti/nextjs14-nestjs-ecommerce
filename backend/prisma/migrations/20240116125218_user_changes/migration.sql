/*
  Warnings:

  - You are about to drop the column `categoriesId` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "categoriesId";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "password" DROP NOT NULL;
