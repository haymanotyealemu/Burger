// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var burger = {
    selectAll: function(){
        return orm.selectAll("burgers");
    },
    
    insertOne: function(bname){
        return orm.insertOne("burgers", "burger_name",bname);
    },
    updateOne: function(bstatus,id){
        return orm.updateOne("burgers","devoured",bstatus,"id",id);
    }
};
// Export the database functions for the controller (catsController.js).
module.exports = burger;