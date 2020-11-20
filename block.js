//based on merkel tree data structures
const merkel = require("merkletreejs");
const crypto = require("crypto-js");

class block {
  constructor(blockData, previous_blockhash) {
    this.blockData = blockData; //transaction or the data in which we wish to maintain the integrity of
    this.previous_blockhash = previous_blockhash;
    this.merkle_root;
    this.timestamp; //time on instance of block generation
    this.processedBlock = {}; //previous blockhash ,merkle_root ,block_hash,data
    this.curBlockHash;
  }
  generate() {
    
    this.timestamp = Date.now();
    const tree = new MerkleTree(this.blockData, crypto.SHA256);
    this.merkle_root = tree.getHexRoot();
    let hash = crypto.SHA256(
      `${
        this.blockData.toString() +
        this.previous_blockhash +
        this.timestamp +
        this.merkle_root
      }`
    );
    this.curBlockHash = hash.toString(crypto.enc.Hex);
  }
}
export default block;
