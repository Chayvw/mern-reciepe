const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required: "Ingredient name is required"
    },
    

})

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient; 