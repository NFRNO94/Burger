# Burger

1) Enter the burger you would like to eat. 

2) Click the devour the burger button to devour the burger

3) All burger information will be saved into a database! 


**notes**

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burger_db;
CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(60),
devoured BOOL,

primary key (id)

);

INSERT INTO burgers (burger_name, devoured)
VALUES (Southwestern burger, false);

INSERT INTO burgers (burger_name, devoured)
VALUES (Double Bacon burger, false);

INSERT INTO burgers (burger_name, devoured)
VALUES (Mushroom Swiss burger, false);



