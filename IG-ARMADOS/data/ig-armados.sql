-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ig-armados
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_PRODUCT_ID_idx` (`product_id`),
  KEY `FK_USER_ID_idx` (`user_id`),
  CONSTRAINT `FK_PRODUCT_ID` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_USER_ID` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Destacados'),(2,'Ofertas'),(3,'Novedades '),(4,'Otra');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components`
--

DROP TABLE IF EXISTS `components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components`
--

LOCK TABLES `components` WRITE;
/*!40000 ALTER TABLE `components` DISABLE KEYS */;
INSERT INTO `components` VALUES (1,'Mother'),(2,'Memoria Ram'),(3,'Disco Rigido'),(4,'Monitor'),(5,'Procesador'),(6,'Fuentes'),(7,'Tarjeta grafica'),(8,'Teclados'),(9,'Mouse'),(10,'Cables'),(11,'Maquinas Armadas'),(12,'Gabinetes'),(13,'Otro');
/*!40000 ALTER TABLE `components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guarantee`
--

DROP TABLE IF EXISTS `guarantee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guarantee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guarantee`
--

LOCK TABLES `guarantee` WRITE;
/*!40000 ALTER TABLE `guarantee` DISABLE KEYS */;
INSERT INTO `guarantee` VALUES (1,'Sin Garantia'),(2,'3 meses'),(3,'6 meses'),(4,'12 meses'),(5,'Otro');
/*!40000 ALTER TABLE `guarantee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'logo.png',5),(2,'default-image.png',6),(3,'image-1615934415990.png',7),(4,'image-1615934538696.png',8),(5,'default-image.png',9),(6,'image-1615936714157.png',10),(7,'image-1616001985968.jfif',11),(8,'image-1616004637293.png',12),(9,'image-1616005291639.jpg',13),(10,'image-1616012282770.jpg',14),(11,'image-1616603347201.png',15),(12,'image-1616605408251.png',16),(13,'image-1617630955579.jpg',17),(14,'image-1617632334357.jpg',18),(15,'image-1617632686585.jpg',19),(16,'image-1617633856989.jpeg',20),(17,'image-1617633962479.jpg',21),(18,'image-1617634010738.png',22),(19,'image-1617634067653.jpg',23),(20,'image-1617634119732.jpg',24),(21,'image-1617634180752.jpg',25),(22,'image-1617634233338.jpg',26),(23,'image-1617634305462.jpg',27);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (1,'Asus'),(2,'Intel'),(3,'Amd'),(4,'Hiper X'),(5,'Ati'),(6,'Msi'),(7,'AsRock'),(8,'Gigabyte'),(9,'Otra');
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `insale` smallint DEFAULT NULL,
  `stock` smallint NOT NULL,
  `description` varchar(500) NOT NULL,
  `features` varchar(500) NOT NULL,
  `model` varchar(100) NOT NULL,
  `guarantee_id` int NOT NULL,
  `mark_id` int NOT NULL,
  `component_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_GUARANTEE_ID_idx` (`guarantee_id`),
  KEY `FK_MARK_ID_idx` (`mark_id`),
  KEY `FK_COMPONENT_ID_idx` (`component_id`),
  KEY `FK_CATEGORY_ID_idx` (`category_id`),
  CONSTRAINT `FK_CATEGORY_ID` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_COMPONENT_ID` FOREIGN KEY (`component_id`) REFERENCES `components` (`id`),
  CONSTRAINT `FK_GUARANTEE_ID` FOREIGN KEY (`guarantee_id`) REFERENCES `guarantee` (`id`),
  CONSTRAINT `FK_MARK_ID` FOREIGN KEY (`mark_id`) REFERENCES `marks` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (20,'Combo I5',30000,1,0,'Productividad y entretenimiento, todo disponible en computadoras de escritorio. La superioridad tecnológica de Intel es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.\",','\"description\": \"Productividad y entretenimiento, todo disponible en computadoras de escritorio. La superioridad tecnológica de Intel es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.\",','otro',4,9,11,3),(21,'Motherboard Asus Prime H310m-r',43234,1,0,'saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd','saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd','H310M-R',3,1,1,3),(22,'Memoria RAM 8GB HyperX',8754,1,0,'Memoria RAM 8GB HyperX','Memoria RAM 8GB HyperX','HyperX',2,4,2,3),(23,'Gefore Gtx 1660 6gb',200000,1,0,'Gefore Gtx 1660 6gbGefore Gtx 1660 6gb','Gefore Gtx 1660 6gbGefore Gtx 1660 6gb','qq',1,1,7,3),(24,'Evga Gtx 1650 4gb Gddr6',1000000,1,0,'Evga Gtx 1650 4gb Gddr6Evga Gtx 1650 4gb Gddr6','Evga Gtx 1650 4gb Gddr6Evga Gtx 1650 4gb Gddr6','qq',3,5,7,1),(25,'Intel Core i7-10700',20000,2,0,'Intel Core i7-10700Intel Core i7-10700Intel Core i7-10700','Intel Core i7-10700Intel Core i7-10700Intel Core i7-10700','H310M-R',2,2,5,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol_id` int DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ROL_ID_idx` (`rol_id`),
  CONSTRAINT `FK_ROL_ID` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin IG','Armados','admin@gmail.com','$2b$12$zLv6HIb5bzuSOvFVvAUKGuTXzETjlOXC1ucPcZd5DtSWn5yFd.oPG','default.png',1,'','','bs as',''),(2,'cristian','rodriguez','1@hotmail.com','$2b$12$Uty2rvIG8S/VjAADzssW9uq2tWSGC9ZadtZG7Od2Zg/E3cFCkuIB2','default.png',NULL,NULL,NULL,NULL,NULL),(3,'ada','adasdad','2@hotmail.com','$2b$12$6YH.vKq0F/sSHGYLNOxtp.iZ9sBDdRDPYgGpE.4xrA9uUikz45JFe','default.png',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-05 13:27:07
