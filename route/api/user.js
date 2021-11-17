const express=require('express');
const route=express.Router();
const{check,validationResult}=require('express-validator/check')
route.get('/',(req,res)=>res.send('user connected..'))
const User=require('../../model/User');
const gravatar=require('gravatar');
const bcrypt=require('bcryptjs');

route.post('/',
[check('name','name reqd').not().isEmpty(),
check('email','email is reqd').isEmail(),
check('password','min 6 len').isLength({min:6})],
async(req,res)=>{
    
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:array()});
    }
    const {name,email,password}=req.body;
    try{
        let user=await User.findOne({email});

        if(user){
             return res.status(400).json({errors:[{
                msg:'user already exists'}]});
        }

        const avatar=gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        user=new User({
            name,
            email,
            avatar,
            password
        });

        const salt= await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(password,salt);
        await user.save();

        res.send('user route');

 


    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
    
})
module.exports=route;


