-- create db
CREATE DATABASE todo_database;

-- move into that database
-- \c into todo_database;

-- create table
CREATE TABLE todo(
	todo_id SERIAL PRIMARY KEY,
	description VARCHAR(255)
);