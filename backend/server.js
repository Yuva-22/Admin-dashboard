const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app  = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin"
})

app.get('/',(req, res)=>{
    const sql = "SELECT * FROM users";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/users/new',(req,res) => {
    const sql = "INSERT INTO users (`name`,`email`,`age`,`status`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.status
    ]
    db.query(sql,[values],(err, data) =>{
        if(err) return res.json(err);
        return res.json("created");
    })
})

app.put('/users/update/:id',(req,res) => {
    const sql = "UPDATE users set `name` = ?,`email` = ?,`age` = ?,`status` = ?  WHERE id = ?";
    const id = req.params.id;
    console.log(req.body);
    const values = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.status
    ]
    db.query(sql,[...values,id],(err, data) =>{
        if(err) return res.json(err);
        return res.json("updated");
    })
})

app.delete('/users/delete/:id',(req,res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    const id = req.params.id;
    
    db.query(sql,[id],(err, data) =>{
        if(err) return res.json(err);
        return res.json("deleted");
    })
})





app.listen(8081,()=>{
    console.log("Listening...");
})