function block(previousHash, data) {
    this.previousHash = previousHash;
    this.data = data;

    var array = [data.hashCode().toString(), previousHash];
    this.blockHash = array.toString().hashCode();

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
