/*const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = calculateHash();
    }

    calculateHash() {
        return SHA256(index + previousHash + timestamp + JSON.stringify(data)).toString;
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
    }

    createGenesisBlock() {
        return new Block(0, "1509144683073", "gen", "0");
    }
}*/


require.config({
    packages: [
        {
            name: 'crypto-js',
            location: 'crypto-js',
            main: 'index'
        }
    ]
});

require(["crypto-js/aes", "crypto-js/sha256"], function (AES, SHA256) {
    class Block {
        calculateHash() {
            var hashed = (SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString() + "");
            alert(hashed);
            return hashed;
        }
        constructor(index, timestamp, data, previousHash = '') {
            this.index = index;
            this.timestamp = timestamp;
            this.data = data;
            this.previousHash = previousHash;
            this.hash = this.calculateHash();
        }        
    }

    class Blockchain {
        constructor() {
            this.chain = [];
            this.createGenesisBlock();
        }

        createGenesisBlock() {
            return new Block(0, "1509144683073", "gen", "0");
        }

        getLatestBlock() {
            return this.chain[this.chain.length-1];
        }

        /*addBlock(newBlock) {
            newBlock.previousHash = this.getLatestBlock.hash;
            newBlock.hash = newBlock.calculateHash();
            this.chain.push(this.newBlock);
        }*/
    }

    let b = new Blockchain();
    b.addBlock(new Block(1, Date.now().toString, {candidate: 1}));
    b.addBlock(new Block(2, Date.now().toString, {candidate: 3}));

    console.log(JSON.stringify(b, null, 4));
});
