var express=require("express")
var app=express();

app.get('/',function(req,res){
    res.send("home");
})


app.listen(3000,function(req,res){
    console.log("listening at 3000");
}
);