//express introduction

const express = require('express'); 


const app = express();

app.get('',(req,res)=>{
    res.send('hi,this is home page');
});

app.get('/about',(req,res)=>{
    res.send('hi,this is about page');
});

app.get('/help',(req,res)=>{
    res.send('hi,this is help page');
});

app.get('/*',(req,res)=>{
    res.send('hi this is random page');
})

app.listen(4000); // by this serer listens on port ni. 4000

