/*
  Warnings:

  - You are about to drop the column `userBio` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "userBio",
ADD COLUMN     "bio" TEXT;
