-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2022 at 01:11 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Poke`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `content` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'titulo 1', 'cicontenido del primer post', '2022-03-09', '2022-03-17');

-- --------------------------------------------------------

--
-- Table structure for table `Pokes`
--

CREATE TABLE `Pokes` (
  `id` int(11) NOT NULL,
  `id_poke` int(11) NOT NULL,
  `nickname` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_owner` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `Pokes`
--

INSERT INTO `Pokes` (`id`, `id_poke`, `nickname`, `id_owner`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'el mas querido', 1, '0000-00-00', '0000-00-00'),
(3, 2, 'chato verde', 1, '2022-03-18', '2022-03-21'),
(5, 5, 'chato rojo', 1, '2022-03-18', '2022-03-21'),
(6, 7, 'add name', 1, '2022-03-18', '2022-03-18'),
(7, 9, 'add name', 1, '2022-03-18', '2022-03-18'),
(8, 18, 'el mas gallo', 1, '2022-03-20', '2022-03-21'),
(9, 25, 'add name', 1, '2022-03-20', '2022-03-20'),
(10, 34, 'add name', 1, '2022-03-21', '2022-03-21'),
(11, 53, 'add name', 1, '2022-03-21', '2022-03-21'),
(12, 30, 'add name', 1, '2022-03-21', '2022-03-21'),
(13, 33, 'add name', 1, '2022-03-21', '2022-03-21'),
(14, 21, 'add name', 1, '2022-03-21', '2022-03-21'),
(15, 3, 'add name', 1, '2022-03-21', '2022-03-21'),
(17, 146, 'add name', 1, '2022-03-21', '2022-03-21'),
(18, 95, 'add name', 1, '2022-03-21', '2022-03-21'),
(19, 6, 'El chato', 9, '2022-03-21', '2022-03-21'),
(20, 1, 'El machin', 10, '2022-03-23', '2022-03-23'),
(21, 97, 'lobezno', 10, '2022-03-23', '2022-03-23'),
(22, 6, 'add name', 10, '2022-03-23', '2022-03-23'),
(24, 4, 'add name', 11, '2022-03-24', '2022-03-24'),
(25, 8, 'add name', 11, '2022-03-24', '2022-03-24'),
(26, 6, 'add name', 11, '2022-03-24', '2022-03-24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `tName` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `region` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `gender` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `age` int(4) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `trainerClass` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `tName`, `region`, `gender`, `age`, `email`, `trainerClass`, `pass`, `createdAt`, `updatedAt`) VALUES
(1, 'test0', 'test0', 'test0', 'Other', 120, 'test', 'test0', 'test', '0000-00-00', '2022-03-17'),
(9, 'Ricardo', 'Tato', 'idk', 'Male', 23, 'ricardo@pro.com', 'pro', '1q2w3e', '2022-03-21', '2022-03-21'),
(10, 'Cristiano', 'Bicho', 'Portugal', 'Male', 25, 'Bicho@pro.com', 'Battle', 'bicho', '2022-03-23', '2022-03-23'),
(11, 'Ricardo', 'TATO', 'Guate', 'Male', 23, 'tato@pro.com', 'Battle', 'tato', '2022-03-23', '2022-03-23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Pokes`
--
ALTER TABLE `Pokes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_owner` (`id_owner`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Pokes`
--
ALTER TABLE `Pokes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Pokes`
--
ALTER TABLE `Pokes`
  ADD CONSTRAINT `pokes_ibfk_1` FOREIGN KEY (`id_owner`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
