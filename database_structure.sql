-- phpMyAdmin SQL Dump
-- version 5.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
-- SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Database: `base`
use base



CREATE TABLE `db_users` (
  `id` int(11) NOT NULL,
  `userID` varchar(100) NOT NULL,
  `userFirstName` varchar(100) NOT NULL,
  `userSurname` varchar(100) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userPhone` int(11) NOT NULL,
  `userAddressLine1` varchar(255) NOT NULL,
  `userAddressLine2` varchar(255) NOT NULL,
  `userAddressPostcode` varchar(255) NOT NULL,
  `userGender` varchar(255) NOT NULL,
  `userDateOfBirth` date DEFAULT NULL,
  `userRole` int(11) NOT NULL,
  `userDateJoined` date DEFAULT current_timestamp(),
  `userDateUpdated` date DEFAULT NULL,
  `userLastLoggedIn` date DEFAULT NULL,
  `userAccountApproved` tinyint(4) DEFAULT NULL,
  `userDeleted` tinyint(4) DEFAULT NULL,
  `userDeletedDate` datetime DEFAULT NULL,
  `userMeta` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table `db_users`

INSERT INTO `db_users` (`id`, `userID`, `userFirstName`, `userSurname`, `userEmail`, `userPassword`, `userPhone`, `userAddressLine1`, `userAddressLine2`, `userAddressPostcode`, `userGender`, `userDateOfBirth`, `userRole`, `userDateJoined`, `userDateUpdated`, `userLastLoggedIn`, `userAccountApproved`, `userDeleted`, `userDeletedDate`, `userMeta`) VALUES
(27, '0ddc7770-bb8f-4308-aad5-4e483770fd07', 'Testing', 'Dev', 'testing@dev.com', '$2b$10$AoLSic7y3KUs8mhYesWBoOCOPcXSlwDyNCHJCdagpMjETnVDU8iUW', 1234567890, 'Address 1', 'Address 2', 'DEV004', '1', '1994-10-10', 0, '2023-08-05', NULL, NULL, 1, NULL, NULL, '[object Object]');

-- Indexes for dumped tables

ALTER TABLE `db_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userID` (`userID`);

-- AUTO_INCREMENT for table `db_users`
ALTER TABLE `db_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

