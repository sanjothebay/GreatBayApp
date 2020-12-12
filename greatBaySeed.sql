CREATE DATABASE GreatBay_db;
USE GreatBay_db;
create table items(
id integer auto_increment primary key,
itemName VARCHAR(50) NOT NULL,
category VARCHAR(50) NOT NULL,
bid DECIMAL(10,2) NULL
)



-- CREATE DATABASE GreatBay_db;

-- USE GreatBay_db;

-- CREATE TABLE GreatBay (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(100) NULL,
--   starting_bid INTEGER NULL,
--   highest_bid INTEGER NULL
  
-- );


-- SELECT * FROM GreatBay;
