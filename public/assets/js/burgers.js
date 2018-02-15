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
            }
        );
    });
});