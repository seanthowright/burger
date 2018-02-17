// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#addburger").on("click", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#burger_name").val().trim()
        }

        $.ajax("/burgers/insertOne", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New Burger!")
                location.reload();
            }
        );
    });
});

$(function() {
    $("#devourburger").on("click", function(event) {
        let id = $(this).data("id");
        var newBurger = $(this).data("newBurger");

        var newBurgerState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/burgers/updateOne/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Eaten Burger!", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});