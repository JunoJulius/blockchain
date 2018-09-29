const express = require('express');
const app = express();
const port = 4242;

// fetch entire blockchain
app.get('/blockchain', function (req, res){
 
 
});

// create a new transaction 
app.post('/transaction', function (req, res){
    console.log(req.body);
    res.send(`the amount is ${req.body.amount} realcoin`)

});

//mine a new block 
app.get('/mine', function (req, res){

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
