/*
  Warnings:

  - You are about to drop the column `tags` on the `Server` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Server" DROP COLUMN "tags";

-- CreateTable
CREATE TABLE "ServerTags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serverId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerTags_id_key" ON "ServerTags"("id");

-- AddForeignKey
ALTER TABLE "ServerTags" ADD CONSTRAINT "ServerTags_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
