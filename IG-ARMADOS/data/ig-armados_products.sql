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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-05 12:41:57
