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
    }
});
