const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Wel ome to my Madi's backend applicator");

});

app.get("/madi", (req, res)=>{
    res.send("Hello Madi!");
});

app.listen(3000, ()=>{
    console.log("Listening")
});