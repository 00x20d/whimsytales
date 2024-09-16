/*
  Warnings:

  - You are about to drop the column `moral` on the `Story` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Story" DROP COLUMN "moral",
ADD COLUMN     "moral_id" UUID;

-- CreateTable
CREATE TABLE "Moral" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Moral_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_moral_id_fkey" FOREIGN KEY ("moral_id") REFERENCES "Moral"("id") ON DELETE SET NULL ON UPDATE CASCADE;
