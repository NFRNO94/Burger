let burgers = require("../models/burger.js")

module.exports = function (app) {

    app.get("/", function (req, re) {
        res.render("index", {
        });
    });
};