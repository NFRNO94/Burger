# Burger

1) Enter the burger you would like to eat. 

2) Click the devour the burger button to devour the burger

3) All burger information will be saved into a database! 


**notes**
**schema**

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burger_db;
CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(60),
devoured BOOL,

primary key (id)

);

**seeds**
INSERT INTO burgers (burger_name, devoured)
VALUES (Southwestern burger, false);

INSERT INTO burgers (burger_name, devoured)
VALUES (Double Bacon burger, false);

INSERT INTO burgers (burger_name, devoured)
VALUES (Mushroom Swiss burger, false);


**connection**

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


modules.exports = connection;

**orm**

let connection = require("./connection.js");

let orm = 

selectAll()
insertOne()
updateOne()

module.exports = orm;

**model**

let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["name", "not devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});



module.exports = router;

**

