const express =require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static("public"));
var items=[];
var works=[];
app.get("/",(req,res)=>{

res.render("list",{head:"To do list",keyitem:items});
});

app.post("/",(req,res)=>{
     var item=req.body.newitem;
     if(req.body.button==="Worklist")
     {
         console.log(1);
        works.push(item);
        res.redirect("/work");
     }
     else{
         console.log(2);
        items.push(item);
        res.redirect("/");
     }
   
  
});

app.get("/work",(req,res)=>{

    res.render("list",{head:"Worklist",keyitem:works});
    });
  
   
app.listen(3000,()=>{
    console.log("Server connected at port 3000");
});