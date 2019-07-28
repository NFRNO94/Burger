// let API = {
//     getBurgers: function (cb) {
//         console.log('getBurgers')

//         $.ajax({
//             url: "api/burgers",
//             type: "GET"
//         }).then(
//             function (data) {
//                 console.log(data);
//                 cb(data);
//             }
//         )
//     },
//     createBurger: function (newBurger) {
//         console.log("createBurger");

//         return $.ajax({
//             url: "api/burgers",
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("created new burger");
//             }
//         );
//     },
//     updateBurger: function (newBurger, id) {
//         console.log("updateBurger");

//         return $.ajax({
//             url: "api/burgers/" + id,
//             type: "PUT",
//             data: newBurger
//         })
//     },
//     deleteBurger: function (id) {
//         console.log("deleteBurger");

//         return $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(
//             function () {
//                 console.log("deleted id ", id);
//             }
//         );
//     }
// }

$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        let newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            });
    });

    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            });
    });
});