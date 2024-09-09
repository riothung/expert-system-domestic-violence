/*
  Warnings:

  - You are about to drop the column `id_jk` on the `saran` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_saran]` on the table `JenisKdrt` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_prosedur]` on the table `Konsul` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_prosedur` to the `JenisKdrt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_saran` to the `JenisKdrt` table without a default value. This is not possible if the table is not empty.
  - Made the column `id_prosedur` on table `konsul` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `konsul` DROP FOREIGN KEY `Konsul_id_prosedur_fkey`;

-- DropForeignKey
ALTER TABLE `saran` DROP FOREIGN KEY `Saran_id_jk_fkey`;

-- AlterTable
ALTER TABLE `jeniskdrt` ADD COLUMN `id_prosedur` INTEGER NOT NULL,
    ADD COLUMN `id_saran` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `konsul` MODIFY `id_prosedur` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `saran` DROP COLUMN `id_jk`;

-- CreateIndex
CREATE UNIQUE INDEX `JenisKdrt_id_saran_key` ON `JenisKdrt`(`id_saran`);

-- CreateIndex
CREATE UNIQUE INDEX `Konsul_id_prosedur_key` ON `Konsul`(`id_prosedur`);

-- AddForeignKey
ALTER TABLE `JenisKdrt` ADD CONSTRAINT `JenisKdrt_id_saran_fkey` FOREIGN KEY (`id_saran`) REFERENCES `Saran`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JenisKdrt` ADD CONSTRAINT `JenisKdrt_id_prosedur_fkey` FOREIGN KEY (`id_prosedur`) REFERENCES `Prosedur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Konsul` ADD CONSTRAINT `Konsul_id_prosedur_fkey` FOREIGN KEY (`id_prosedur`) REFERENCES `Prosedur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
