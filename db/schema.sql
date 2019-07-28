DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

-- CREATE TABLE burgers
-- (
--     id int NOT NULL
--     AUTO_INCREMENT,
--     burger_name VARCHAR(100),
--     devoured BOOLEAN DEFAULT false,
--     createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
--     PRIMARY KEY(id)
-- );