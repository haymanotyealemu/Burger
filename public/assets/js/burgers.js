$(function(){
        $(".create-form").on("submit", function(event){
        event.preventDefault();
        // get the user input from textarea
        const value = $("#newburger").val().trim();
        const newBurger = {burger_name:value};
        // send the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger

        }).then(function(){
            console.log("Added a new Burger");
            location.reload();
        }); 
    });

    $(".btn-success").on("click", function(event){
        event.preventDefault();
        //get the id of the burger devoured
        const id = $(this).data("id");
        const devouredState = {devoured: 1};
        // build the URL for PUT request and make ajax call to the server (our "devour it" button event handler handle this request from the client side code).
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger devoured");
            location.reload();
        });
    });


    

});