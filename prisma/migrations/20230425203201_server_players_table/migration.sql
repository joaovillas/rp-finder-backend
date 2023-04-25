/*
  Warnings:

  - Added the required column `fivem_id` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Server" ADD COLUMN     "fivem_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ServerPlayers" (
    "id" TEXT NOT NULL,
    "totalPlayers" INTEGER NOT NULL DEFAULT 0,
    "serverId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerPlayers_id_key" ON "ServerPlayers"("id");

-- AddForeignKey
ALTER TABLE "ServerPlayers" ADD CONSTRAINT "ServerPlayers_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
