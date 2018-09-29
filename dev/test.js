const Blockchain = require('./blockchain');
const realcoin = new Blockchain();


const previousBlockHash = 'DFKJSDf837498374SDFSDF'
const currentBlockData = [
{
    amount: 10,
    sender: 'ASDKJDF834734#2',
    recipient: 'ASDKJ3472934#SDFS'
},
{
    amount: 90,
    sender: 'KOWIDJS#22212',
    recipient: 'LDKFIOERU#ASDHY8787EHSDFS'
},
{
    amount: 120,
    sender: 'DFKSIERI#09982',
    recipient: 'DOIEKJS#SDSDAL8734JSHFS'
}
];
const nonce = 100;


console.log(realcoin.hashBlock(previousBlockHash,currentBlockData, nonce));
// realcoin.createNewBlock(32421, 'SDFSDJFKKJ342FD', '23$KSJD324AKDO23');


// realcoin.createNewTransaction(100, 'JUNOKALD827397SD', 'JULIUSAKSJ9823');

// realcoin.createNewBlock(7659, 'SSDG675HJJEQ', 'KOYU887QXTYR');

// realcoin.createNewTransaction(100, 'JUNOKALD827397SD', 'JULIUSAKSJ9823');
// realcoin.createNewTransaction(10000, 'JUNOKALD827397SD', 'JULIUSAKSJ9823');
// realcoin.createNewTransaction(23800, 'JUNOKALD827397SD', 'JULIUSAKSJ9823');

// realcoin.createNewBlock(823, 'KSDLA9823JFDKF', 'EIRIEUR8373KAL');


// console.log(realcoin);
