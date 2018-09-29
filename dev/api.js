const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4242;
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const realcoin = new Blockchain();


const nodeAddress = uuid().split('-').join('');

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
    const lastBlock = realcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: realcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };
    const nonce = realcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = realcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    realcoin.createNewTransaction(4.2, "101", nodeAddress);
    
    const newBlock = realcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    
    res.json({
        note: "New block mined succesfully",
        block: newBlock
    });
    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
