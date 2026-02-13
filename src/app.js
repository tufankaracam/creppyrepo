const express = require("express");
const corst = require("cors");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({message:"API Working"});
});

app.get("/test",(req,res)=>{
    res.status(200).json({message:"API test Working"});
});

app.get("/upload",(req,res)=>{
    res.status(200).json({message:"API test Working"});
});

app.listen(5000,()=>{
    console.log('Server started!');
});
