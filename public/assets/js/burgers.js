$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        const newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(function(){
            console.log("Added a new Burger");
            location.reload();
        }); 
    });
    $(".eatburger").on("click", function(event){
        event.preventDefault();
        const id = $(this).data("id");
        const devouredState = {
            devoured: "true"
            };
        $.ajax("api/burgers/"+id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });
});