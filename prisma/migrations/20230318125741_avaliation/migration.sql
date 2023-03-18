-- CreateTable
CREATE TABLE "ServerAvaliation" (
    "id" TEXT NOT NULL,
    "serverId" TEXT,
    "userId" TEXT,
    "avaliation" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerAvaliation_id_key" ON "ServerAvaliation"("id");

-- AddForeignKey
ALTER TABLE "ServerAvaliation" ADD CONSTRAINT "ServerAvaliation_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServerAvaliation" ADD CONSTRAINT "ServerAvaliation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
