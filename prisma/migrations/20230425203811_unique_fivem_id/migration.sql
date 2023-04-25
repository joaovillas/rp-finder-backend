/*
  Warnings:

  - A unique constraint covering the columns `[fivem_id]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Server_fivem_id_key" ON "Server"("fivem_id");
