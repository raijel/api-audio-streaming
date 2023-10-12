/*
  Warnings:

  - You are about to drop the column `url` on the `Song` table. All the data in the column will be lost.
  - Added the required column `public_id` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secure_url` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "url",
ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "secure_url" TEXT NOT NULL;
