const express = require("express");
const mongoose = require("mongoose")
const path = require("path");

// requiring my controller 
const IngredientsController = require("./controllers/ingredientController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

}

// app.use(express.static("client/build"));


app.get("/api/config", (req, res) =>{
    res.json({success:true})
});

// app.use to serve up my controller
app.use(IngredientsController);

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
} )

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-starter", { useNewUrlParser: true },  { useUnifiedTopology: true }).then(()=>{console.log("Connected Successfully")}).catch((err)=>{console.log("Unable to connect")})

app.listen(PORT, () =>{
    console.log(`Express server running on http://localhost:${PORT}`)
});
