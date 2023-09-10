var express = require("express");
const bodyParser=require("body-parser")


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;

app.use(express.static("public"));

let newItems=[];
app.get("/",(req,res)=>{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    res.render("index.ejs",{todayDate:today.toLocaleDateString("en-US", options),listItem:newItems})
})

app.post("/",(req,res)=>{
let newItem=req.body.newItem;
newItems.push(newItem)
res.redirect('/')
})


app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
