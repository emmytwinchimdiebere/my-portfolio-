/*
  Warnings:

  - You are about to drop the column `clerUserkId` on the `posts` table. All the data in the column will be lost.
  - The primary key for the `user_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `user_roles` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `users` table. All the data in the column will be lost.
  - Added the required column `clerkUserkId` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkUserId` to the `user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_clerUserkId_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_userId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "clerUserkId",
ADD COLUMN     "clerkUserkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_pkey",
DROP COLUMN "userId",
ADD COLUMN     "clerkUserId" TEXT NOT NULL,
ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("clerkUserId", "roleId");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bio",
ADD COLUMN     "userBio" TEXT;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_clerkUserId_fkey" FOREIGN KEY ("clerkUserId") REFERENCES "users"("clerkUserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_clerkUserkId_fkey" FOREIGN KEY ("clerkUserkId") REFERENCES "users"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;
