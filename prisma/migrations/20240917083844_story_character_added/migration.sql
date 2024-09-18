/*
  Warnings:

  - You are about to drop the column `password_hash` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "generation_prompt" TEXT,
ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'en';

-- AlterTable
ALTER TABLE "StoryPart" ADD COLUMN     "image_url" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password_hash",
ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "StoryCharacter" (
    "story_id" UUID NOT NULL,
    "character_id" UUID NOT NULL,
    "is_main" BOOLEAN NOT NULL,

    CONSTRAINT "StoryCharacter_pkey" PRIMARY KEY ("story_id","character_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoryCharacter" ADD CONSTRAINT "StoryCharacter_story_id_fkey" FOREIGN KEY ("story_id") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryCharacter" ADD CONSTRAINT "StoryCharacter_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
