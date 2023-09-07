const route=require("express").Router();

route.get("/api/login",(req, res)=>{
    res.send("this is Login Page")
})
route.get("/api/signUp",(req, res)=>{
    res.send("this is Login Page")
})
route.get("/api/logOut",(req, res)=>{
    res.send("this is LogOut Page")
})
module.exports=route;