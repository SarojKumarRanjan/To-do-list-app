const express=require("express");

const bodyparser=require("body-parser");

const app=express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

var workItem=[];

app.set('view engine', "ejs");

app.use(bodyparser.urlencoded({extended:true }));

app.use(express.static("public"));


app.get("/",function(req,res){

var today=new Date();

var options = {
    weekday: "long",
    day:"numeric",
    month:"long"
};

var day= today.toLocaleDateString("en-US", options);

res.render("list", {listTitle: day
 , newListItems: items});

});

app.post("/" , function(req,res){
 var item = req.body.newItem;

 if(req.body.list=== "work"){

    workItem.push(item);
    res.redirect("/work");
 }

 else{
    items.push(item);

    res.redirect("/");

 }

});

app.get("/work", function(req,res){

res.render("list", {listTitle:"work List" , newListItems: workItem});

});

app.get("/about", function(req,res){

    res.render("about");
});




app.listen(3000,function(){

    console.log("server is running at port 3000");
});