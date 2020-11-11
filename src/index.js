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

const responseMsg = {
        status: "",
        message: ""
}

//API for Addition
app.post("/add", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        responseMsg.status = "error";
        responseMsg.message = "invalid data types";
        responseMsg.sum = "";
        res.send(responseMsg);
        return;
    }

    if(num1 >= 1000000 || num2 >= 1000000){
        responseMsg.status = "failure";
        responseMsg.message = "Overflow";
        responseMsg.sum = "" ;
        res.send(responseMsg);
        return;
    }
    responseMsg.status =  "success",
    responseMsg.message =  "the sum of given two numbers",
    responseMsg.sum =  num1 + num2;
    res.status(200).send(responseMsg);
    res.end();
});

//API for substraction
app.post("/sub", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(400).send("invalid data types");
        return;
    }

    if(num1 < 1000000){
        res.status(404).send("Underflow");
        return;
    }
    else if(num2 < 1000000){
        res.status(404).send("Underflow");
        return;
    }
    const op = {
        status: "success/failure/error",
        message: "the difference of given two numbers",
        difference: num1 - num2
    }
    res.status(200).send(op);
}) 

//API for miltiplication
app.post("/multiply", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(400).send("invalid data types");
        return;
    }

    if(num1 >= 1000000 || num2 >= 1000000){
        res.status(404).send("Overflow");
        return;
    }
    const op = {
        status: "success/failure/error",
        message: "the product of given two numbers",
        result: num1 * num2
    }
    res.send(op);
});

//API for division
app.post("/division", (req, res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;
   
    if(typeof(num1)=== 'string' || typeof(num2)=== 'string'){
        res.status(400).send("invalid data types");
        return;
    }

    if(num2 === 0){
        res.status(404).send("Cannot divide by zero");
        return;
    }
    const op = {
        status: "success/failure/error",
        message: "the division of given numbers",
        result: num1 / num2
    }
    res.status(200).send(op);
}) 


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
