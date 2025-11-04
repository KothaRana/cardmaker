
const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}))

let blogs= [
    {
        title:'blog1',
        date:'29 0ct',
        content : 'con',
        imageUrl:'Image1'
    },
     {
        title:'blog2',
        date:'30 0ct',
        content : 'con',
         imageUrl:'Image2'
    },
     {
        title:'blog3',
        date:'31 0ct',
        content : 'con',
         imageUrl:'Image3'
    }
]


app.get("/",(req, res)=>{
    res.send("This is Home page");
});

app.post("/user/signup",(req, res)=>{
    console.log(req.body);
    res.send("This is signup page");
});
 
app.post("/user/sigin",(req, res)=>{
    res.send("This is signin page");
});
app.get("/user/data",(req, res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
   res.json(blogs);
});
// to start server in port 5000
app.listen(5000);