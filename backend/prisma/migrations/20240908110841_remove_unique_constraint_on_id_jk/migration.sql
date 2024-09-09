-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(50) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JenisKdrt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FaktorKdrt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `id_jk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DasarHukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `undangUndang` VARCHAR(191) NOT NULL,
    `pasal` INTEGER NOT NULL,
    `ayat` INTEGER NOT NULL,
    `isi` VARCHAR(191) NOT NULL,
    `id_jk` INTEGER NOT NULL,

    INDEX `DasarHukum_id_jk_idx`(`id_jk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prosedur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prosedur` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Konsul` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` INTEGER NOT NULL,
    `id_prosedur` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jawaban` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pertanyaan` VARCHAR(191) NOT NULL,
    `id_fk` INTEGER NOT NULL,
    `id_konsul` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saran` VARCHAR(191) NOT NULL,
    `id_jk` INTEGER NOT NULL,

    UNIQUE INDEX `Saran_id_jk_key`(`id_jk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FaktorKdrt` ADD CONSTRAINT `FaktorKdrt_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `JenisKdrt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DasarHukum` ADD CONSTRAINT `DasarHukum_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `JenisKdrt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Konsul` ADD CONSTRAINT `Konsul_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Konsul` ADD CONSTRAINT `Konsul_id_prosedur_fkey` FOREIGN KEY (`id_prosedur`) REFERENCES `Prosedur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jawaban` ADD CONSTRAINT `Jawaban_id_fk_fkey` FOREIGN KEY (`id_fk`) REFERENCES `FaktorKdrt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Jawaban` ADD CONSTRAINT `Jawaban_id_konsul_fkey` FOREIGN KEY (`id_konsul`) REFERENCES `Konsul`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saran` ADD CONSTRAINT `Saran_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `JenisKdrt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
