const express = require("express");

const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res){
    const data= await burger.selectAll();
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
});

router.post("/api/burgers", async function(req, res){
    const result= await burger.insertOne(req.body.burger_name);
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    
});
router.put("/api/burgers/:id", async function(req, res){
    const id = req.params.id;
    const bstatus= req.body.devoured;
    const result= await burger.updateOne(bstatus,id);
    if (result.changedRows == 0){
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        }
    
});
// Export routes for server.js to use.
module.exports = router;