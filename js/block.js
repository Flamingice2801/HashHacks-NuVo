function Block(previousHash, data) {
    this.previousHash = previousHash;
    this.data = data;

    var array = [data.toString().hashCode().toString(), previousHash];
    this.blockHash = array.toString().hashCode();

}

function createBlockChain() {
    let block_chain = [];
    let data_string = ["random string", "accompanied by another random string"];
    let genesisBlock = new Block(0, data_string);

    let another_data_string = ["Random String", "Predetermined String"];
    let anotherBlock = new Block(genesisBlock.blockHash, another_data_string);
    alert(genesisBlock.blockHash);
    alert(anotherBlock.blockHash);
}

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
