-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2019 at 03:46 PM
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
(3, 'CV Pusaka Jaya', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575421888/hiringapp/company/logo/doptzwgjufmsnobmm5bi.png', 'Bogor', 'Start up', '25995698-c838-4cab-9ca2-bc2afd28942c');

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
(1, 'Erdin Suharyadi', '0000-00-00', 'Karawang', '089500001111', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575688122/hiringapp/engineer/photo/wumjjykrhps2dlcdqmje.jpg', 'Android Programming', 'https://github.com/erdinsuharyadi', '930058d7-fdeb-46cf-afa5-5824a435bd91', '2019-11-19 17:00:14', '2019-12-05 05:47:39'),
(2, 'Rudi Habibi', '1995-11-01', 'Jakarta', '089501019876', 'https://i.pinimg.com/564x/04/c5/ad/04c5ad5446872b55e53c4ca67dd868e5.jpg', 'Back End', 'https://github.com/erdinsuharyadi', 'e65b7751-b079-435e-bd68-0278e8d6b6cb', '2019-11-30 01:56:21', '2019-11-30 01:56:21'),
(3, 'Tia Aristia', '1998-05-12', 'karawang', '089500009999', 'https://i.pinimg.com/564x/a4/d4/ac/a4d4ac6c94b0bd917c9f62cabaf5201f.jpg', 'Mobile Programming', 'http://www.github.com/erdinsuharyadi', NULL, '2019-11-30 01:56:21', '2019-12-04 02:35:02'),
(4, 'Tio Jacob', '2019-11-13', 'Jakarta', '089501019876', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575430077/hiringapp/engineer/photo/ocjx9wc6eqhjjqyghhby.jpg', 'Front End Programming', 'https://www.google.com/', NULL, '2019-11-30 02:00:00', '2019-11-30 02:00:00'),
(5, 'Christina Naomi', '2019-11-13', 'Depok', '089501019876', 'https://i.pinimg.com/564x/e6/fa/3d/e6fa3d416f5b820a3672cb0cf0fb6d76.jpg', 'UI / UX', 'https://www.google.com/', NULL, '2019-11-30 02:00:00', '2019-11-30 02:00:00'),
(6, 'Oliva Jacob', '2019-11-14', 'Bekasi', '089501019876', 'https://i.pinimg.com/564x/cd/53/4a/cd534a4bda37c397f7af59bf48e5478c.jpg', 'Front End', 'https://www.google.com/', NULL, '2019-11-30 02:03:17', '2019-11-30 02:03:17'),
(7, 'Steve Immanuel', '2019-11-12', 'Bandung', '0897667', 'http://res.cloudinary.com/erdinsuharyadi/image/upload/v1575430132/hiringapp/engineer/photo/re8hcudh0zku26pfybm5.jpg', 'Mobile Programming', 'https://www.google.com/', NULL, '2019-11-30 02:03:17', '2019-11-30 02:03:17'),
(8, 'Ronaldo', '0000-00-00', 'Bogor', '089501010101', NULL, 'Front End ', 'www.google.com', 'e5e9fbe0-963e-42cb-9e41-1e004bd90c0e', '2019-12-07 03:06:30', '2019-12-07 03:08:26');

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
(6, '25995698-c838-4cab-9ca2-bc2afd28942c', 3, 'Website Kasir Minimart', 'membuat aplikasi untuk proses transaksi kasir', '2 Month', '2020-01-31', '1', '0', '2019-12-07 03:12:24', '2019-12-07 03:12:24');

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
(11, 6, 2, '70000000', 'Back end website', '2', 4, '2019-12-07 10:20:12', '1', '2019-12-07 03:14:16', '2019-12-07 03:21:15');

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
('064c12de-11b2-4e49-b8f1-ce9b073856a5', 'kristina', '$2a$10$OteV0f/v/55a.c009hxKuuz5Iv9bpU1NPVvFzWc.PRbQIuAS9XM.i', 'kristina@gmail.com', 'Kristina', '1', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiMDY0YzEyZGUtMTFiMi00ZTQ5LWI4ZjEtY2U5YjA3Mzg1NmE1IiwidXNlcm5hbWUiOiJrcmlzdGluYSIsImVtYWlsIjoia3Jpc3RpbmFAZ21haWwuY29tIiwibGV2ZWwiOiIxIiwiaWF0IjoxNTc1MDg0Mjk4LCJleHAiOjE1NzUxNzA2OTh9.8fo5hRtZd7lPyCyyqUIqR8ol8mhzdVwzo6ijcZBUfp0', '2019-11-30 03:24:26', '2019-11-30 03:24:58'),
('25995698-c838-4cab-9ca2-bc2afd28942c', 'titasari', '$2a$10$fuRx9qK/zbaUcOriv.1rMu4ZNoe8IXY7n6Vtl7MC6qdHqQ5cxbwda', 'titasari@gmail.com', 'Tita Sari', '1', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiMjU5OTU2OTgtYzgzOC00Y2FiLTljYTItYmMyYWZkMjg5NDJjIiwidXNlcm5hbWUiOiJ0aXRhc2FyaSIsImVtYWlsIjoidGl0YXNhcmlAZ21haWwuY29tIiwibGV2ZWwiOiIxIiwiaWF0IjoxNTc1Njg4MjAwLCJleHAiOjE1NzU3NzQ2MDB9.Obc4s37sOcdpEDpsAcWjeB35EfSRduyK-0XbSJ7mrUg', '2019-12-03 08:43:10', '2019-12-07 03:10:00'),
('29e4c62a-b100-471c-a098-874e7d3ae0d3', 'naufalsyfa', '$2a$10$1VgHQc1dQh0w8rrdzuXZ/.3QOdwwEGwSGqoaun2zig5gTYYz/nuOi', 'naufalsyfa@gmail.com', 'Naufal Syfa', '1', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiMjllNGM2MmEtYjEwMC00NzFjLWEwOTgtODc0ZTdkM2FlMGQzIiwidXNlcm5hbWUiOiJuYXVmYWxzeWZhIiwiZW1haWwiOiJuYXVmYWxzeWZhQGdtYWlsLmNvbSIsImxldmVsIjoiMSIsImlhdCI6MTU3NTA4NDU2MywiZXhwIjoxNTc1MTcwOTYzfQ.mid25Pmy-GqxPFjgW6oHKOLLut1umsgJU6VZ-IUDc8I', '2019-11-30 00:54:52', '2019-11-30 03:29:23'),
('930058d7-fdeb-46cf-afa5-5824a435bd91', 'erdinsuharyadi', '$2a$10$20E6fO7qBpU18R0n0uXgjePNU/RyzpviBQRcy0klOaps7gScHC4qy', 'erdinsuharyadi@gmail.com', 'Erdin Suharyadi', '1', '2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiOTMwMDU4ZDctZmRlYi00NmNmLWFmYTUtNTgyNGE0MzViZDkxIiwidXNlcm5hbWUiOiJlcmRpbnN1aGFyeWFkaSIsImVtYWlsIjoiZXJkaW5zdWhhcnlhZGlAZ21haWwuY29tIiwibGV2ZWwiOiIyIiwiaWF0IjoxNTc1NzYwMTk2LCJleHAiOjE1NzU4NDY1OTZ9.Q-5psG8mlpU-w4WUPsvmO-YuLHd32UwfcCsVklRn9GQ', '2019-11-22 04:07:58', '2019-12-07 23:09:56'),
('b0817d52-f778-4656-a0d0-94f78c345062', 'krisnamukti', '$2a$10$YaLau9ljJBq/nelY9uiNAuG4QQ2y8ZCqtRWK.cy/93in61zjhkz3y', 'kirsnamukti@gmail.com', 'Krisna Mukti', '1', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiYjA4MTdkNTItZjc3OC00NjU2LWEwZDAtOTRmNzhjMzQ1MDYyIiwidXNlcm5hbWUiOiJrcmlzbmFtdWt0aSIsImVtYWlsIjoia2lyc25hbXVrdGlAZ21haWwuY29tIiwibGV2ZWwiOiIxIiwiaWF0IjoxNTc1Njg5MTM3LCJleHAiOjE1NzU3NzU1Mzd9.bZu9tSAib2D8s7w6EDpWKNYOg1kj_bc3wmDYn654vEo', '2019-11-29 10:41:37', '2019-12-07 03:25:37'),
('e5e9fbe0-963e-42cb-9e41-1e004bd90c0e', 'ronaldo', '$2a$10$/Ro2hxjVLgoDWwIjl5Yru.1jNWymPX2Nw1HqrBlWlAzJa/YACsL6u', 'ronaldo@gmail.com', 'Ronaldo', '1', '2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiZTVlOWZiZTAtOTYzZS00MmNiLTllNDEtMWUwMDRiZDkwYzBlIiwidXNlcm5hbWUiOiJyb25hbGRvIiwiZW1haWwiOiJyb25hbGRvQGdtYWlsLmNvbSIsImxldmVsIjoiMiIsImlhdCI6MTU3NTY4ODAxMSwiZXhwIjoxNTc1Nzc0NDExfQ.sS04KzjN7WJoTTiI1tlxs08Tv9okjwdS5IPuX3wskkU', '2019-12-07 03:06:30', '2019-12-07 03:06:51'),
('e65b7751-b079-435e-bd68-0278e8d6b6cb', 'rudihabibi', '$2a$10$T3chijuAjWeUW7a6JYJJ1OOrPNTdcbAM50FLIqRC5hJ/j/UrNgxPK', 'rudihabibi@gmail.com', 'Rudi Habibi', '1', '2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiZTY1Yjc3NTEtYjA3OS00MzVlLWJkNjgtMDI3OGU4ZDZiNmNiIiwidXNlcm5hbWUiOiJydWRpaGFiaWJpIiwiZW1haWwiOiJydWRpaGFiaWJpQGdtYWlsLmNvbSIsImxldmVsIjoiMiIsImlhdCI6MTU3NTY4ODUzOCwiZXhwIjoxNTc1Nzc0OTM4fQ.c30qZXn9WOSL5qaE9Xiq03TBpJsj7MqwPlGTJeodpbY', '2019-12-02 10:57:27', '2019-12-07 03:15:38');

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
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_eng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project_eng`
--
ALTER TABLE `project_eng`
  MODIFY `id_project_eng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
