-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2024 at 04:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skripsi`
--

-- --------------------------------------------------------

--
-- Table structure for table `dasarhukum`
--

CREATE TABLE `dasarhukum` (
  `id` int(11) NOT NULL,
  `undangUndang` varchar(191) NOT NULL,
  `pasal` int(11) NOT NULL,
  `ayat` int(11) NOT NULL,
  `isi` longtext NOT NULL,
  `id_jk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dasarhukum`
--

INSERT INTO `dasarhukum` (`id`, `undangUndang`, `pasal`, `ayat`, `isi`, `id_jk`) VALUES
(11, 'UU No. 23 Tahun 2004', 44, 1, 'Setiap orang yang melakukan perbuatan kekerasan fisik dalam lingkup rumah tangga sebagaimana dimaksud dalam Pasal 5 huruf a dipidana dengan pidana penjara paling lama 5 (lima) tahun atau dend', 5),
(12, 'UU No. 23 Tahun 2004', 44, 2, 'Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) mengakibatkan korban mendapat jatuh sakit atau luka berat, dipidana dengan pidana penjara paling lama 10 (sepuluh) tahun atau denda pali', 5),
(13, 'UU No. 23 Tahun 2004', 44, 3, 'Dalam hal perbuatan sebagaimana dimaksud pada ayat (2) mengakibatkan matinya korban, dipidana dengan pidana penjara paling lama 15 (lima belas) tahun atau denda paling banyak Rp 45.000.000,00', 5),
(14, 'UU No. 23 Tahun 2004', 44, 4, 'Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) dilakukan oleh suami terhadap isteri atau sebaliknya yang tidak menimbulkan penyakit atau halangan untuk menjalankan pekerjaan jabatan a', 5),
(15, 'UU No. 23 Tahun 2004', 45, 1, 'Setiap orang yang melakukan perbuatan kekerasan psikis dalam lingkup rumah tangga sebagaimana dimaksud dalam Pasal 5 huruf b dipidana dengan pidana penjara paling lama 3 (tiga) tahun atau den', 6),
(16, 'UU No. 23 Tahun 2004', 45, 2, 'Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) dilakukan oleh suami terhadap isteri atau sebaliknya yang tidak menimbulkan penyakit atau halangan untuk menjalankan pekerjaan jabatan a', 6),
(17, 'UU No. 23 Tahun 2004', 46, 1, 'Setiap orang yang melakukan perbuatan kekerasan seksual sebagaimana dimaksud dalam Pasal 8 huruf a dipidana dengan pidana penjara paling lama 12 (dua belas) tahun atau denda paling banyak Rp ', 7),
(18, 'UU No. 23 Tahun 2004', 47, 1, 'Setiap orang yang memaksa orang yang menetap dalam rumah tangganya melakukan hubungan seksual sebagaimana dimaksud dalam Pasal 8 huruf b dipidana dengan pidana penjara paling singkat 4 (empat', 7),
(19, 'UU No. 23 Tahun 2004', 48, 1, 'Dalam hal perbuatan sebagaimana dimaksud dalam Pasal 46 dan Pasal 47 mengakibatkan korban mendapat luka yang tidak memberi harapan akan sembuh sama sekali, mengalami gangguan daya pikir atau ', 7),
(20, 'UU No. 23 Tahun 2004', 49, 1, 'Dipidana dengan pidana penjara paling lama 3 (tiga) tahun atau denda paling banyak Rp 15.000.000,00 (lima belas juta rupiah), setiap orang yang : a. menelantarkan orang lain dalam lingkup rum', 8);

-- --------------------------------------------------------

--
-- Table structure for table `faktorkdrt`
--

CREATE TABLE `faktorkdrt` (
  `id` int(11) NOT NULL,
  `nama` varchar(191) NOT NULL,
  `id_jk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faktorkdrt`
--

INSERT INTO `faktorkdrt` (`id`, `nama`, `id_jk`) VALUES
(31, 'Pasangan yang ringan tangan', 5),
(32, 'Pasangan yang emosional atau temperamental', 5),
(33, 'Pengaruh alkohol atau obat-obatan', 5),
(34, 'Latar belakang keluarga', 5),
(35, 'Pelecehan verbal dan emosional', 6),
(36, 'Kecemburuan yang berlebihan', 6),
(37, 'Trauma masa lalu', 6),
(38, 'Pengendalian dan dominasi', 6),
(39, 'Pengendalian seksual', 7),
(40, 'Trauma seksual masa lalu', 7),
(41, 'Ketidakpuasan seksual terhadap pasangan', 7),
(42, 'Ketidasetaraan gender', 7),
(43, 'Kurangnya tanggung jawab', 8),
(44, 'Ketidamampuan finansial', 8),
(45, 'Sikap acuh tak acuh', 8);

-- --------------------------------------------------------

--
-- Table structure for table `jawaban`
--

CREATE TABLE `jawaban` (
  `id` int(11) NOT NULL,
  `pertanyaan` varchar(191) NOT NULL,
  `id_fk` int(11) NOT NULL,
  `id_konsul` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jawaban`
--

INSERT INTO `jawaban` (`id`, `pertanyaan`, `id_fk`, `id_konsul`) VALUES
(53, 'false', 36, 6),
(54, 'false', 37, 6),
(55, 'false', 38, 6),
(56, 'true', 39, 6),
(57, 'false', 40, 6),
(58, 'false', 41, 6),
(59, 'false', 42, 6),
(60, 'false', 43, 6),
(61, 'false', 44, 6),
(62, 'false', 45, 6),
(63, 'false', 31, 7),
(64, 'false', 32, 7),
(65, 'false', 33, 7),
(66, 'false', 34, 7),
(67, 'false', 35, 7),
(68, 'false', 36, 7),
(69, 'false', 37, 7),
(70, 'false', 38, 7),
(71, 'false', 39, 7),
(72, 'false', 40, 7),
(73, 'false', 41, 7),
(74, 'false', 42, 7),
(75, 'true', 43, 7),
(76, 'false', 44, 7),
(77, 'false', 45, 7),
(78, 'true', 31, 8),
(79, 'false', 32, 8),
(80, 'false', 33, 8),
(81, 'false', 34, 8),
(82, 'false', 35, 8),
(83, 'false', 36, 8),
(84, 'false', 37, 8),
(85, 'false', 38, 8),
(86, 'false', 39, 8),
(87, 'false', 40, 8),
(88, 'false', 41, 8),
(89, 'false', 42, 8),
(90, 'false', 43, 8),
(91, 'false', 44, 8),
(92, 'true', 45, 8),
(93, 'true', 31, 9),
(94, 'false', 32, 9),
(95, 'false', 33, 9),
(96, 'false', 34, 9),
(97, 'false', 35, 9),
(98, 'false', 36, 9),
(99, 'false', 37, 9),
(100, 'false', 38, 9),
(101, 'false', 39, 9),
(102, 'false', 40, 9),
(103, 'false', 41, 9),
(104, 'false', 42, 9),
(105, 'false', 43, 9),
(106, 'false', 44, 9),
(107, 'true', 45, 9),
(108, 'true', 31, 10),
(109, 'false', 32, 10),
(110, 'false', 33, 10),
(111, 'false', 34, 10),
(112, 'false', 35, 10),
(113, 'false', 36, 10),
(114, 'false', 37, 10),
(115, 'false', 38, 10),
(116, 'false', 39, 10),
(117, 'false', 40, 10),
(118, 'false', 41, 10),
(119, 'false', 42, 10),
(120, 'false', 43, 10),
(121, 'false', 44, 10),
(122, 'false', 45, 10),
(123, 'false', 31, 11),
(124, 'false', 32, 11),
(125, 'false', 33, 11),
(126, 'false', 34, 11),
(127, 'false', 35, 11),
(128, 'true', 36, 11),
(129, 'false', 37, 11),
(130, 'false', 38, 11),
(131, 'false', 39, 11),
(132, 'false', 40, 11),
(133, 'false', 41, 11),
(134, 'false', 42, 11),
(135, 'false', 43, 11),
(136, 'false', 44, 11),
(137, 'false', 45, 11),
(138, 'true', 31, 12),
(139, 'false', 32, 12),
(140, 'false', 33, 12),
(141, 'false', 34, 12),
(142, 'false', 35, 12),
(143, 'false', 36, 12),
(144, 'false', 37, 12),
(145, 'false', 38, 12),
(146, 'false', 39, 12),
(147, 'false', 40, 12),
(148, 'false', 41, 12),
(149, 'false', 42, 12),
(150, 'false', 43, 12),
(151, 'false', 44, 12),
(152, 'false', 45, 12),
(153, 'true', 31, 13),
(154, 'false', 32, 13),
(155, 'false', 33, 13),
(156, 'false', 34, 13),
(157, 'false', 35, 13),
(158, 'false', 36, 13),
(159, 'false', 37, 13),
(160, 'false', 38, 13),
(161, 'false', 39, 13),
(162, 'false', 40, 13),
(163, 'false', 41, 13),
(164, 'false', 42, 13),
(165, 'true', 43, 13),
(166, 'false', 44, 13),
(167, 'false', 45, 13),
(168, 'true', 31, 14),
(169, 'false', 32, 14),
(170, 'false', 33, 14),
(171, 'false', 34, 14),
(172, 'false', 35, 14),
(173, 'false', 36, 14),
(174, 'false', 37, 14),
(175, 'false', 38, 14),
(176, 'false', 39, 14),
(177, 'false', 40, 14),
(178, 'false', 41, 14),
(179, 'false', 42, 14),
(180, 'false', 43, 14),
(181, 'false', 44, 14),
(182, 'false', 45, 14),
(183, 'false', 31, 15),
(184, 'false', 32, 15),
(185, 'false', 33, 15),
(186, 'false', 34, 15),
(187, 'false', 35, 15),
(188, 'false', 36, 15),
(189, 'false', 37, 15),
(190, 'false', 38, 15),
(191, 'false', 39, 15),
(192, 'false', 40, 15),
(193, 'false', 41, 15),
(194, 'false', 42, 15),
(195, 'false', 43, 15),
(196, 'false', 44, 15),
(197, 'true', 45, 15),
(198, 'false', 31, 16),
(199, 'false', 32, 16),
(200, 'false', 33, 16),
(201, 'true', 34, 16),
(202, 'false', 35, 16),
(203, 'false', 36, 16),
(204, 'false', 37, 16),
(205, 'true', 38, 16),
(206, 'false', 39, 16),
(207, 'false', 40, 16),
(208, 'false', 41, 16),
(209, 'false', 42, 16),
(210, 'false', 43, 16),
(211, 'false', 44, 16),
(212, 'false', 45, 16),
(213, 'false', 31, 17),
(214, 'false', 32, 17),
(215, 'false', 33, 17),
(216, 'false', 34, 17),
(217, 'true', 35, 17),
(218, 'false', 36, 17),
(219, 'false', 37, 17),
(220, 'false', 38, 17),
(221, 'false', 39, 17),
(222, 'false', 40, 17),
(223, 'false', 41, 17),
(224, 'false', 42, 17),
(225, 'false', 43, 17),
(226, 'true', 44, 17),
(227, 'false', 45, 17),
(228, 'true', 31, 18),
(229, 'false', 32, 18),
(230, 'false', 33, 18),
(231, 'false', 34, 18),
(232, 'false', 35, 18),
(233, 'false', 36, 18),
(234, 'false', 37, 18),
(235, 'false', 38, 18),
(236, 'false', 39, 18),
(237, 'false', 40, 18),
(238, 'false', 41, 18),
(239, 'false', 42, 18),
(240, 'false', 43, 18),
(241, 'false', 44, 18),
(242, 'false', 45, 18),
(243, 'false', 31, 19),
(244, 'false', 32, 19),
(245, 'false', 33, 19),
(246, 'false', 34, 19),
(247, 'true', 35, 19),
(248, 'false', 36, 19),
(249, 'false', 37, 19),
(250, 'false', 38, 19),
(251, 'false', 39, 19),
(252, 'false', 40, 19),
(253, 'false', 41, 19),
(254, 'false', 42, 19),
(255, 'false', 43, 19),
(256, 'false', 44, 19),
(257, 'false', 45, 19);

-- --------------------------------------------------------

--
-- Table structure for table `jeniskdrt`
--

CREATE TABLE `jeniskdrt` (
  `id` int(11) NOT NULL,
  `nama` varchar(191) NOT NULL,
  `id_saran` int(11) NOT NULL,
  `id_prosedur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jeniskdrt`
--

INSERT INTO `jeniskdrt` (`id`, `nama`, `id_saran`, `id_prosedur`) VALUES
(5, 'Kekerasan Fisik', 1, 1),
(6, 'Kekerasan Psikis', 2, 1),
(7, 'Kekerasan Seksual', 3, 1),
(8, 'Penelantaran Rumah Tangga', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `konsul`
--

CREATE TABLE `konsul` (
  `id` int(11) NOT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `id_user` int(11) NOT NULL,
  `id_prosedur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `konsul`
--

INSERT INTO `konsul` (`id`, `date`, `id_user`, `id_prosedur`) VALUES
(12, '2024-09-24 03:43:23.245', 1, 1),
(13, '2024-09-24 04:52:25.423', 1, 1),
(14, '2024-10-04 16:58:33.858', 1, 1),
(15, '2024-10-04 17:00:48.153', 1, 1),
(16, '2024-10-04 17:07:22.593', 1, 1),
(17, '2024-10-04 17:08:53.924', 1, 1),
(18, '2024-10-04 17:09:46.861', 1, 1),
(19, '2024-10-04 17:12:22.411', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prosedur`
--

CREATE TABLE `prosedur` (
  `id` int(11) NOT NULL,
  `prosedur` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prosedur`
--

INSERT INTO `prosedur` (`id`, `prosedur`) VALUES
(1, 'Jika anda ingin melakukan pelaporan, berikut adalah prosedur pelaporan yang harus dilakukan: 1. Pelimpahan berkas di Aplikasi e-berpadu. 2. Bawa berkas fisik ke pengadilan negeri oebobo, kupang dan akan dicocokkan dengan yang ada di aplikasi. Berkas akan dimasukan di ruangan pidana dan nanti akan dibuatkan penetapan. lalu berkas dibawa ke ketua untuk penunjukan majelis hakim. setelah di ke panitra untuk penunjukan panitra pengganti untuk persidangan. setelah itu panitra yang akan membuat penunjukan hakim dan jadwal sidang. Pelaku KDRT bisa ditahan atau tidak tergantung dari majelis hakim.');

-- --------------------------------------------------------

--
-- Table structure for table `saran`
--

CREATE TABLE `saran` (
  `id` int(11) NOT NULL,
  `saran` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `saran`
--

INSERT INTO `saran` (`id`, `saran`) VALUES
(1, 'Jika anda mengalami luka ringan atau memar, cobalah untuk membersihkan luka dan beristirahat. Jika luka tidak sembuh atau menimbulkan rasa sakit berkelanjutan, segeralah mencari perhatian med'),
(2, 'Jika anda mengalami depresi berat cobalah berkonsultasi dengan psikolog yang dapat membantu untuk mengatasi masalah mental. jangan lupa cari dukungan dari teman dan keluarga.'),
(3, 'Jika mengalami kekerasan seksual, segera cari bantuan medis untuk mendapatkan pemeriksaan dan perawatan, serta mendokumentasikan bukti diperlukan.'),
(4, 'Jika anda mengalami penelantaran rumah tangga, anda bisa melakukan mediasi keluarga. Jika tidak menemukan akar permasalahan, anda bisa mengajukan gugatan hukum untuk meminta nafkah.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullName` varchar(50) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fullName`, `email`, `password`, `isAdmin`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$mop3rXJm4Q0nmQZxf/viweOjEf5mgXe/AbvHiiq8Wa7HM4d1fAGSG', 1),
(2, 'rio', 'rio@gmail.com', '$2b$10$0MF7zh7X9mAhDyGpg6P3o.d/uB8tV3YPfKHcxSAnivCpuYCA3UpH2', 0),
(3, 'rifaldy', 'rifaldy@gmail.com', '$2b$10$/0igsHmvBt6MDNktKkCoOOee/ji4bxfPVuKA.eR/bf84Bt.ptLwHm', 0),
(4, 'maoryn', 'maoryn@gmail.com', '$2b$10$StCZtFG8cP6Ew/yvnTreYOAzjyNrZsIrMNygDrFXsGXfWgx2u5WJ6', 0),
(5, 'lince', 'lince@gmail.com', '$2b$10$Yz3Vs/XDTSVlmTXrPqgVje5fQmwPk9gqaTOqUodyrv0vv7BEPjGCK', 0),
(6, 'asd', 'asd@gmail.com', '$2b$10$TqLLLNHvewpxL9/Zq/WTNeNMtWZi5meLfMqq8x2cfHZE21Pvi5IH2', 0),
(7, 'edwin', 'edwin@gmail.com', '$2b$10$kevQ.GacSVhwSH6wb9dTMOAyIs9F1u9k9sCG1IVkfShnQXjNY9FZW', 0),
(8, 'andika', 'andika@gmail.com', '$2b$10$XYI2pmoqGNT5GlXaxYShTOWw8HkByMFVhlEi52vrD6WF8fTB4ZXxm', 0),
(9, 'alexander', 'alexander@gmail.com', '$2b$10$lWBK6iVSBozl3kG8x4JTz.Vmqfr59hy2oAgw3iAo/99iCeGfz9X1e', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dasarhukum`
--
ALTER TABLE `dasarhukum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DasarHukum_id_jk_fkey` (`id_jk`);

--
-- Indexes for table `faktorkdrt`
--
ALTER TABLE `faktorkdrt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FaktorKdrt_id_jk_fkey` (`id_jk`);

--
-- Indexes for table `jawaban`
--
ALTER TABLE `jawaban`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Jawaban_id_fk_fkey` (`id_fk`),
  ADD KEY `Jawaban_id_konsul_fkey` (`id_konsul`);

--
-- Indexes for table `jeniskdrt`
--
ALTER TABLE `jeniskdrt`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `JenisKdrt_id_saran_key` (`id_saran`),
  ADD KEY `JenisKdrt_id_prosedur_fkey` (`id_prosedur`);

--
-- Indexes for table `konsul`
--
ALTER TABLE `konsul`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Konsul_id_user_fkey` (`id_user`),
  ADD KEY `Konsul_id_prosedur_fkey` (`id_prosedur`);

--
-- Indexes for table `prosedur`
--
ALTER TABLE `prosedur`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saran`
--
ALTER TABLE `saran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dasarhukum`
--
ALTER TABLE `dasarhukum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `faktorkdrt`
--
ALTER TABLE `faktorkdrt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `jawaban`
--
ALTER TABLE `jawaban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT for table `jeniskdrt`
--
ALTER TABLE `jeniskdrt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `konsul`
--
ALTER TABLE `konsul`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `prosedur`
--
ALTER TABLE `prosedur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `saran`
--
ALTER TABLE `saran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dasarhukum`
--
ALTER TABLE `dasarhukum`
  ADD CONSTRAINT `DasarHukum_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `jeniskdrt` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `faktorkdrt`
--
ALTER TABLE `faktorkdrt`
  ADD CONSTRAINT `FaktorKdrt_id_jk_fkey` FOREIGN KEY (`id_jk`) REFERENCES `jeniskdrt` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `jawaban`
--
ALTER TABLE `jawaban`
  ADD CONSTRAINT `Jawaban_id_fk_fkey` FOREIGN KEY (`id_fk`) REFERENCES `faktorkdrt` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Jawaban_id_konsul_fkey` FOREIGN KEY (`id_konsul`) REFERENCES `konsul` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `jeniskdrt`
--
ALTER TABLE `jeniskdrt`
  ADD CONSTRAINT `JenisKdrt_id_prosedur_fkey` FOREIGN KEY (`id_prosedur`) REFERENCES `prosedur` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `JenisKdrt_id_saran_fkey` FOREIGN KEY (`id_saran`) REFERENCES `saran` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `konsul`
--
ALTER TABLE `konsul`
  ADD CONSTRAINT `Konsul_id_prosedur_fkey` FOREIGN KEY (`id_prosedur`) REFERENCES `prosedur` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Konsul_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
