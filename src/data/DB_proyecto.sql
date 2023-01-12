DROP DATABASE IF EXISTS gamer_house_db;
CREATE DATABASE gamer_house_db;
USE gamer_house_db;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
   `id_users` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(15) NOT NULL,
   `lastname` VARCHAR(25) NOT NULL,
   `direction` VARCHAR(100) NOT NULL,
   `birth_date` DATE NOT NULL,
   `email` VARCHAR(20) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `gender` VARCHAR(6) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `category` VARCHAR(7) NOT NULL DEFAULT client,
   PRIMARY KEY (`id_users`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
   `id` INT NOT NULL,
   `name` VARCHAR(100) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `discount` INT,
   `platform` VARCHAR(15) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `image2` VARCHAR(100),
   `image3` VARCHAR(100),
   `image4` VARCHAR(100),
   `type` VARCHAR(6) NOT NULL,
   `stock` INT NOT NULL,
   `category` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Product_platform`;
CREATE TABLE `Product_platform` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `User_category`;
CREATE TABLE `User_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Product_type`;
CREATE TABLE `Product_type` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Product_category`;
CREATE TABLE `Product_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Items_product`;
CREATE TABLE `Items_product` (
   `id` INT NOT NULL,
   `cart` INT NOT NULL,
   `product` INT NOT NULL,
   `total_product` INT NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 

DROP TABLE IF EXISTS `Product_cart`;
CREATE TABLE `Product_cart` (
   `id` INT NOT NULL,
   `user` INT NOT NULL,
   `total_price` INT NOT NULL,
   `total_item` INT NOT NULL,
   PRIMARY KEY (`id`)
);

---
--- Dumping data for table
--- 


ALTER TABLE `Users` ADD CONSTRAINT `FK_a8a5d381-f135-4e7d-bfc2-ddb3560f65e8` FOREIGN KEY (`category`) REFERENCES `User_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_f15a90c2-835b-4a69-864a-b8d0bbd57ad0` FOREIGN KEY (`platform`) REFERENCES `Product_platform`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_37fc864e-ffe4-48a0-a1b8-ed5e3646c224` FOREIGN KEY (`type`) REFERENCES `Product_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_1c5e9802-fa12-49bf-95f3-85f53dfa6609` FOREIGN KEY (`category`) REFERENCES `Product_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Items_product` ADD CONSTRAINT `FK_4c778726-338a-469b-b2b8-4d0b830eb514` FOREIGN KEY (`cart`) REFERENCES `Product_cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Items_product` ADD CONSTRAINT `FK_8af6913b-00af-4d62-b0d1-99e24c4cfb1f` FOREIGN KEY (`product`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Product_cart` ADD CONSTRAINT `FK_a958f076-c356-49c7-a988-a9eb983df758` FOREIGN KEY (`user`) REFERENCES `Users`(`id_users`)  ;
