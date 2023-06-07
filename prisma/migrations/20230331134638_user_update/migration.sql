/*
  Warnings:

  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_confirm` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_admin` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `password_confirm` VARCHAR(191) NOT NULL,
    MODIFY `first_name` VARCHAR(191) NULL,
    MODIFY `last_name` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `is_admin` BOOLEAN NOT NULL DEFAULT false;
