/*
  Warnings:

  - You are about to drop the column `categorySlug` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `posts` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_categorySlug_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userEmail_fkey";

-- DropIndex
DROP INDEX "categories_slug_key";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "categorySlug",
DROP COLUMN "userEmail",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
