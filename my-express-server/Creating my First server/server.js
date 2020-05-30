//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at ojasvi@gmail.com");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
