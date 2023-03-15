/*
  Warnings:

  - A unique constraint covering the columns `[discord_channel]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Server_discord_channel_key" ON "Server"("discord_channel");
