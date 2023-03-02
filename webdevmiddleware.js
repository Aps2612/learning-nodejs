 const express = require('express');
 const app = express();


app.use(logger);//global action
 
 
app.get('/',auth,(req,res,next)=>{
    console.log('home page');
    // res.send("Home Page");
    res.send(`
    <a href="/users?admin=true">Go to user page</a>
    `)
    // next();
});

app.get('/users',auth,(req,res,next)=>{
    console.log(req.query);
    res.send("Users Page");
    // next();
});

function logger(req,res,next){
   console.log('before');//before next
    next();
    console.log('after');//next does  not work like return it works like function which goes int o call stack and after execution pops up from the stack
};

function auth(req,res,next){
    if(req.query.admin==='true'){
        next();
    }
    else{
        res.send('hi');
    }
};

 
 
app.listen(2000);