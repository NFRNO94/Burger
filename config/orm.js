let connection = require("./connection.js");

let orm = {

    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, cb) {
       // let queryString = "INSERT INTO ?? (name)"
    //},
    //updateOne: function () {

    //}
};



module.exports = orm;