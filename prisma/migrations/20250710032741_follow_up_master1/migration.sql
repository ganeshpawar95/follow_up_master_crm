/*
  Warnings:

  - You are about to drop the column `company` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `address` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadSource` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadType` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nextReminder` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Lead` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "company",
DROP COLUMN "status",
DROP COLUMN "tags",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "leadSource" TEXT NOT NULL,
ADD COLUMN     "leadType" TEXT NOT NULL,
ADD COLUMN     "nextReminder" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
