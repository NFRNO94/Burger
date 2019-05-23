let connection = require("../config/connection.js");

let orm = {

    all: function (tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";",
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    create: function (tableName, col_name, value, cb) {
        connection.query("INSERT INTO " + tableName
            + " ( " + col_name + " ) "
            + " VALUES (?)", [value],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    update: function (tableName, set_col, set_val, colParam, valParam, cb) {
        connection.query("UPDATE " + tableName
            + " SET " + set_col
            + " = ? WHERE " + colParam
            + " = ?", [set_val, valParam],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    },
    delete: function (tableName, col_name, value, cb) {
        connection.query("DELETE FROM " + tableName
            + " WHERE " + col_name
            + " = ?", [value],
            function (err, result) {
                if (err) throw err;
                cb(result);
            });
    }
};



module.exports = orm;