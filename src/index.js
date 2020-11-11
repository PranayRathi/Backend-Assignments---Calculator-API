const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello world!");
})

//API for Addition
app.post("/add", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(200).send({
            status : "error",
            message : "invalid data types",
            sum : ""
        });
        res.end();
        return;
    }

    if(num1 >= 1000000 || num2 >= 1000000){
        res.status(200).send({
            status : "failure",
            message : "Overflow",
            sum : ""
        });
        res.end();
        return;
    }
   
    res.status(200).send({
        status : "success",
        message : "the sum of given two numbers",
        sum : num1 + num2
    });
    res.end();
    return;
}) 

//API for substraction
app.post("/sub", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(200).send({
            status : "error",
            message : "invalid data types",
            difference : ""
        });
        res.end();
        return;
    }

    if(num1 < 1000000){
        res.status(200).send({
            status : "failure",
            message : "Underflow",
            difference : ""
        });
        res.end();
        return;
    }
    if(num2 < 1000000){
        res.status(200).send({
            status : "failure",
            message : "Underflow",
            difference : ""
        });
        res.end();
        return;
    }
   
    res.status(200).send({
        status : "success",
        message : "the difference of given two numbers",
        difference : num1 - num2
    });
    res.end();
    return;
}) 

//API for miltiplication
app.post("/multiply", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(200).send({
            status : "error",
            message : "invalid data types",
            result : ""
        });
        res.end();
        return;
    }

    if(num1 > 1000000 || num2 > 1000000){
        res.status(200).send({
            status : "failure",
            message : "Overflow",
            result : ""
        });
        res.end();
        return;
    }
   
    res.status(200).send({
        status : "success",
        message : "The product of given numbers",
        result : num1 * num2
    });
    res.end();
    return;
}) 

//API for division
app.post("/division", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(200).send({
            status : "error",
            message : "invalid data types",
            result : ""
        });
        res.end();
        return;
    }

    if(num2 ==0){
        res.status(200).send({
            status : "failure",
            message : "Cannot divide by zero",
            result : ""
        });
        res.end();
        return;
    }
   
    res.status(200).send({
        status : "success",
        message : "The division of given numbers",
        result : num1 / num2
    });
    res.end();
    return;
}) 

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
