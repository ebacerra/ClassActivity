-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  food Varchar(30) NOT NULL,
  -- Make a string column called "food" which cannot contain null --
  score integer(10),
  -- Make an numeric column called "score" --
);

CREATE TABLE favorite_songs (
  song Varchar (30) NOT NULL,
  -- Make a string column called "song" which cannot contain null --
   artist Varchar(30),
  -- Make a string column called "artist" --
    score INTEGER(10)
  -- Make an integer column called "score" --

);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id integer (10) auto_increment NOT NULL, 
  -- Create a string column called "movie" which cannot be null --
  movie Varchar (50) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times boolean default 0
  -- Make an integer column called "score" --
  score integer (10),
   -- Set the primary key of the table to id --
   primary key(id)
);
