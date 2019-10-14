CREATE TABLE `mkt_default` (
  `marketCd` varchar(2) NOT NULL,
  `variableoverhead_default` decimal(10,2) DEFAULT NULL,
  `fixedoverhead_default` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`marketCd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
