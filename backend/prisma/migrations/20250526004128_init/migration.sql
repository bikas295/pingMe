-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
