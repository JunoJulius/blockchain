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
    const blockIndex = realcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

//mine a new block 
app.get('/mine', function (req, res) {

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
