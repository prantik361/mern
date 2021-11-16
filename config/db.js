const mongoose =require('mongoose');
const config=require('config');
const db=config.get('mongo');
const connect=async()=>{

try{
await mongoose.connect(db);
console.log('mongo connected');
}
catch(err){
    console.log('err.message');
    process.exit(1);
}

}

module.exports=connect;