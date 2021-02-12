//TODO research
import { default as Block } from "./block";
class Chain {
  constructor() {
    this.blockChain = [];
  }
  addblock(blockObj) {
    if (blockObj.isGenesisBlock == true && this.blockChain[1] == null) {
        //if the block is a genesis block and no blocks exist in the block chain add it to the chain as the fast block 
        this.blockChain.push(blockObj)
    }
  }
}
//let b1 = new Block()
