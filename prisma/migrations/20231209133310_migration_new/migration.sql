/*
  Warnings:

  - You are about to drop the column `clerkUserkId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `clerkUserId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_clerkUserkId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "clerkUserkId",
ADD COLUMN     "clerkUserId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_clerkUserId_fkey" FOREIGN KEY ("clerkUserId") REFERENCES "users"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;
