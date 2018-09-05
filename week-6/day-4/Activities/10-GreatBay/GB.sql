DROP DATABASE IF EXISTS greatbay_db;
CREATE DATABASE greatbay_db;
USE greatbay_db;

CREATE TABLE items(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  item_name varchar (45) NOT NULL,
  starting_price INTEGER(10) NOT NULL,
  high_bidder INTEGER (10)
  PRIMARY KEY (id)
);

INSERT INTO items(item_name)
value ("tuba")
INSERT INTO items(item_name)
value ("tuba")
