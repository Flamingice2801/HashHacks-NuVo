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

//require(["crypto-js/aes", "crypto-js/sha256"], function (AES, SHA256) {
    String.prototype.hashCode = function() {
      var hash = 0, i, chr;
      if (this.length === 0) return hash;
      for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    class Block {
        calculateHash() {
            var hashed = ((this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString().hashCode() + "");
            alert(hashed);
            return hashed;
        }
        viewBlockData() {
            console.log(JSON.stringify(this, null, 4));
        }
        constructor(index, timestamp, data, previousHash = '') {
            this.index = index;
            this.timestamp = timestamp;
            this.data = data;
            this.previousHash = previousHash;
            this.hash = this.calculateHash();
        }

    }
    const chain = [];
    class Blockchain {
        constructor() {
            this.createGenesisBlock().viewBlockData();
        }

        createGenesisBlock() {
            let g = new Block(0, "1509144683073", "gen", "0");
            //g.viewBlockData
            chain.push(g);
            //alert("Chain: " + (chain[0]).viewBlockData());
            return g;

        }

        getLatestBlock() {
            //alert("the latest block " + chain[chain.length-1]);
            return chain[chain.length-1];
        }

        addBlock(newBlock) {
            newBlock.previousHash = this.getLatestBlock().hash;
            newBlock.hash = newBlock.calculateHash();
            chain.push(newBlock);
            newBlock.viewBlockData();
        }

        getLatestHash() {
            //this.getLatestBlock().viewBlockData();
            this.getLatestBlock().hash;
        }
    }

    let b = new Blockchain();
    var index = 0;
    /*b.addBlock(new Block(1, Date.now().toString(), {candidate: 1}, b.getLatestHash()));
    b.addBlock(new Block(2, Date.now().toString(), {candidate: 3}, b.getLatestHash()));
    b.addBlock(new Block(3, Date.now().toString(), {candidate: 2}, b.getLatestHash()));*/
    //alert("Chain length: " + chain.length);

    //console.log(JSON.stringify(b, null, 4));
//});

function createBlockChain(n) {
    b.addBlock(new Block(index+1, Date.now().toString(), {candidate: n}, b.getLatestHash()));
    index += 1;
}
