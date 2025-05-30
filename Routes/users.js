const express = require('express');
const con = require('../db/connection.js');
const route = express.Router();
const { check, validationResult } = require('express-validator');


route.post('/', [

    check('name')
        .isLength({min:3})
        .withMessage('name must be at least 3 character long'),
    check('email')
        .isLength({min:3})
        .withMessage('email must be at least 3 character long'),
    check('age')
        .isInt({min:16})
        .withMessage('Age must be a number and greater than 16')
 ], (req,res) => {

     const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const { id, name, email, age} = req.body;

    const insert_query = 'INSERT INTO users (id, name, email, age) VALUES ($1,$2,$3,$4)';

    con.query(insert_query, [id, name, email, age], (err,result) => {
        if (err) {
            res.send(err.message);
        }else {
            res.send("POSTED DATA")
        }
})


})

route.get('/', (req,res) => {
    const fetch_query = "SELECT * from users";
    con.query(fetch_query, (err, result) => {
        if(err) {
            res.send(err)
        }else{
            res.send(result.rows);
            res.end();
        }
    })
})

route.get('/:id', (req,res) => {
    const id = req.params.id;

    const fetch_query ="select * from users where id = $1";

    con.query(fetch_query, [id], (err, result) => {
        if(err){
            res.send(err);
        }else {
            res.send(result.rows)
        }
    })
})


route.put(':id', (req,res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email= req.body.email;
    const age = req.body.age;

    const update_query = "UPDATE users SET name=$2, email=$3, age=$4 WHERE id=$1";

    con.query(update_query, [id, name, email, age], (err, result) => {
        if(err){
            res.send(err.message);
        }else{
            // console.log(result.rows)
            res.send('UPDATED');
        }
    })
})

route.delete('/:id', (req,res) => {
    const id = req.params.id;
    const delete_query = 'Delete from users where id =$1';

    con.query(delete_query,[id], (err, result) => {
        if(err){
            res.send(err)
        }else{
            res.send('Post Deleted');
        }
    })
})



module.exports = route;