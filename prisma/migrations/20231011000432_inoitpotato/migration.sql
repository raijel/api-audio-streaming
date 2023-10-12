/*
  Warnings:

  - You are about to drop the column `title` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the `_GenreToSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlaylistToSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GenreToSong" DROP CONSTRAINT "_GenreToSong_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToSong" DROP CONSTRAINT "_GenreToSong_B_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToSong" DROP CONSTRAINT "_PlaylistToSong_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToSong" DROP CONSTRAINT "_PlaylistToSong_B_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "title",
DROP COLUMN "year";

-- DropTable
DROP TABLE "_GenreToSong";

-- DropTable
DROP TABLE "_PlaylistToSong";
