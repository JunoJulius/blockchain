const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4242;
const Blockchain = require('./blockchain');

const realcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// fetch entire blockchain
app.get('/blockchain', function (req, res) {
res.send(realcoin);
});

// create a new transaction 
app.post('/transaction', function (req, res) {
    console.log(req.body);
    res.send(`the amount is ${req.body.amount} realcoin`)

});

//mine a new block 
app.get('/mine', function (req, res) {

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
