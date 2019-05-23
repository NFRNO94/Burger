const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (value, cb) {
        orm.create("burgers", "burger_name", value, function (res) {
            cb(res);
        });
    },

    update: function (user_id, cb) {
        orm.update("burgers", "devoured", 1, "id", user_id, function (res) {
            cb(res);
        });
    },

    delete: function (user_id, cb) {
        orm.delete("burgers", "id", user_id, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;