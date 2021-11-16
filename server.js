const express =require ('express');
const app=express();
const connect=require('./config/db');

connect();

app.get('/',(req,res)=>res.send('started'));
app.use('/user',require('./route/api/user'));
app.use('/auth',require('./route/api/auth'));

app.listen(5000);