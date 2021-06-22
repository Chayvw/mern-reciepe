const express = require("express");
const router = express.Router();
const db = require("../client/models");


// Read All
//route to be able to 
router.get("/api/ingredients", (req, res) =>{
    db.Ingredient.find({}).then((foundIngredients) =>{
        // will return an object and just not foundIngredients 
        res.json({
            error:false,
            data:foundIngredients,
            message:"Successfully retrieved all ingredients",
        })

    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to new ingredient"
        })

    })

})
// Read one

// Create

router.post("/api/ingredients", (req, res) =>{
    db.Ingredient.create(req.body).then((createdIngredient) => {
        res.json({
            error:false,
            data:createdIngredient,
            message:"Successfully created an ingredient",
        })


    }).catch((err) =>{
        // if it is an error than .catch will give you a 500 status error 
        res.status(500).json({
            error:true,
            data:null,
            message:"Unable to retrieve all ingredients"
        })

    })
})
//Edit
// Delete

// will have to require this controller in my server.js file to be able to view it on postman 

module.export = router;