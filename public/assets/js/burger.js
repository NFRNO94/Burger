$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");

        let newDevouredBurger = {
            devoured: newdevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredBurger
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                location.reload();
            });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bu").val().trim(),
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