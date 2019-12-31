-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2019 at 04:37 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiring_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` text,
  `id_user` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `name`, `logo`, `location`, `description`, `id_user`) VALUES
(1, 'PT  United Steel Care', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575423185/hiringapp/company/logo/idzvl0rwahggxl1wuoyi.png', 'Karawang International Industrial City', 'Perusahaan Baja', 'b0817d52-f778-4656-a0d0-94f78c345062'),
(2, 'CV Master Web Bogor', 'http://4.bp.blogspot.com/-O8npDCo66Oo/VJ7vOyZ-UNI/AAAAAAAAAEI/MW7lAOXsC6A/s1600/masterweb-vektor-log%2B(1).png', 'Bogor Timur', 'Penyedia Layanan IT', '29e4c62a-b100-471c-a098-874e7d3ae0d3'),
(3, 'CV Pusaka Jaya', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575421888/hiringapp/company/logo/doptzwgjufmsnobmm5bi.png', 'Bogor', 'Start up', '25995698-c838-4cab-9ca2-bc2afd28942c'),
(4, NULL, NULL, NULL, NULL, 'fb712a08-cf9f-47df-9ef9-73e16b527fdb'),
(5, NULL, NULL, NULL, NULL, '07789019-017a-48f2-a3d7-f35a7891b350'),
(6, NULL, NULL, NULL, NULL, 'b36839d6-0deb-41ea-baed-b2f67859640f'),
(7, NULL, NULL, NULL, NULL, '3614fa5d-945f-4ba6-abe6-c8356f9c3c40'),
(8, NULL, NULL, NULL, NULL, 'f527540a-5d4c-4d64-aee0-68b864e683be'),
(11, NULL, NULL, NULL, NULL, '87fc2f66-af4a-48ed-afcd-e7ca68db08d1'),
(12, NULL, NULL, NULL, NULL, 'b1a0bb02-88f6-41fb-b27d-d2cf464d379b'),
(13, NULL, NULL, NULL, NULL, 'cf5b0b1e-ec75-40c6-855d-f8f4a3fcda9d'),
(14, NULL, NULL, NULL, NULL, 'fd5ec4e5-d4bb-4943-accc-a73f1ed4d912'),
(15, NULL, NULL, NULL, NULL, 'fc4c25f1-5361-40f7-b519-9a721b779567'),
(16, NULL, NULL, NULL, NULL, '16929378-9c86-411f-b338-f5e11fbb3f45'),
(17, NULL, NULL, NULL, NULL, 'f03ae4a1-391e-40ba-93e1-2edbb52f8f41');

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `id_eng` int(11) NOT NULL,
  `name_eng` varchar(225) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `location` varchar(225) DEFAULT NULL,
  `no_hp` varchar(13) DEFAULT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `job` varchar(100) DEFAULT NULL,
  `showcase` varchar(250) DEFAULT NULL,
  `id_user` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`id_eng`, `name_eng`, `dob`, `location`, `no_hp`, `photo`, `job`, `showcase`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, 'Erdin Suharyadi', '1998-12-01', 'Karawang', '089500001111', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575688122/hiringapp/engineer/photo/wumjjykrhps2dlcdqmje.jpg', 'Android Programming', 'https://github.com/erdinsuharyadi', '930058d7-fdeb-46cf-afa5-5824a435bd91', '2019-11-19 17:00:14', '2019-12-05 05:47:39'),
(2, 'Rudi Habibi', '1995-11-01', 'Jakarta', '089501019876', 'https://i.pinimg.com/564x/04/c5/ad/04c5ad5446872b55e53c4ca67dd868e5.jpg', 'Back End', 'https://github.com/erdinsuharyadi', 'e65b7751-b079-435e-bd68-0278e8d6b6cb', '2019-11-30 01:56:21', '2019-11-30 01:56:21'),
(3, 'Tia Aristia', '1998-05-12', 'karawang', '089500009999', 'https://i.pinimg.com/564x/34/70/89/34708922adb3e6f1cb04684bad698def.jpg', 'Mobile Programming', 'http://www.github.com/erdinsuharyadi', NULL, '2019-11-30 01:56:21', '2019-12-04 02:35:02'),
(4, 'Tio Jacob', '2019-11-13', 'Jakarta', '089501019876', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575430077/hiringapp/engineer/photo/ocjx9wc6eqhjjqyghhby.jpg', 'Front End Programming', 'https://www.google.com/', NULL, '2019-11-30 02:00:00', '2019-11-30 02:00:00'),
(5, 'Christina Naomi', '2019-11-13', 'Depok', '089501019876', 'https://i.pinimg.com/564x/bd/ae/c7/bdaec7bd1ee15af5ae13698a1ba4ed84.jpg', 'UI / UX', 'https://www.google.com/', NULL, '2019-11-30 02:00:00', '2019-11-30 02:00:00'),
(6, 'Oliva Jacob', '2019-11-14', 'Bekasi', '089501019876', 'https://i.pinimg.com/564x/27/f2/97/27f2977aadff274c6e5f944055bdacc6.jpg', 'Front End', 'https://github.com/erdinsuharyadi', NULL, '2019-11-30 02:03:17', '2019-11-30 02:03:17'),
(7, 'Steve Immanuel', '2019-11-12', 'Bandung', '0897667', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575430132/hiringapp/engineer/photo/re8hcudh0zku26pfybm5.jpg', 'Mobile Programming', 'https://www.google.com/', NULL, '2019-11-30 02:03:17', '2019-11-30 02:03:17'),
(8, 'Ronaldo', '2019-12-03', 'Bogor', '089501010101', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwrWKiqlzukS2SRGe4FnXrtuln0ft8wqcvsT1NowW70aIZSXGr', 'Front End ', 'www.google.com', 'e5e9fbe0-963e-42cb-9e41-1e004bd90c0e', '2019-12-07 03:06:30', '2019-12-07 03:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `id_user` varchar(250) NOT NULL,
  `id_company` int(11) NOT NULL,
  `project_name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `period` varchar(100) NOT NULL,
  `deadline` date NOT NULL,
  `status` enum('0','1','2') NOT NULL DEFAULT '1',
  `progress` enum('0','1','2') NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `id_user`, `id_company`, `project_name`, `description`, `period`, `deadline`, `status`, `progress`, `createdAt`, `updatedAt`) VALUES
(1, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Aplikasi POS Minimart Jaya Abadi', 'Aplikasi untuk proses bisnis minimart Jaya Abadi', '2 Month', '2019-12-30', '1', '0', '2019-12-04 06:30:33', '2019-12-06 08:01:08'),
(2, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Website Rumah Sakit Prima', 'Aplikasi web untuk informasi untuk client', '3 Month', '2019-12-31', '1', '0', '2019-12-04 06:34:26', '2019-12-06 08:02:43'),
(3, 'b0817d52-f778-4656-a0d0-94f78c345062', 1, 'Aplikasi Pembayaran Utang Piutang', 'aplikasi yang menyediakan pembayaran utang piutang', '5 Month', '2019-12-31', '1', '0', '2019-12-04 06:41:42', '2019-12-04 06:41:42'),
(4, 'b0817d52-f778-4656-a0d0-94f78c345062', 1, 'Aplikasi Manajemen Perangkat IT', 'Aplikasi untuk mengelola perangkat IT', '5 Month', '2019-12-31', '1', '0', '2019-12-04 06:50:53', '2019-12-04 06:50:53'),
(5, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'aplikasi android', 'pokok keren', '1 minggu', '2019-12-17', '1', '0', '2019-12-06 18:02:48', '2019-12-06 18:02:48'),
(6, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Website Kasir Minimart', 'membuat aplikasi untuk proses transaksi kasir', '2 Month', '2020-01-31', '1', '0', '2019-12-07 03:12:24', '2019-12-07 03:12:24'),
(9, 'b0817d52-f778-4656-a0d0-94f78c345062', 1, 'Sistem Manajemen Aplikasi Presensi Karyawan', 'Sistem untuk mengelola presensi karyawan', '5 Week', '2019-12-30', '1', '0', '2019-12-13 08:03:22', '2019-12-13 08:03:22'),
(10, 'b0817d52-f778-4656-a0d0-94f78c345062', 1, 'Sistem POS mall ekalokasari', 'Sistem pos', '2 Month', '2019-12-13', '1', '0', '2019-12-14 05:38:38', '2019-12-14 05:38:38'),
(11, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem POS minimarket alfajaya', 'Membuat web', '2 Month', '2020-02-28', '1', '0', '2019-12-14 05:58:56', '2019-12-14 05:58:56'),
(12, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem Manajemen Karyawan Alfajaya', 'Web Karyawan', '2 Month ', '2019-12-30', '1', '0', '2019-12-14 05:59:44', '2019-12-14 05:59:44'),
(13, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem Manajemen Hire Karyawan', 'Sistem Hire', '2 Month', '2019-12-30', '1', '0', '2019-12-14 06:00:28', '2019-12-14 06:00:28'),
(14, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem Manajemen Keuangan Alfajaya', 'Web Keuangan', '7 Month', '2019-12-23', '1', '0', '2019-12-14 06:01:00', '2019-12-14 06:01:00'),
(15, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem Manajemen Perangkat IT', 'Aplikasi untuk mengelola perangkat IT', '5 Mobth', '2020-02-28', '1', '0', '2019-12-14 10:08:43', '2019-12-14 10:08:43'),
(16, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Aplikasi Mobile Micro Pulsa', 'Membangun aplikasi mobile untuk transaksi pulsa', '3 Month', '2019-12-30', '1', '0', '2019-12-15 07:09:16', '2019-12-15 07:09:16'),
(17, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Sistem Manajemen Keuangan Minimarket Indomei', 'Membuat aplikasi minimarket indomei', '4 Month', '2019-12-30', '1', '0', '2019-12-15 07:15:37', '2019-12-15 07:15:37');

-- --------------------------------------------------------

--
-- Table structure for table `project_eng`
--

CREATE TABLE `project_eng` (
  `id_project_eng` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_eng` int(11) NOT NULL,
  `fee` varchar(250) NOT NULL,
  `project_job` varchar(250) NOT NULL,
  `sts_project_eng` enum('0','1','2','3') NOT NULL DEFAULT '1',
  `id_bid` int(11) DEFAULT NULL,
  `date_accepted_eng` datetime DEFAULT NULL,
  `progress` enum('0','1') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_eng`
--

INSERT INTO `project_eng` (`id_project_eng`, `id_project`, `id_eng`, `fee`, `project_job`, `sts_project_eng`, `id_bid`, `date_accepted_eng`, `progress`, `createdAt`, `updatedAt`) VALUES
(2, 3, 4, '100000', 'Mobile android apps', '1', NULL, NULL, NULL, '2019-12-04 09:54:00', '2019-12-04 09:54:00'),
(3, 1, 1, '100000000', 'Desain layout frontend for web', '0', 3, NULL, NULL, '2019-12-04 10:15:00', '2019-12-06 03:51:01'),
(4, 2, 1, '100000000', 'Front end layouting web', '2', 2, '2019-12-06 10:17:16', '1', '2019-12-04 11:33:34', '2019-12-06 06:52:33'),
(5, 4, 7, '10000000', 'Front End Web', '1', NULL, NULL, NULL, '2019-12-05 01:25:01', '2019-12-05 01:25:01'),
(6, 4, 2, '20000000', 'Back End', '2', NULL, '2019-12-07 00:44:20', '1', '2019-12-05 15:19:21', '2019-12-06 23:00:04'),
(7, 2, 3, '50000000', 'Back End', '1', NULL, NULL, NULL, '2019-12-06 06:12:08', '2019-12-06 06:12:08'),
(8, 2, 2, '75000000', 'Back End & Server', '2', NULL, '2019-12-07 05:49:53', NULL, '2019-12-06 06:17:46', '2019-12-06 22:49:53'),
(9, 3, 2, '10000000000', 'Back End', '2', NULL, '2019-12-07 05:50:02', '1', '2019-12-06 17:46:44', '2019-12-06 22:59:47'),
(10, 5, 1, '300000000', 'full stack', '2', NULL, '2019-12-07 01:05:40', NULL, '2019-12-06 18:04:35', '2019-12-06 18:05:40'),
(11, 6, 2, '70000000', 'Back end website', '2', 4, '2019-12-07 10:20:12', '1', '2019-12-07 03:14:16', '2019-12-07 03:21:15'),
(12, 1, 2, ' 2000000', ' Front End', '1', NULL, NULL, NULL, '2019-12-12 23:16:53', '2019-12-12 23:16:53'),
(13, 5, 2, '1000', 'kuli', '1', NULL, NULL, NULL, '2019-12-12 23:19:00', '2019-12-12 23:19:00'),
(14, 1, 1, '16666', 'Ffff', '1', NULL, NULL, NULL, '2019-12-12 23:21:31', '2019-12-12 23:21:31'),
(15, 1, 2, '333', 'Ccc', '1', NULL, NULL, NULL, '2019-12-12 23:23:30', '2019-12-12 23:23:30'),
(16, 2, 1, '100000', 'desain web', '1', NULL, NULL, NULL, '2019-12-12 23:25:02', '2019-12-12 23:25:02'),
(17, 4, 1, '30000', 'Tidur', '1', NULL, NULL, NULL, '2019-12-13 01:18:20', '2019-12-13 01:18:20'),
(18, 4, 2, '100000', 'Side Job', '1', NULL, NULL, NULL, '2019-12-13 07:36:17', '2019-12-13 07:36:17'),
(19, 6, 5, '2000000', 'Desain layout website', '1', NULL, NULL, NULL, '2019-12-13 18:09:46', '2019-12-13 18:09:47'),
(20, 10, 3, '10000000', 'Desain web', '1', NULL, NULL, NULL, '2019-12-14 05:39:34', '2019-12-14 05:39:34'),
(21, 12, 2, '5000000', 'handle back end sistem', '1', NULL, NULL, NULL, '2019-12-14 06:02:55', '2019-12-14 06:02:55'),
(22, 16, 2, '2000000', 'Fullstack', '1', NULL, NULL, NULL, '2019-12-15 07:12:38', '2019-12-15 07:12:38');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `name_skill` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `name_skill`) VALUES
(1, 'PHP'),
(2, 'Kotlin'),
(3, 'Express'),
(4, 'Javascript'),
(5, 'Java'),
(6, 'Android'),
(7, 'React'),
(8, 'Python');

-- --------------------------------------------------------

--
-- Table structure for table `skill_eng`
--

CREATE TABLE `skill_eng` (
  `id` int(11) NOT NULL,
  `id_eng` int(11) NOT NULL,
  `id_skill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skill_eng`
--

INSERT INTO `skill_eng` (`id`, `id_eng`, `id_skill`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 4),
(5, 4, 1),
(6, 4, 3),
(7, 4, 5),
(8, 4, 7),
(9, 4, 8),
(10, 4, 2),
(11, 4, 6),
(12, 4, 4),
(13, 3, 5),
(14, 5, 6),
(15, 0, 6),
(16, 0, 6),
(17, 0, 8),
(18, 0, 6),
(19, 0, 8),
(20, 1, 7),
(21, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tb_project_helper`
--

CREATE TABLE `tb_project_helper` (
  `id` int(11) NOT NULL,
  `id_project_eng` int(11) NOT NULL,
  `fee_bid` varchar(250) NOT NULL,
  `desc_nego_proj` text,
  `sts_nego_proj` enum('0','1','2') DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_project_helper`
--

INSERT INTO `tb_project_helper` (`id`, `id_project_eng`, `fee_bid`, `desc_nego_proj`, `sts_nego_proj`, `createdAt`, `updatedAt`) VALUES
(1, 3, '150000000', 'Tambah 50jt', '1', '2019-12-05 09:32:49', '2019-12-06 02:48:56'),
(2, 4, '100000000', 'Tambah Fee', '2', '2019-12-06 01:08:52', '2019-12-06 03:17:16'),
(3, 3, '150000000', '50 Juta Lagi', '0', '2019-12-06 03:49:46', '2019-12-06 03:51:01'),
(4, 11, '70000000', 'Tambah 20jt', '2', '2019-12-07 03:18:29', '2019-12-07 03:20:12');

--
-- Triggers `tb_project_helper`
--
DELIMITER $$
CREATE TRIGGER `after_bidding_insert` AFTER INSERT ON `tb_project_helper` FOR EACH ROW BEGIN
    
        UPDATE project_eng SET sts_project_eng = '3', id_bid = New.id, updatedAt = CURRENT_TIME
        WHERE id_project_eng = NEW.id_project_eng;
  
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `after_bidding_update` AFTER UPDATE ON `tb_project_helper` FOR EACH ROW BEGIN
    IF NEW.sts_nego_proj = '2' THEN
        UPDATE project_eng SET sts_project_eng = '2', fee = New.fee_bid, date_accepted_eng = CURRENT_TIME, updatedAt = CURRENT_TIME
        WHERE id_project_eng = NEW.id_project_eng;
    ELSEIF NEW.sts_nego_proj = '0' THEN
    	UPDATE project_eng SET sts_project_eng = '0', updatedAt = CURRENT_TIME
        WHERE id_project_eng = NEW.id_project_eng;
  	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` varchar(250) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `status` enum('0','1') DEFAULT '0',
  `level` enum('0','1','2') DEFAULT NULL,
  `tokenUse` longtext,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `email`, `name`, `status`, `level`, `tokenUse`, `createdAt`, `updatedAt`) VALUES
('064c12de-11b2-4e49-b8f1-ce9b073856a5', 'kristina', '$2a$10$OteV0f/v/55a.c009hxKuuz5Iv9bpU1NPVvFzWc.PRbQIuAS9XM.i', 'kristina@gmail.com', 'Kristina', '0', '1', NULL, '2019-11-30 03:24:26', '2019-11-30 03:24:58'),
('07789019-017a-48f2-a3d7-f35a7891b350', 'saribunga', '$2a$10$MHdQpdiAGEj.TtWpYprh6uVHrI.daqPZlaV7x9Xl1S3okn7oPzCsy', 'saribunga@gmail.com', 'Sari Bunga', '0', '1', NULL, '2019-12-11 06:14:11', '2019-12-11 06:14:11'),
('16929378-9c86-411f-b338-f5e11fbb3f45', 'pamungkas', '$2a$10$aN12QCgxQoz4VgKmbdpaS.U6F2yMNMDu4Q6uz1bIwnnbzrklD3iSu', 'pamungjas@gmail.com', 'Pamungkas', '0', '1', NULL, '2019-12-15 16:42:12', '2019-12-15 16:47:22'),
('25995698-c838-4cab-9ca2-bc2afd28942c', 'titasari', '$2a$10$fuRx9qK/zbaUcOriv.1rMu4ZNoe8IXY7n6Vtl7MC6qdHqQ5cxbwda', 'titasari@gmail.com', 'Tita Sari', '0', '1', NULL, '2019-12-03 08:43:10', '2019-12-16 01:59:04'),
('29e4c62a-b100-471c-a098-874e7d3ae0d3', 'naufalsyfa', '$2a$10$1VgHQc1dQh0w8rrdzuXZ/.3QOdwwEGwSGqoaun2zig5gTYYz/nuOi', 'naufalsyfa@gmail.com', 'Naufal Syfa', '0', '1', NULL, '2019-11-30 00:54:52', '2019-11-30 03:29:23'),
('3614fa5d-945f-4ba6-abe6-c8356f9c3c40', 'erdin', '$2a$10$iN4ndW7zNHX7APpSM45pVuOrLX.QIOHcXL.SvGw3Hks4NyN5Jlo2S', 'erdin@gmail.com', 'Erdin', '0', '1', NULL, '2019-12-11 07:33:08', '2019-12-11 09:37:31'),
('87fc2f66-af4a-48ed-afcd-e7ca68db08d1', 'kurnia', '$2a$10$ztdmRq/GSP8MzcYzta5UA.CV1MJ3yOw8X3t6tkGPsYeJkpJQTaMGK', 'kurnia', 'kurnia', '0', '1', NULL, '2019-12-11 07:56:26', '2019-12-11 09:51:12'),
('930058d7-fdeb-46cf-afa5-5824a435bd91', 'erdinsuharyadi', '$2a$10$20E6fO7qBpU18R0n0uXgjePNU/RyzpviBQRcy0klOaps7gScHC4qy', 'erdinsuharyadi@gmail.com', 'Erdin Suharyadi', '0', '2', NULL, '2019-11-22 04:07:58', '2019-12-14 10:32:23'),
('b0817d52-f778-4656-a0d0-94f78c345062', 'krisnamukti', '$2a$10$YaLau9ljJBq/nelY9uiNAuG4QQ2y8ZCqtRWK.cy/93in61zjhkz3y', 'kirsnamukti@gmail.com', 'Krisna Mukti', '0', '1', NULL, '2019-11-29 10:41:37', '2019-12-15 15:10:45'),
('b1a0bb02-88f6-41fb-b27d-d2cf464d379b', 'litasari', '$2a$10$HLZgwa1xrcuQHXlCf0WwuOBNVzw5lFIoDUypWu7ANjGJpxXIQPqaa', 'litasari@gmail.com', 'Lita Sari', '0', '1', '', '2019-12-12 04:47:22', '2019-12-12 04:48:57'),
('b36839d6-0deb-41ea-baed-b2f67859640f', 'trihapsari', '$2a$10$7tRXQizYlJeYMP8UV.51H.dLS5fDmdCpLJQB.8jsrt8yVqrUeKpyy', 'trihapsari@gmail.com', 'Tri Hapsari', '0', '1', NULL, '2019-12-11 06:55:42', '2019-12-11 07:04:47'),
('cf5b0b1e-ec75-40c6-855d-f8f4a3fcda9d', 'suharyadi', '$2a$10$AEkGyRQjDwaWkehZ.Xtmw./g28ym2RTTlL5spUA/1w5nqLgTAplZy', 'suharyadi@gmail.com', 'Suharyadi', '0', '1', NULL, '2019-12-15 15:35:35', '2019-12-15 15:35:35'),
('e5e9fbe0-963e-42cb-9e41-1e004bd90c0e', 'ronaldo', '$2a$10$/Ro2hxjVLgoDWwIjl5Yru.1jNWymPX2Nw1HqrBlWlAzJa/YACsL6u', 'ronaldo@gmail.com', 'Ronaldo', '1', '2', NULL, '2019-12-07 03:06:30', '2019-12-07 03:06:51'),
('e65b7751-b079-435e-bd68-0278e8d6b6cb', 'rudihabibi', '$2a$10$T3chijuAjWeUW7a6JYJJ1OOrPNTdcbAM50FLIqRC5hJ/j/UrNgxPK', 'rudihabibi@gmail.com', 'Rudi Habibi', '0', '2', NULL, '2019-12-02 10:57:27', '2019-12-11 09:20:22'),
('f03ae4a1-391e-40ba-93e1-2edbb52f8f41', 'bambang', '$2a$10$RuWWEU2HUH674xxmsC2KJOPtrQ6cmxtCungZyN3zZRvwl/WCzeQcC', 'bambang@gmail.com', 'Bambang', '0', '1', NULL, '2019-12-15 16:44:11', '2019-12-15 16:44:11'),
('f527540a-5d4c-4d64-aee0-68b864e683be', 'desi', '$2a$10$XV8Pcj0yE8OjQn1PEeeCiOLe8C4ko1sZTXwqDsnHk6.CRmFFsSVNW', 'desi@gmail.com', 'Desi', '0', '1', NULL, '2019-12-11 07:50:32', '2019-12-11 07:52:31'),
('f997c603-a155-4cdd-bb15-04c8250910b9', 'tinatalisa', '$2a$10$4Cg4apguN/nygIgKFl1abOJ5OPYkOGA8Yhd5HzpVOnDXSE/9QkraS', 'tinatalisa@gmail.com', 'Tina Talisa', '0', '1', NULL, '2019-12-11 06:11:51', '2019-12-11 06:11:51'),
('fb712a08-cf9f-47df-9ef9-73e16b527fdb', 'yupiansara', '$2a$10$HPAf0xNYlMZbTiwZGBTL6eeNW8qFBVg17OnpYXYBtwfrFsg9coo0W', 'yupiansara@gmail.com', 'Yupi Ansara', '0', '1', NULL, '2019-12-11 06:05:22', '2019-12-11 06:05:22'),
('fc4c25f1-5361-40f7-b519-9a721b779567', 'ginasafitri', '$2a$10$AWYSWSa/NCibKDHRFPFWp.W.P4UuARWpLNY5TURpairbIwQ.V96je', 'ginasafitri@gmail.com', 'Gina Safitri', '0', '1', NULL, '2019-12-15 15:55:44', '2019-12-15 15:55:44'),
('fd5ec4e5-d4bb-4943-accc-a73f1ed4d912', 'gojek', '$2a$10$k0rl33iZzeFV/auwjacsB.3KOfWAUQSCwXoi2ay8N6Em.h60b/GJy', 'gojek@gmail.com', 'gojek', '0', '1', NULL, '2019-12-15 15:43:36', '2019-12-15 15:43:36');

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `after_members_insert` AFTER INSERT ON `user` FOR EACH ROW BEGIN
    IF NEW.level = '2' THEN
        INSERT INTO engineer(name_eng, id_user)
        VALUES(new.name, new.id_user);
    ELSEIF NEW.level = '1' THEN
    	INSERT INTO company(id_user)
        VALUES(new.id_user);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_company`
-- (See below for the actual view)
--
CREATE TABLE `v_company` (
`id_user` varchar(250)
,`username` varchar(15)
,`email` varchar(100)
,`name` varchar(100)
,`status` enum('0','1')
,`level` enum('0','1','2')
,`id_company` int(11)
,`name_company` varchar(255)
,`logo` varchar(255)
,`location` varchar(255)
,`description` text
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_engineer`
-- (See below for the actual view)
--
CREATE TABLE `v_engineer` (
`id_eng` int(11)
,`name_eng` varchar(225)
,`id_user` varchar(250)
,`username` varchar(15)
,`email` varchar(100)
,`dob` date
,`location` varchar(225)
,`no_hp` varchar(13)
,`photo` varchar(250)
,`job` varchar(100)
,`showcase` varchar(250)
,`name_skill` text
,`createdAt` timestamp
,`updatedAt` timestamp
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_engineerrr`
-- (See below for the actual view)
--
CREATE TABLE `v_engineerrr` (
`id_eng` int(11)
,`name_eng` varchar(225)
,`id_user` varchar(250)
,`username` varchar(15)
,`email` varchar(100)
,`dob` date
,`location` varchar(225)
,`no_hp` varchar(13)
,`photo` varchar(250)
,`job` varchar(100)
,`showcase` varchar(250)
,`name_skill` text
,`createdAt` timestamp
,`updatedAt` timestamp
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_project`
-- (See below for the actual view)
--
CREATE TABLE `v_project` (
`id_project` int(11)
,`id_user` varchar(250)
,`id_company` int(11)
,`name` varchar(255)
,`username` varchar(15)
,`project_name` varchar(250)
,`description` text
,`period` varchar(100)
,`deadline` date
,`status` enum('0','1','2')
,`id_project_eng` int(11)
,`id_eng` int(11)
,`name_eng` varchar(225)
,`fee` varchar(250)
,`project_job` varchar(250)
,`sts_project_eng` enum('0','1','2','3')
,`progressEng` enum('0','1')
,`createProj` timestamp
,`updateProj` timestamp
,`createProjEng` timestamp
,`updateProjEng` timestamp
);

-- --------------------------------------------------------

--
-- Structure for view `v_company`
--
DROP TABLE IF EXISTS `v_company`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_company`  AS  select `b`.`id_user` AS `id_user`,`b`.`username` AS `username`,`b`.`email` AS `email`,`b`.`name` AS `name`,`b`.`status` AS `status`,`b`.`level` AS `level`,`a`.`id_company` AS `id_company`,`a`.`name` AS `name_company`,`a`.`logo` AS `logo`,`a`.`location` AS `location`,`a`.`description` AS `description` from (`user` `b` join `company` `a` on((`a`.`id_user` = `b`.`id_user`))) where (`b`.`level` = '1') ;

-- --------------------------------------------------------

--
-- Structure for view `v_engineer`
--
DROP TABLE IF EXISTS `v_engineer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_engineer`  AS  select `a`.`id_eng` AS `id_eng`,`a`.`name_eng` AS `name_eng`,`a`.`id_user` AS `id_user`,`d`.`username` AS `username`,`d`.`email` AS `email`,`a`.`dob` AS `dob`,`a`.`location` AS `location`,`a`.`no_hp` AS `no_hp`,`a`.`photo` AS `photo`,`a`.`job` AS `job`,`a`.`showcase` AS `showcase`,group_concat(`c`.`name_skill` separator ',') AS `name_skill`,`a`.`createdAt` AS `createdAt`,`a`.`updatedAt` AS `updatedAt` from (((`engineer` `a` left join `skill_eng` `b` on((`a`.`id_eng` = `b`.`id_eng`))) left join `skill` `c` on((`c`.`id_skill` = `b`.`id_skill`))) left join `user` `d` on((`a`.`id_user` = `d`.`id_user`))) group by `a`.`id_eng` ;

-- --------------------------------------------------------

--
-- Structure for view `v_engineerrr`
--
DROP TABLE IF EXISTS `v_engineerrr`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_engineerrr`  AS  select `a`.`id_eng` AS `id_eng`,`a`.`name_eng` AS `name_eng`,`a`.`id_user` AS `id_user`,`d`.`username` AS `username`,`d`.`email` AS `email`,`a`.`dob` AS `dob`,`a`.`location` AS `location`,`a`.`no_hp` AS `no_hp`,`a`.`photo` AS `photo`,`a`.`job` AS `job`,`a`.`showcase` AS `showcase`,group_concat(`c`.`name_skill` separator ',') AS `name_skill`,`a`.`createdAt` AS `createdAt`,`a`.`updatedAt` AS `updatedAt` from (((`engineer` `a` left join `skill_eng` `b` on((`a`.`id_eng` = `b`.`id_eng`))) left join `skill` `c` on((`c`.`id_skill` = `b`.`id_skill`))) left join `user` `d` on((`a`.`id_user` = `d`.`id_user`))) group by `a`.`id_eng` ;

-- --------------------------------------------------------

--
-- Structure for view `v_project`
--
DROP TABLE IF EXISTS `v_project`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_project`  AS  select `a`.`id_project` AS `id_project`,`a`.`id_user` AS `id_user`,`a`.`id_company` AS `id_company`,`c`.`name` AS `name`,`d`.`username` AS `username`,`a`.`project_name` AS `project_name`,`a`.`description` AS `description`,`a`.`period` AS `period`,`a`.`deadline` AS `deadline`,`a`.`status` AS `status`,`b`.`id_project_eng` AS `id_project_eng`,`b`.`id_eng` AS `id_eng`,`e`.`name_eng` AS `name_eng`,`b`.`fee` AS `fee`,`b`.`project_job` AS `project_job`,`b`.`sts_project_eng` AS `sts_project_eng`,`b`.`progress` AS `progressEng`,`a`.`createdAt` AS `createProj`,`a`.`updatedAt` AS `updateProj`,`b`.`createdAt` AS `createProjEng`,`b`.`updatedAt` AS `updateProjEng` from ((((`project` `a` left join `project_eng` `b` on((`a`.`id_project` = `b`.`id_project`))) left join `company` `c` on((`a`.`id_company` = `c`.`id_company`))) left join `user` `d` on((`a`.`id_user` = `d`.`id_user`))) left join `engineer` `e` on((`b`.`id_eng` = `e`.`id_eng`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id_eng`),
  ADD UNIQUE KEY `id_user` (`id_user`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- Indexes for table `project_eng`
--
ALTER TABLE `project_eng`
  ADD PRIMARY KEY (`id_project_eng`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indexes for table `skill_eng`
--
ALTER TABLE `skill_eng`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_project_helper`
--
ALTER TABLE `tb_project_helper`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_eng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `project_eng`
--
ALTER TABLE `project_eng`
  MODIFY `id_project_eng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `skill_eng`
--
ALTER TABLE `skill_eng`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tb_project_helper`
--
ALTER TABLE `tb_project_helper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
