DROP DATABASE IF EXISTS gamer_house_db;
CREATE DATABASE gamer_house_db;
USE gamer_house_db;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `Users` (
   `id_users` INT NOT NULL AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
   `name` VARCHAR(15) NOT NULL,
   `lastname` VARCHAR(25) NOT NULL,
   `direction` VARCHAR(100) NOT NULL,
   `birth_date` DATE NOT NULL,
   `email` VARCHAR(20) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `gender` VARCHAR(6) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id_users`)
);



DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
   `name` VARCHAR(100) NOT NULL,
   `description` VARCHAR(455) NOT NULL,
   `price` INT NOT NULL,
   `discount` INT,
   `platform_id` INT NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `image2` VARCHAR(100),
   `image3` VARCHAR(100),
   `image4` VARCHAR(100),
   `type_id` INT NOT NULL,
   `stock` INT NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `Product_platform`;
CREATE TABLE `Product_platform` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(15) NOT NULL,
   PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `User_category`;
CREATE TABLE `User_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `Product_type`;
CREATE TABLE `Product_type` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `Product_category`;
CREATE TABLE `Product_category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `Items_product`;
CREATE TABLE `Items_product` (
   `id` INT NOT NULL,
   `cart` INT NOT NULL,
   `product` INT NOT NULL,
   `total_product` INT NOT NULL,
   PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `Product_cart`;
CREATE TABLE `Product_cart` (
   `id` INT NOT NULL,
   `user` INT NOT NULL,
   `total_price` INT NOT NULL,
   `total_item` INT NOT NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `users` (`id_users`, `name`, `lastname` , `direction`, `birth_date`, `email`, `password`, `gender`, `image`, `category_id`) VALUES ('0', 'Admin', 'Test', 'Lincol Av 907', '2022-10-12', 'aa@aa.aa', '$2a$10$3qRU68qnyP2jEJWK6ZMgzuGvwGIAEpDp4ZtmhKcP4GwSFqMqx0OzW', 'male', 'default-profile.jpg', '1');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('1', 'GTA', 'Tres ciudades icónicas, tres historias épicas. Esta edición incluye a los clásicos de la trilogía original de Grand Theft Auto: GTA III, GTA Vice City y GTA San Andreas, actualizados para una nueva generación, ahora con mejoras en la iluminación, ambientes remasterizados, texturas de alta resolución y optimización de controles.', '89', '35', '1', 'img-gta-the-trilogy-xbox-one.jpg', 'img-gta-the-trilogy-xbox-one-2.jpg', 'img-gta-the-trilogy-xbox-one-3.jpg', 'img-gta-the-trilogy-xbox-one-4.jpg', '2', '13', '5');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('2', 'Call of Duty', 'Call of Duty: Modern Warfare II sumerge a los jugadores en un conflicto global sin precedentes que presenta el regreso de los icónicos Operadores de Task Force 141. Ofrece un juego de última generación, con un manejo de armas completamente nuevo, avanzado sistema de inteligencia artificial e innovaciones gráficas que elevan la franquicia a nuevas alturas.', '100', '25', '2', 'img-call-of--dutty-mw-ps5.jpg', 'img-call-of--dutty-mw-ps5-2.jpg', 'img-call-of--dutty-mw-ps5-3.jpg', 'img-call-of--dutty-mw-ps5-4.jpg', '2', '13', '1');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('9', 'GTA', 'Tres ciudades icónicas, tres historias épicas. Esta edición incluye a los clásicos de la trilogía original de Grand Theft Auto: GTA III, GTA Vice City y GTA San Andreas, actualizados para una nueva generación, ahora con mejoras en la iluminación, ambientes remasterizados, texturas de alta resolución y optimización de controles.', '89', '35', '1', 'img-gta-the-trilogy-xbox-one.jpg', 'img-gta-the-trilogy-xbox-one-2.jpg', 'img-gta-the-trilogy-xbox-one-3.jpg', 'img-gta-the-trilogy-xbox-one-4.jpg', '2', '13', '5');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('3', 'Call of Duty', 'Call of Duty: Modern Warfare II sumerge a los jugadores en un conflicto global sin precedentes que presenta el regreso de los icónicos Operadores de Task Force 141. Ofrece un juego de última generación, con un manejo de armas completamente nuevo, avanzado sistema de inteligencia artificial e innovaciones gráficas que elevan la franquicia a nuevas alturas.', '100', '25', '2', 'img-call-of--dutty-mw-ps5.jpg', 'img-call-of--dutty-mw-ps5-2.jpg', 'img-call-of--dutty-mw-ps5-3.jpg', 'img-call-of--dutty-mw-ps5-4.jpg', '2', '13', '2');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('4', 'GTA', 'Tres ciudades icónicas, tres historias épicas. Esta edición incluye a los clásicos de la trilogía original de Grand Theft Auto: GTA III, GTA Vice City y GTA San Andreas, actualizados para una nueva generación, ahora con mejoras en la iluminación, ambientes remasterizados, texturas de alta resolución y optimización de controles.', '89', '35', '1', 'img-gta-the-trilogy-xbox-one.jpg', 'img-gta-the-trilogy-xbox-one-2.jpg', 'img-gta-the-trilogy-xbox-one-3.jpg', 'img-gta-the-trilogy-xbox-one-4.jpg', '2', '13', '5');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('5', 'Call of Duty', 'Call of Duty: Modern Warfare II sumerge a los jugadores en un conflicto global sin precedentes que presenta el regreso de los icónicos Operadores de Task Force 141. Ofrece un juego de última generación, con un manejo de armas completamente nuevo, avanzado sistema de inteligencia artificial e innovaciones gráficas que elevan la franquicia a nuevas alturas.', '100', '25', '2', 'img-call-of--dutty-mw-ps5.jpg', 'img-call-of--dutty-mw-ps5-2.jpg', 'img-call-of--dutty-mw-ps5-3.jpg', 'img-call-of--dutty-mw-ps5-4.jpg', '2', '13', '1');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('6', 'GTA', 'Tres ciudades icónicas, tres historias épicas. Esta edición incluye a los clásicos de la trilogía original de Grand Theft Auto: GTA III, GTA Vice City y GTA San Andreas, actualizados para una nueva generación, ahora con mejoras en la iluminación, ambientes remasterizados, texturas de alta resolución y optimización de controles.', '89', '35', '1', 'img-gta-the-trilogy-xbox-one.jpg', 'img-gta-the-trilogy-xbox-one-2.jpg', 'img-gta-the-trilogy-xbox-one-3.jpg', 'img-gta-the-trilogy-xbox-one-4.jpg', '2', '13', '5');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('7', 'Call of Duty', 'Call of Duty: Modern Warfare II sumerge a los jugadores en un conflicto global sin precedentes que presenta el regreso de los icónicos Operadores de Task Force 141. Ofrece un juego de última generación, con un manejo de armas completamente nuevo, avanzado sistema de inteligencia artificial e innovaciones gráficas que elevan la franquicia a nuevas alturas.', '100', '25', '2', 'img-call-of--dutty-mw-ps5.jpg', 'img-call-of--dutty-mw-ps5-2.jpg', 'img-call-of--dutty-mw-ps5-3.jpg', 'img-call-of--dutty-mw-ps5-4.jpg', '2', '13', '2');
INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('8', 'GTA', 'Tres ciudades icónicas, tres historias épicas. Esta edición incluye a los clásicos de la trilogía original de Grand Theft Auto: GTA III, GTA Vice City y GTA San Andreas, actualizados para una nueva generación, ahora con mejoras en la iluminación, ambientes remasterizados, texturas de alta resolución y optimización de controles.', '89', '35', '1', 'img-gta-the-trilogy-xbox-one.jpg', 'img-gta-the-trilogy-xbox-one-2.jpg', 'img-gta-the-trilogy-xbox-one-3.jpg', 'img-gta-the-trilogy-xbox-one-4.jpg', '2', '13', '5');
INSERT INTO `products` (`id`, `deleted_at`, `name`, `description`, `price`, `discount`, `platform_id`, `image`, `image2`, `image3`, `image4`, `type_id`, `stock`, `category_id`) VALUES ('10', '2023-01-16 01:21:59', 'Call of Duty', 'Call of Duty: Modern Warfare II sumerge a los jugadores en un conflicto global sin precedentes que presenta el regreso de los icónicos Operadores de Task Force 141. Ofrece un juego de última generación, con un manejo de armas completamente nuevo, avanzado sistema de inteligencia artificial e innovaciones gráficas que elevan la franquicia a nuevas alturas.', '100', '25', '2', 'img-call-of--dutty-mw-ps5.jpg', 'img-call-of--dutty-mw-ps5-2.jpg', 'img-call-of--dutty-mw-ps5-3.jpg', 'img-call-of--dutty-mw-ps5-4.jpg', '2', '13', '1');


INSERT INTO `product_category` VALUES (1,'Accion'),(2,'Aventura'),(3,'Deportes'),(4,'Estrategia'),(5,'Simulacion');
INSERT INTO `product_platform` VALUES (1,'Xbox'),(2,'Play Station'),(3,'Nintendo'),(4,'Computadora');
INSERT INTO `product_type` VALUES (1,'nuevo'),(2,'oferta');
INSERT INTO `user_category` VALUES (1,'admin'),(2,'normal');

ALTER TABLE `Users` ADD CONSTRAINT `FK_a8a5d381-f135-4e7d-bfc2-ddb3560f65e8` FOREIGN KEY (`category_id`) REFERENCES `User_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_f15a90c2-835b-4a69-864a-b8d0bbd57ad0` FOREIGN KEY (`platform_id`) REFERENCES `Product_platform`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_37fc864e-ffe4-48a0-a1b8-ed5e3646c224` FOREIGN KEY (`type_id`) REFERENCES `Product_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Products` ADD CONSTRAINT `FK_1c5e9802-fa12-49bf-95f3-85f53dfa6609` FOREIGN KEY (`category_id`) REFERENCES `Product_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Items_product` ADD CONSTRAINT `FK_4c778726-338a-469b-b2b8-4d0b830eb514` FOREIGN KEY (`cart`) REFERENCES `Product_cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Items_product` ADD CONSTRAINT `FK_8af6913b-00af-4d62-b0d1-99e24c4cfb1f` FOREIGN KEY (`product`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Product_cart` ADD CONSTRAINT `FK_a958f076-c356-49c7-a988-a9eb983df758` FOREIGN KEY (`user`) REFERENCES `Users`(`id_users`)  ;
