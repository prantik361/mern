const mongoose=require('mongoose');
const userschema= new mongoose.Schema({

name:{
    type :String,
    required: true
},
email:{
    type:String,
    required: true,
    unique: true
},
avatar:{
    type:String,

},
password:{
    type:String,
    required:true

}


})

module.exports=User=mongoose.model('user',userschema); 