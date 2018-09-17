CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp BOOLEAN DEFAULT false, 
  createdAt timestamp not null default current_timestamp, 
	PRIMARY KEY (id)
);

