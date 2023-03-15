/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "discord_channel" TEXT NOT NULL,
    "contact" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Server_id_key" ON "Server"("id");
