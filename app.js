const express = require("express");
const app = express();
// const request = require("request");
// const https = require("https");
app.use(express.urlencoded());
app.use(express.static(  "public"));
app.set('view engine','ejs');
let items = [];

app.get("/",function(req,res){
  let today = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay:day,newListItems:items});
});

app.post("/",function(req,res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});
