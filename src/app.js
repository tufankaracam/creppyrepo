const express = require("express");
const corst = require("cors");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({message:"API Working"});
});

app.listen(5000,()=>{
    console.log('Server started!');
});
