-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2020 at 12:58 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `book_name` varchar(255) NOT NULL,
  `book_author` varchar(255) NOT NULL,
  `book_description` text DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT 0,
  `seller_name` varchar(255) DEFAULT NULL,
  `book_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `user_name`, `book_name`, `book_author`, `book_description`, `isbn`, `rating`, `seller_name`, `book_img`) VALUES
(3, 'uits_habib', 'Hajar Bosor Dhore', 'Humayun Ahmed', 'ei boi ta khub valo...tmi bujbe....', '145858', 8, 'habib', 'profile.jpg'),
(5, 'anaet_vai', 'Hajar Bosor Dhore', 'Humayun Ahmed', 'ei boi ta khub valo...tmi bujbe....', '145858', 8, 'habib', 'profile.jpg'),
(8, 'ew_niloy', 'amader gram', 'nasir ali', 'amader boi ta khubi valo silo', '4157', 8, 'turukkha', 'gettyimages-914272382-612x612.jpg'),
(9, 'ew_niloy', 'aa', 'aa', 'aa', '145858', 25, 'Habib', 'images.jpg'),
(10, 'ew_niloy', 'a', 'a', 'a', 'a', 0, 'a', 'top-10-nonfiction-2019.jpg'),
(11, 'ew_niloy', 'bb', 'bb', 'bb', 'bb', 15, 'bb', '429941bc-56df-11e9-8b71-f5b0066105fe.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `UserName` char(255) NOT NULL,
  `FullName` varchar(255) DEFAULT NULL,
  `Email` char(255) NOT NULL,
  `profile_pic` text DEFAULT NULL,
  `Password` char(255) NOT NULL,
  `IsActive` tinyint(1) NOT NULL DEFAULT 0,
  `Code` text DEFAULT NULL,
  `Role` int(11) NOT NULL DEFAULT 0,
  `uva` varchar(255) DEFAULT NULL,
  `uri` varchar(255) DEFAULT NULL,
  `codeforces` varchar(255) DEFAULT NULL,
  `vjudge` varchar(255) DEFAULT NULL,
  `uva_accepted` int(11) NOT NULL DEFAULT 0,
  `uri_accepted` int(11) NOT NULL DEFAULT 0,
  `codeforces_accepted` int(11) NOT NULL DEFAULT 0,
  `vjudge_accepted` int(11) NOT NULL DEFAULT 0,
  `University_Name` varchar(255) DEFAULT NULL,
  `Google_ID` varchar(255) DEFAULT NULL,
  `Facebook_ID` varchar(255) DEFAULT NULL,
  `Twitter_ID` varchar(255) DEFAULT NULL,
  `total_accepted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Id`, `UserName`, `FullName`, `Email`, `profile_pic`, `Password`, `IsActive`, `Code`, `Role`, `uva`, `uri`, `codeforces`, `vjudge`, `uva_accepted`, `uri_accepted`, `codeforces_accepted`, `vjudge_accepted`, `University_Name`, `Google_ID`, `Facebook_ID`, `Twitter_ID`, `total_accepted`) VALUES
(39, 'uits_habib', '      Habibur Rahman  ', 'habiburrahman3089@gmail.com', 'profile.jpg', '1234', 1, '4499', 3, '887116', '105330', 'HabiburRahman', 'habiburrahman', 0, 0, 0, 0, '  University of Information Technology &amp;amp; Sciences', '   habiburrahman3089@gmail.com', 'facebook.com/habib', '   10', 0),
(55, 'ew_niloy', ' NIloy Hasan Mahmud', 'shahrear_niloy@outlook.com', 'top-10-nonfiction-2019.jpg', '12345', 1, '4499', 0, NULL, NULL, NULL, NULL, 0, 0, 0, 0, '  East West University', 'niloyhasan157989654@gmail.com', ' facebook.com/niloy_hasan', '  twitter.com/niloy_hasan', 0),
(56, 'anaet_vai', NULL, 'anaet@yopmail.com', NULL, '12345', 1, '4499', 0, NULL, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
