const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
const { Router } = require("express");

app.use(cors());
app.use(express.json());

// register User
app.post("/register", async(req,res) => {
    try{
        pool.connect();
        const email = req.body.email;
        const password = req.body.password;
        // pool.query('SELECT * from "user"', function(err, res){
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log(res.rows[0].email);
        //     }
        // })
        await pool.query('INSERT INTO "user" ("email", "password") VALUES($1,$2) RETURNING *', [email, password], function(err, res){
            if (err){
                console.log(err);
            }
            else{
                console.log("Added Successfully");
            }
        });
    }
    catch(e){
        console.log(e);
    }
})
app.get('/user', async (req,res)=>{
    try{
        const user = await pool.query('SELECT * from "user"');
        console.log(user.rows);
        res.send(user.rows)
    }
    catch(e){
        console.log(e);
    }
})


//login User
app.post('/login', async (req,res) => {
    try{
        pool.connect();
        const userInfo = req.body;
        console.log(userInfo.email);
        const user = await pool.query('SELECT * from "user" WHERE "email" = $1', [userInfo.email]);
        console.log(user.rows[0]);
        res.send(user.rows[0]);
        
    }
    catch(e){
        console.log(e);
    }
})
app.get('/', function(req, res){
    res.send("Welcome to Login")
})


app.listen(5000, ()=>{
    console.log("server is running good");
})