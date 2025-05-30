const connection = require('./db/connection.js');
const express = require('express');
const userRoute = require('./Routes/users.js');

const PORT = process.env.PORT || 3000;
const app = express();


// body-parsing middleware
app.use(express.json());

//Databas connection
connection.connect().then(()=> console.log('connected'));

// users page
app.get('/', (req,res) => {
    res.send('Welcome to User BlogPage')
})

// users Route middleware
app.use('/users', userRoute);

// 404  Not found handler
app.use((req,res) => {
    res.status(404).send('404 Error: page not found');
})

//simulating 500 error 
app.get('/error', (req,res,next) => {
    const error = new Error('something went wrong!');
    next(error);
})

// 500 Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
})


app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`);
})