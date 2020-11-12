const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const overFlow = {
    status  : "error",
    message : "Overflow"
}

const underFlow = {
    status  :   "error",
    message :   "Underflow" 
}

const invalid = {
    status  :   "error",
    message :   "invalid data types"
}

function validator(num1, num2) {
    //check for invalid data type
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        res.status(400).send(invalid);
        res.end();
        return;
    };

    //check for value higher than 10M
    if(num1 > 1000000 || num2 > 1000000){
        res.status(400).send(overFlow);
        res.end();
        return;
    };

    //check for value lesser than -10M
    if(num1 < -1000000 || num2 < -1000000){
        res.status(400).send(underFlow);
        res.end();
        return;
    }
    return;
}

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

    validator(num1, num2);

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
    
    validator(num1, num2);
    res.status(200).send({
        status : "success",
        message : "the difference of given two numbers",
        difference : parseFloat(num1 - num2)
    });
    res.end();
    return;
}) 

//API for miltiplication
app.post("/multiply", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    validator(num1, num2);
   
    res.status(200).send({
        status : "success",
        message : "The product of given numbers",
        result : num1 * num2
    });
    res.end();
    return;
}) 

//API for division
app.post("/divide", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    validator(num1, num2);
    
    if(num2 ==0){
        res.status(400).send({
            status : "error",
            message : "Cannot divide by zero"
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
