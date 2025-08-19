const express=require("express");

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "public"));

app.get("/",(req,res)=>{
    res.send("Elcome ");
});

app.listen(3000,()=>{
    console.log("Server started");
});
