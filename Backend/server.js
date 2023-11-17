const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
});

app.post('/Register',(req,res)=>{
    const sql = "INSERT INTO logintable (`name`,`email`,`password`) VALUES(?)"
    const value = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql,[value],(err,data)=>{
     if(err){
        return res.json("Error")
     }
     return res.json(data);
    })
});

app.post('/login',(req,res)=>{
    const sql1 = "SELECT * FROM logintable WHERE `email` = ? AND `password` = ?";
    
    db.query(sql1,[req.body.email,req.body.password],(err,data)=>{
        
      if(err){
        return res.json("Error")
      }

        if(data.length > 0){
        return res.json("success");
        } else{
            return res.json("Failed");
        }     
    })


});

app.listen(8087,()=>{
    console.log("done");
})