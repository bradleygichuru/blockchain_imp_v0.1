//based on merkel tree data structures 
class block {
    constructor(data,previous_blockhash,merkle_root,timestamp){
        this.data = data;//transaction or the data in which we wish to maintain the integrity of 
        this.previous_blockhash = previous_blockhash;
        this.merkle_root = merkle_root; 
        this.timestamp = timestamp;
    }
}
module.exports = block;